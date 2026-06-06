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
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    label: "Species information including habitat, diet, and behavior",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22V2" />
        <path d="M12 8C8.5 1.5 2 3 2 8s5 9 10 13c5-4 10-10 10-13s-6.5-6.5-10 0Z" />
      </svg>
    ),
  },
  {
    label: "Personal wildlife journal and collection",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
        <path d="M12 6v9" />
      </svg>
    ),
  },
  {
    label: "Discovery map with location tracking",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
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

            <section className="kin-section">
              <h2>Features</h2>
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
            <div className="kin-dots">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Screenshot ${i + 1}`}
                  className={`kin-dot ${i === activeIndex ? "kin-dot--active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>

          <footer className="kin-footer">
            <span>&copy; Adrian Aranda &mdash; KIN</span>
            <Link href="/kin/privacy" className="kin-footer-link">
              Privacy Policy
            </Link>
          </footer>
        </section>
      </main>
    </>
  );
};

export default Kin;
