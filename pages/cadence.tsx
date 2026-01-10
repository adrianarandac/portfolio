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
        <meta property="og:url" content="https://www.adrianaranda.com/cadence" />
        <link rel="canonical" href="https://www.adrianaranda.com/cadence" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Navbar />
      <main className="layout stack-lg">
        <section className="section-block stack">
          <h1>Cadence</h1>
          <p className="small-label allow-wrap">A music management project with an editorial format.</p>
          <p className="muted">Desktop + web music management, built for long-term cataloging.</p>
          <p className="small-label allow-wrap">
            Built with Tauri + React, backed by Supabase, deployed on Vercel at itscadence.com.
          </p>
        </section>

        <section className="section-block cadence-split">
          <article className="stat-card stack">
            <h2>Cadence Persona</h2>
            <p className="muted">Long-form artist conversation, primarily in Spanish.</p>
            <p className="small-label allow-wrap">Conversation: "Artist | CADENCE PERSONA Ep. X"</p>
            <p className="small-label allow-wrap">Performances: "Artist - Song Title | CADENCE SESSION 00X"</p>
            <p className="small-label">Closing ritual: 3 records</p>
          </article>
          <article className="stat-card stack">
            <h2>Cadence Sessions</h2>
            <p className="muted">Acoustic performances only. No talking, no applause.</p>
            <p className="small-label">Shareable artifacts</p>
          </article>
        </section>

        <section className="section-block stack">
          <p>
            Cadence lives at{" "}
            <Link href="https://itscadence.com" target="_blank" rel="noreferrer" className="link-underline accent">
              itscadence.com
            </Link>
            .
          </p>
        </section>
      </main>
    </>
  );
};

export default Cadence;
