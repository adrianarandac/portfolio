import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

type AuthNotice = {
  kind: "success" | "error";
  title: string;
  description: string;
} | null;

const features = [
  {
    label: "AI-powered animal identification from photos",
    icon: (
      <svg
        height="200px"
        width="200px"
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        fill="currentColor"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M496.872,423.839l-85.357-85.358c-4.76,7.322-9.901,14.378-15.392,21.142l-31.484-31.485 c1.357-1.771,2.7-3.556,4.014-5.371c0.885-1.225,1.756-2.45,2.596-3.689c0.148-0.192,0.28-0.398,0.414-0.59 c0.855-1.254,1.711-2.523,2.538-3.792c1.8-2.744,3.526-5.518,5.179-8.351c17.691-30.174,27.857-65.291,27.857-102.725 s-10.166-72.55-27.857-102.724c-17.692-30.145-42.893-55.346-73.037-73.038C276.168,10.166,241.052,0,203.618,0 c-37.433,0-72.55,10.166-102.724,27.858c-1.239,0.723-2.464,1.461-3.689,2.228c-1.564,0.959-3.128,1.948-4.663,2.951 c-2.729,1.785-5.429,3.63-8.07,5.548c-0.886,0.634-1.756,1.284-2.627,1.933c-0.914,0.694-1.829,1.387-2.744,2.081 c-0.841,0.664-1.697,1.328-2.538,2.006c-1.653,1.328-3.29,2.671-4.899,4.058C63.402,55.7,55.7,63.402,48.662,71.665 c-1.387,1.608-2.73,3.232-4.058,4.899c-0.678,0.841-1.343,1.697-2.006,2.538c-0.694,0.915-1.387,1.83-2.08,2.744 c-0.649,0.87-1.298,1.741-1.933,2.626c-1.918,2.641-3.762,5.341-5.548,8.071c-1.004,1.535-1.992,3.099-2.951,4.663 c-0.767,1.224-1.505,2.449-2.228,3.689C10.166,131.069,0,166.186,0,203.62s10.166,72.55,27.857,102.725 c17.692,30.144,42.893,55.346,73.037,73.037c30.174,17.692,65.291,27.858,102.724,27.858c37.434,0,72.55-10.166,102.724-27.858 c1.888-1.106,3.748-2.243,5.592-3.408c0.929-0.575,1.844-1.166,2.759-1.77c1.269-0.826,2.538-1.682,3.792-2.538 c0.192-0.133,0.398-0.266,0.59-0.413c1.239-0.841,2.464-1.712,3.689-2.597c1.815-1.313,3.6-2.656,5.371-4.013l31.483,31.483 c-6.764,5.49-13.82,10.632-21.14,15.393l85.358,85.358C433.913,506.954,447.134,512,460.354,512s26.441-5.046,36.518-15.124 C517.042,476.706,517.042,444.009,496.872,423.839z M284.682,323.283c-0.413,0.295-0.826,0.575-1.254,0.841 c-0.472,0.34-0.959,0.649-1.446,0.959c-0.442,0.295-0.886,0.575-1.328,0.856c-0.576,0.369-1.15,0.723-1.726,1.062 c-0.546,0.34-1.077,0.664-1.623,0.989c-1.166,0.694-2.332,1.357-3.512,2.021c-0.089,0.059-0.177,0.104-0.28,0.162 c-0.96,0.531-1.933,1.048-2.907,1.549c-0.384,0.222-0.768,0.428-1.166,0.62c-0.767,0.398-1.549,0.782-2.33,1.166 c-1.491,0.738-2.996,1.446-4.516,2.124c-18.016,8.086-37.979,12.586-58.975,12.586c-20.996,0-40.959-4.5-58.975-12.586 c-32.403-14.519-58.518-40.635-73.037-73.037C63.52,244.58,59.02,224.616,59.02,203.62s4.5-40.96,12.586-58.976 c2.272-5.061,4.824-9.974,7.643-14.711c0.325-0.546,0.649-1.077,0.988-1.623c0.915-1.52,1.874-3.025,2.878-4.5 c0.546-0.841,1.106-1.667,1.696-2.494c0.694-1.033,1.416-2.051,2.17-3.054c1.135-1.549,2.301-3.084,3.496-4.589 c6.832-8.572,14.622-16.363,23.195-23.195c1.505-1.195,3.04-2.361,4.589-3.497c1.004-0.753,2.022-1.476,3.054-2.169 c0.827-0.59,1.653-1.151,2.494-1.697c1.476-1.003,2.981-1.962,4.5-2.877c0.546-0.34,1.077-0.664,1.623-0.989 c4.736-2.818,9.65-5.371,14.711-7.643c18.016-8.086,37.979-12.586,58.975-12.586c20.996,0,40.96,4.5,58.975,12.586 c32.402,14.519,58.518,40.635,73.037,73.037c8.086,18.016,12.586,37.98,12.586,58.976s-4.5,40.96-12.586,58.976 c-0.679,1.52-1.386,3.025-2.124,4.515c-0.384,0.782-0.768,1.564-1.166,2.332c-0.192,0.398-0.399,0.782-0.62,1.166 c-0.502,0.974-1.018,1.948-1.549,2.907c-0.059,0.103-0.103,0.192-0.162,0.28c-0.65,1.18-1.328,2.346-2.022,3.512 c-0.325,0.546-0.649,1.077-0.988,1.623c-0.339,0.576-0.694,1.151-1.063,1.726c-0.28,0.443-0.56,0.886-0.856,1.328 c-0.31,0.487-0.62,0.974-0.959,1.446c-0.265,0.428-0.546,0.841-0.841,1.254c-0.28,0.413-0.561,0.826-0.856,1.239 c-0.148,0.251-0.325,0.502-0.516,0.738c-0.324,0.487-0.679,0.989-1.033,1.476c-2.685,3.733-5.548,7.319-8.587,10.756 c-0.545,0.635-1.106,1.254-1.667,1.874c-0.723,0.797-1.446,1.594-2.184,2.361c-0.856,0.9-1.741,1.8-2.627,2.686 c-0.884,0.885-1.785,1.77-2.685,2.626c-0.767,0.738-1.564,1.46-2.361,2.184c-0.62,0.561-1.239,1.121-1.874,1.667 c-3.437,3.04-7.023,5.902-10.756,8.588c-0.487,0.354-0.989,0.708-1.476,1.033c-0.236,0.192-0.487,0.369-0.738,0.516 C285.508,322.722,285.094,323.003,284.682,323.283z"></path>
        </g>
      </svg>
    ),
  },
  {
    label: "Species information including habitat, diet, and behavior",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M290,32H104A24,24,0,0,0,80,56V456a24,24,0,0,0,24,24H290Z"></path>
          <path d="M408,32H350V480h58a24,24,0,0,0,24-24V56A24,24,0,0,0,408,32Z"></path>
        </g>
      </svg>
    ),
  },
  {
    label: "Personal wildlife journal and collection",
    icon: (
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        fill="currentColor"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <style type="text/css">{`.st0{fill:currentColor;}`}</style>
          <g>
            <path
              className="st0"
              d="M489.135,21.728c-12.625,0-22.875,10.25-22.875,22.875c0,7.375,3.516,13.922,8.953,18.109 c-2.234,5.219-5,11.281-8.344,18.016c-5.938,11.891-13.703,25.813-23.563,40.578c-4.75-2.578-9.922-4.469-15.391-5.469 c-0.828-18.313-3.219-37.188-5.609-52.516c-0.594-3.828-1.188-7.438-1.766-10.766c7.297-3.828,12.297-11.453,12.297-20.266 c0-12.625-10.25-22.875-22.875-22.875c-12.641,0-22.875,10.25-22.875,22.875c0,11.813,8.969,21.547,20.484,22.75 c0.641,3.688,1.297,7.75,1.953,12.063c2.203,14.313,4.328,31.531,5.125,48.047c-15.203,1.141-28.516,8.859-37.188,20.234 c-16.953-44.047-57.609-77.313-105.188-82.641c-69.156-7.75-131.094,45.797-138.359,119.609 c-2.688,27.328,2.516,53.594,13.625,76.234c-39.969,4.734-72.891,38.594-77.266,83.031c-5.031,51.281,30.094,94.938,77.859,102.594 c21.25,3.391,42.016,0.828,61.906-6.125c-10.109,7.859-20.625,15.375-31.547,22.391c-13.141,8.453-16.953,25.953-8.5,39.109 c8.453,13.141,25.953,16.953,39.094,8.5c35.672-22.938,66.969-49.906,94.063-77.984c40.672-42.156,71.953-86.844,94.359-124.938 c11.203-19.063,20.188-36.484,27.016-51.25c3.406-7.375,6.297-14.094,8.641-20.109c1.219-3.063,2.281-5.938,3.234-8.641 c20.125-7.406,34.313-26.938,33.828-49.594c-0.313-14.422-6.516-27.328-16.234-36.5c10.5-15.688,18.734-30.453,24.969-43.016 c3.453-6.969,6.297-13.25,8.594-18.672c0.531,0.047,1.047,0.078,1.578,0.078c12.625,0,22.859-10.234,22.859-22.859 S501.76,21.728,489.135,21.728z"
            ></path>
            <path
              className="st0"
              d="M45.166,327.759c4.313-43.734,32.547-80.328,70.344-94.359c-6.578-20.75-8.875-42.813-6.703-64.906 c4.438-45.234,26.844-84,59.141-108.703c-24.969-14.719-55.75-19.313-85.047-10.594c-58.422,17.375-92.578,82-76.297,144.344 c6.031,23.094,18.125,42.609,33.938,57.172C9.557,268.228-6.975,306.946,2.822,344.493c8.172,31.344,32.234,52.25,60.469,57.563 C49.479,380.915,42.494,354.931,45.166,327.759z"
            ></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    label: "Discovery map with location tracking",
    icon: (
      <svg
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.37892 10.2236L8 16L12.6211 10.2236C13.5137 9.10788 14 7.72154 14 6.29266V6C14 2.68629 11.3137 0 8 0C4.68629 0 2 2.68629 2 6V6.29266C2 7.72154 2.4863 9.10788 3.37892 10.2236ZM8 8C9.10457 8 10 7.10457 10 6C10 4.89543 9.10457 4 8 4C6.89543 4 6 4.89543 6 6C6 7.10457 6.89543 8 8 8Z"
          ></path>
        </g>
      </svg>
    ),
  },
];

const screenshots = [
  "/kin-screenshot-1.png",
  "/kin-screenshot-2.png",
  "/kin-screenshot-3.png",
  "/kin-screenshot-4.png",
  "/kin-screenshot-5.png",
];

function getAuthNoticeFromLocation() {
  if (typeof window === "undefined") {
    return null;
  }

  const hash = window.location.hash.startsWith("#")
    ? window.location.hash.slice(1)
    : window.location.hash;
  const hashParams = new URLSearchParams(hash);
  const searchParams = new URLSearchParams(window.location.search);
  const params = hash ? hashParams : searchParams;
  const errorCode = params.get("error_code");
  const errorDescription = params.get("error_description");
  const error = params.get("error");
  const type = params.get("type");
  const hasAuthTokens =
    params.has("access_token") ||
    params.has("refresh_token") ||
    params.has("code");

  if (error || errorDescription) {
    return {
      kind: "error" as const,
      title:
        errorCode === "otp_expired"
          ? "This confirmation link expired."
          : "We couldn't confirm that link.",
      description:
        errorDescription?.replace(/\+/g, " ") ??
        "Please request a fresh confirmation email and try again.",
    };
  }

  if (type === "signup" || hasAuthTokens) {
    return {
      kind: "success" as const,
      title: "Email confirmed.",
      description:
        "Your KIN email is confirmed.</br> Return to the app and sign in to continue.",
    };
  }

  return null;
}

const Kin: NextPage = () => {
  const { setTheme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [authNotice, setAuthNotice] = useState<AuthNotice>(null);

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const nextNotice = getAuthNoticeFromLocation();
    if (!nextNotice) {
      return;
    }

    setAuthNotice(nextNotice);

    const nextUrl = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState({}, document.title, nextUrl);
  }, []);

  return (
    <>
      <Head>
        <title>KIN - Adrian Aranda</title>
        <meta
          name="description"
          content="KIN is a mobile field journal that helps people discover, learn about, and collect the animals they encounter in everyday life. AI-powered identification, species info, and a personal wildlife journal."
        />
        <meta property="og:title" content="KIN - Adrian Aranda" />
        <meta
          property="og:description"
          content="KIN is a mobile field journal that helps people discover, learn about, and collect the animals they encounter in everyday life. AI-powered identification, species info, and a personal wildlife journal."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.adrianaranda.com/kin" />
        <link rel="canonical" href="https://www.adrianaranda.com/kin" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Navbar />
      <main className="kin-page">
        <section className="kin-content">
          <div className="kin-body">
            <header className="kin-hero">
              <div className="kin-lockup kin-lockup--row">
                <img
                  src="/kin-app-icon.png"
                  alt="KIN app icon"
                  width={120}
                  height={120}
                  className="kin-app-icon kin-app-icon--row"
                />
                <h1 className="kin-logo">KIN</h1>
              </div>
            </header>

            {authNotice ? (
              <section
                className={`kin-auth-notice kin-auth-notice--${authNotice.kind}`}
                aria-live="polite"
              >
                <h2>{authNotice.title}</h2>
                <p>{authNotice.description}</p>
              </section>
            ) : null}

            <section className="kin-section">
              <p>
                KIN is a mobile field journal that helps you discover and
                collect the animals around you. Snap a photo, identify the
                species with our recognition model, learn about it, and add it
                to your personal collection.
              </p>
            </section>

            <section className="kin-section kin-section--features">
              <h2>
                <span>Features</span>
              </h2>
              <div className="kin-features">
                {features.map((feature) => (
                  <div key={feature.label} className="kin-feature-item">
                    <span className="kin-feature-icon">{feature.icon}</span>
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
            </section>

            <Link
              href="https://play.google.com/store/apps/details?id=com.adrianaranda.kin"
              target="_blank"
              rel="noreferrer"
              className="kin-play-badge"
            >
              <Image
                src="/play-store.png"
                alt="Get it on Google Play"
                width={260}
                height={83}
                priority
              />
            </Link>
          </div>

          <div className="kin-showcase">
            {screenshots.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`KIN app screenshot ${i + 1}`}
                width={320}
                height={693}
                className={`kin-screenshot ${i === activeIndex ? "kin-screenshot--active" : ""}`}
                priority={i === 0}
              />
            ))}
          </div>

          <footer className="kin-footer">
            <span className="kin-footer-pill">&copy; Adrian Aranda</span>
            <Link
              href="/kin/privacy"
              className="kin-footer-pill kin-footer-pill--link"
            >
              Privacy Policy
            </Link>
          </footer>
        </section>
      </main>
    </>
  );
};

export default Kin;
