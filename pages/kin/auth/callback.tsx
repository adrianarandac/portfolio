import type { NextPage } from "next";
import Head from "next/head";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import Navbar from "../../../components/Navbar";

type AuthNotice = {
  kind: "success" | "error";
  title: string;
  description: string;
};

function decodeAuthMessage(value: string | null) {
  if (!value) {
    return null;
  }

  try {
    return decodeURIComponent(value.replace(/\+/g, " "));
  } catch {
    return value.replace(/\+/g, " ");
  }
}

function getAuthNoticeFromLocation(): AuthNotice {
  if (typeof window === "undefined") {
    return {
      kind: "success",
      title: "Email confirmed.",
      description: "Return to the app\nand sign in to continue.",
    };
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

  if (error || errorDescription) {
    return {
      kind: "error",
      title:
        errorCode === "otp_expired"
          ? "This confirmation link expired."
          : "We couldn't confirm that link.",
      description:
        decodeAuthMessage(errorDescription) ??
        "Please request a fresh confirmation email and try again.",
    };
  }

  return {
    kind: "success",
    title: "Email confirmed.",
    description: "Your KIN email is confirmed.\nReturn to the app and sign in to continue.",
  };
}

const KinAuthCallbackPage: NextPage = () => {
  const { setTheme } = useTheme();
  const [notice, setNotice] = useState<AuthNotice>({
    kind: "success",
    title: "Email confirmed.",
    description: "Return to the app\nand sign in to continue.",
  });
  const [logoWidth, setLogoWidth] = useState<number | null>(null);
  const logoRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  useEffect(() => {
    setNotice(getAuthNoticeFromLocation());
  }, []);

  useEffect(() => {
    function syncLogoWidth() {
      if (!logoRef.current) {
        return;
      }

      setLogoWidth(logoRef.current.getBoundingClientRect().width);
    }

    syncLogoWidth();
    window.addEventListener("resize", syncLogoWidth);

    return () => {
      window.removeEventListener("resize", syncLogoWidth);
    };
  }, []);

  return (
    <>
      <Head>
        <title>KIN Auth Callback - Adrian Aranda</title>
        <meta
          name="description"
          content="KIN email confirmation callback and authentication status."
        />
        <meta property="og:title" content="KIN Auth Callback - Adrian Aranda" />
        <meta
          property="og:description"
          content="KIN email confirmation callback and authentication status."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.adrianaranda.com/kin/auth/callback"
        />
        <link
          rel="canonical"
          href="https://www.adrianaranda.com/kin/auth/callback"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Navbar />
      <main className="kin-page">
        <section className="kin-content">
          <div className="kin-callback">
            <header className="kin-hero kin-callback-hero">
              <div className="kin-lockup">
                <div
                  className="kin-app-icon-wrap"
                  style={logoWidth ? { width: `${logoWidth}px` } : undefined}
                >
                  <img
                    src="/kin-app-icon.png"
                    alt="KIN app icon"
                    width={120}
                    height={120}
                    className="kin-app-icon"
                  />
                </div>
                <h1 ref={logoRef} className="kin-logo">
                  KIN
                </h1>
              </div>
            </header>

            <section
              className={`kin-auth-notice kin-auth-notice--${notice.kind}`}
              aria-live="polite"
            >
              <h2>{notice.title}</h2>
              <p>{notice.description}</p>
            </section>

            <div className="kin-callback-actions">
              <Link href="/kin" className="kin-footer-link">
                Back to KIN
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default KinAuthCallbackPage;
