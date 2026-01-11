import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Navbar from "../components/Navbar";

const Cadence: NextPage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = theme === "night" ? "/logos/logo-typo-cadence-white.svg" : "/logos/logo-typo-cadence-black.svg";

  return (
    <>
      <Head>
        <title>Cadence - Adrian Aranda</title>
        <meta
          name="description"
          content="Cadence is my music management project, extended into a long-form interview format (Cadence Persona) and acoustic performances (Cadence Sessions)."
        />
        <meta property="og:title" content="Cadence - Adrian Aranda" />
        <meta
          property="og:description"
          content="Cadence is my music management project, extended into a long-form interview format (Cadence Persona) and acoustic performances (Cadence Sessions)."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.adrianaranda.com/cadence"
        />
        <link rel="canonical" href="https://www.adrianaranda.com/cadence" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Navbar />
      <main className="cadence-hero">
        <Link
          href="https://itscadence.com"
          target="_blank"
          rel="noreferrer"
          className="cadence-hero-link"
        >
          {mounted && (
            <img
              src={logoSrc}
              alt="Cadence Logo"
              className="cadence-hero-logo"
            />
          )}
        </Link>
      </main>
    </>
  );
};

export default Cadence;
