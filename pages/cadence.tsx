import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

const Cadence: NextPage = () => {
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
          CADENCE
        </Link>
      </main>
    </>
  );
};

export default Cadence;
