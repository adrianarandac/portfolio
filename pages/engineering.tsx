import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import EngineeringProjectsSection from "../components/EngineeringProjectsSection";
import Navbar from "../components/Navbar";
import adrian2 from "../public/adrian-profile.png";

const experience = [
  {
    role: "Senior AI Applied Software Engineer",
    company: "- Pleo",
    timeframe: "Jul 2023 - Present | Barcelona · Remote",
    summary:
      "Working on agents and internal tools for engineering teams. Before that, I worked on card issuance and financial services in Java/Kotlin, and maintained their Terraform and Kubernetes infrastructure.",
  },
  {
    role: "Backend Software Engineer",
    company: "- Glovo",
    timeframe: "Sep 2022 - Jul 2023 | Barcelona",
    summary:
      "Built JVM microservices supporting 60K+ couriers across 25 countries and event-driven pipelines processing 2.5M+ daily events with Kafka, PySpark, and Airflow. Collaborated across backend, data, and frontend teams, including Vue-based operator tools.",
  },
  {
    role: "Backend Software Engineer",
    company: "- Bolt",
    timeframe: "Dec 2021 - Sep 2022 | Barcelona",
    summary:
      "Built ingestion systems processing 400K+ products from partner stores and Puppeteer automation for complex purchase and checkout flows. Owned pipeline monitoring, error handling, and adaptations to changing third-party sites.",
  },
];

const skillClusters = [
  {
    title: "Applied AI",
    items: ["Agents", "Model Context Protocol (MCP)", "Tool integration"],
  },
  {
    title: "Systems",
    items: ["Java/Kotlin", "Spring", "FastAPI", "Kafka", "Airflow"],
  },
  { title: "Data", items: ["PySpark", "Data Mesh", "Event pipelines", "SQL"] },
  {
    title: "Infrastructure",
    items: ["AWS", "Terraform", "Kubernetes", "Docker", "Spinnaker"],
  },
  { title: "Observability", items: ["Grafana", "BigQuery", "incident.io", "Tracing"] },
  { title: "Interface", items: ["React", "Next.js", "Vue", "Tailwind"] },
  {
    title: "Practices",
    items: ["Test Driven Development", "Domain Driven Design"],
  },
];

const Engineering: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adrian Aranda - Software Engineer</title>
        <meta
          name="description"
          content="Adrián Aranda, software engineer at Pleo. Backend systems, internal tools, and recent work with AI agents and MCP."
          key="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="layout stack-lg engineering-page">
        <section className="section-block bio-grid">
          <div className="stack">
            <h1>
              I’m Adrián,
              <br />
              an AI applied engineer
              <br />
              at Pleo.
            </h1>
            <p className="muted">
              Most of my work has been in backend systems: Java, Kotlin, data
              pipelines, and the infrastructure that keeps them running. Lately,
              I’ve been building agents that help engineers investigate production
              issues and tools that give them access to our internal systems.
            </p>
            <p className="muted">
              Currently at <span className="accent">Pleo</span>, previously at{" "}
              <Link href="https://www.glovoapp.com" target="_blank" rel="noreferrer" className="link-underline accent">
                Glovo
              </Link>{" "}
              and{" "}
              <Link href="https://www.bolt.com" target="_blank" rel="noreferrer" className="link-underline accent">
                Bolt
              </Link>.
            </p>
            <p className="muted">
              Outside work, I’m usually swimming or recording music
              in my home studio (I’m originally a sound engineer!).
            </p>
          </div>
          <figure className="portrait-frame">
            <div className="media-frame">
              <Image alt="Adrian Aranda" src={adrian2} placeholder="blur" />
            </div>
          </figure>
        </section>

        <section className="section-block stack recent-work">
          <h2>Life lately</h2>
          <article className="stack">
            <h3>Investigating production issues</h3>
            <p className="muted">
              I built an agent that investigates production issues by looking
              through tickets, dashboards, data, source code, and recent deployments.
              It brings together information from Linear, Grafana, BigQuery, and
              incident.io, with over 80% diagnostic accuracy.
            </p>
          </article>
          <article className="stack">
            <h3>Connecting internal tools</h3>
            <p className="muted">
              I build MCP services so agents can use our internal systems and
              workflows. That includes handling authentication, permissions, and
              maintaining the services as those systems change.
            </p>
          </article>
        </section>

        <section className="section-block experience-grid">
          <div className="stack experience-stack">
            <h2>Experience</h2>
            <div className="experience-timeline">
              {experience.map((item) => (
                <article
                  key={item.company}
                  className="experience-item timeline-item"
                >
                  <p className="small-label">{item.timeframe}</p>
                  <h2>
                    - {item.role}{" "}
                    <span className="accent">
                      <i>{item.company}</i>
                    </span>
                  </h2>
                  <p className="muted">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <EngineeringProjectsSection
          heading="Earlier web projects"
          titleLevel="h3"
          compact
        />

        <section className="section-block experience-grid capabilities-section">
          <div className="stack">
            <h2>Tools & capabilities</h2>
            {skillClusters.map((cluster) => (
              <div key={cluster.title} className="accent-row">
                <span className="small-label">- {cluster.title}</span>
                <span>{cluster.items.join(" / ")}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Engineering;
