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
          <p className="muted">A calm system for organizing music work.</p>
          <div className="link-strip">
            <span>CADENCE PERSONA</span>
            <span>CADENCE SESSIONS</span>
          </div>
        </section>

        <section className="section-block stack">
          <h2>What it is</h2>
          <div className="grid-cards">
            <article className="stat-card stack">
              <p className="eyebrow">App</p>
              <p className="muted">Desktop + web music management.</p>
              <p className="small-label allow-wrap">
                Built with Tauri + React, backed by Supabase, deployed on Vercel at itscadence.com.
              </p>
            </article>
            <article className="stat-card stack">
              <p className="eyebrow">Core</p>
              <ul className="stack">
                <li>Artists, releases, notes</li>
                <li>Sessions and ideas</li>
                <li>Minimal catalog flow</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section-block stack">
          <h2>Cadence Persona</h2>
          <div className="grid-cards">
            <article className="stat-card stack">
              <p className="muted">Long-form artist conversation, primarily in Spanish.</p>
              <div className="stack">
                <p className="small-label">Format</p>
                <ul className="stack">
                  <li>Conversation episode</li>
                  <li>Two acoustic performance videos</li>
                </ul>
              </div>
              <div className="stack">
                <p className="small-label">Naming</p>
                <ul className="stack">
                  <li>Conversation: "Artist | CADENCE PERSONA Ep. X"</li>
                  <li>Performances: "Artist - Song Title | CADENCE SESSION 00X"</li>
                </ul>
              </div>
            </article>
            <article className="stat-card stack">
              <p className="eyebrow">Closing ritual: 3 records</p>
              <ul className="stack">
                <li>At the end, the guest chooses 3 records for any reasons they want.</li>
                <li>They're told in advance so the answers are considered - not improvised.</li>
                <li>A nod to a classic BBC interview tradition (Desert Island Discs).</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section-block stack">
          <h2>Cadence Sessions</h2>
          <div className="grid-cards">
            <article className="stat-card stack">
              <p className="muted">Acoustic performances only. No talking, no applause.</p>
              <ul className="stack">
                <li>Shareable artifacts</li>
                <li>Stripped-back songs</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section-block stack">
          <h2>Episode 1 (in preparation)</h2>
          <h3>Miguel Trias de Bes</h3>
          <ul className="stack">
            <li>CADENCE PERSONA Ep. 1 - conversation (coming soon)</li>
            <li>CADENCE SESSION 001 - song TBA (coming soon)</li>
            <li>CADENCE SESSION 002 - song TBA (coming soon)</li>
          </ul>
          <p className="muted">Craft-driven, acoustic-ready songs, deep conversation, Barcelona context.</p>
          <div className="link-strip" aria-label="Episode availability">
            <span>WATCH (SOON)</span>
            <span>LISTEN (SOON)</span>
          </div>
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
