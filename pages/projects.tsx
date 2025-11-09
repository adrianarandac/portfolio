import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import sevenpng from "../public/sevenpng.png";
import sevenpng2 from "../public/sevenpng2.png";
import sevenpng3 from "../public/sevenpng3.png";
import apipiePng from "../public/apipie.png";
import apipiePng1 from "../public/apipie-1.png";
import apipiePng2 from "../public/apipie-2.png";
import apipiePng3 from "../public/apipie-3.png";
import apipiePng4 from "../public/apipie-4.png";
import daimmerGif from "../public/daimmer-macbook.png";

type Project = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  stack: string;
  source: string;
  live: string;
  images: StaticImageData[];
};

const projects: Project[] = [
  {
    slug: "seven",
    label: "SEVEN",
    eyebrow: "Project · SEVEN",
    title: "Plan your next seven days with geolocation superpowers.",
    description:
      "SEVEN is the way to realistically plan your free time for the next 7 days. This full-stack app revolves around geolocation thanks to Mapbox and the Google Maps API, along with the Geocoder library to transform coordinates to formatted addresses.",
    stack: "React · MongoDB · Mapbox · Tailwind · Google Cloud",
    source: "https://github.com/AdDanNiTom",
    live: "http://app-seven.herokuapp.com",
    images: [sevenpng, sevenpng2, sevenpng3],
  },
  {
    slug: "apipie",
    label: "Apipie",
    eyebrow: "Project · Apipie",
    title: "The collaborative recipe book.",
    description:
      "Even though it's not as technically advanced as SEVEN, this project is my personal favourite because it was fun to build and also my first full stack app. The experience stays responsive, clean, and warm.",
    stack: "HTML · Express · Mongoose · Bootstrap",
    source: "https://github.com/AdDanNiTom",
    live: "http://apipie.herokuapp.com/",
    images: [apipiePng, apipiePng1, apipiePng2, apipiePng3, apipiePng4],
  },
  {
    slug: "daimmer",
    label: "Daimmer",
    eyebrow: "Project · Daimmer",
    title: "An eye-hand coordination playground.",
    description:
      "My first build: a keyboard + pointer reflex game where headless Puppeteer-tested flows simulate tiles, teaching me DOM control and timing curves.",
    stack: "HTML · Pure CSS · Express.js · Socket-style interactions",
    source: "https://github.com/adrianarandac/daimmer",
    live: "https://adrianarandac.github.io/daimmer/",
    images: [daimmerGif],
  },
];

const Projects = () => {
  const [active, setActive] = useState(projects[0].slug);
  const [imageIndexes, setImageIndexes] = useState(() =>
    projects.reduce<Record<string, number>>((acc, project) => {
      acc[project.slug] = 0;
      return acc;
    }, {})
  );

  const activeProject = useMemo(() => projects.find((p) => p.slug === active) ?? projects[0], [active]);
  const images = activeProject.images ?? [];
  const hasImages = images.length > 0;
  const currentImageIndex = imageIndexes[activeProject.slug] ?? 0;

  const handleCycle = (direction: "next" | "prev") => {
    if (!hasImages || images.length <= 1) return;
    setImageIndexes((prev) => {
      const current = prev[activeProject.slug] ?? 0;
      const total = images.length;
      const nextIndex = direction === "next" ? (current + 1) % total : (current - 1 + total) % total;
      return { ...prev, [activeProject.slug]: nextIndex };
    });
  };

  return (
    <>
      <Head>
        <title>Adrian Aranda - Projects</title>
        <meta
          name="description"
          content="Apipie, Daimmer and SEVEN are the full-stack projects built by the software engineer Adrián Aranda."
          key="Software Engineer in Barcelona"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Navbar />
      <main className="layout stack-lg">
        {/*<header className="section-block stack">*/}
        {/*  <h1>Projects.</h1>*/}
        {/*</header>*/}

        <div role="tablist" aria-label="Projects" className="tab-list">
          {projects.map((project) => (
            <button
              key={project.slug}
              type="button"
              role="tab"
              aria-selected={project.slug === active}
              className="tab-button"
              onClick={() => setActive(project.slug)}
            >
              {project.label}
            </button>
          ))}
        </div>

        <section aria-live="polite" className="tab-panel project-grid">
          <div className="stack">
            <p className="eyebrow">{activeProject.eyebrow}</p>
            <h2>{activeProject.title}</h2>
            <p className="muted">{activeProject.description}</p>
            <p className="muted">
              Stack: <span className="accent">{activeProject.stack}</span>
            </p>
            <div className="link-strip">
              <Link href={activeProject.source} target="_blank" rel="noreferrer" className="link-underline accent">
                Source
              </Link>
              <Link href={activeProject.live} target="_blank" rel="noreferrer" className="link-underline accent">
                Live
              </Link>
            </div>
          </div>
          <figure className="project-media">
            {hasImages && (
              <div className="media-frame">
                <Image alt={`${activeProject.label} interface`} src={images[currentImageIndex]} className="project-image" />
              </div>
            )}
            {hasImages && images.length > 1 && (
              <div className="accent-row">
                <button type="button" onClick={() => handleCycle("prev")}>
                  Prev
                </button>
                <span className="small-label">
                  {currentImageIndex + 1}/{images.length}
                </span>
                <button type="button" onClick={() => handleCycle("next")}>
                  Next
                </button>
              </div>
            )}
          </figure>
        </section>
      </main>
    </>
  );
};

export default Projects;
