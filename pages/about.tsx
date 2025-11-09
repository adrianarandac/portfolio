import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import adrian2 from "../public/adrian-profile.png";

const experience = [
  {
    role: "Backend Software Engineer",
    company: "Pleo",
    timeframe: "Jun 2023 – Present · Barcelona",
    summary:
      "Owning card-domain services in Java/Kotlin, evolving Terraform + Kubernetes stacks, and improving observability so finance teams get seamless, reliable tooling.",
  },
  {
    role: "Fullstack Software Engineer",
    company: "Glovo",
    timeframe: "2022 – 2023 · Barcelona",
    summary:
      "Scaled courier-facing microservices, shipped event driven pipelines consuming 2.5M+ events/day, and paired with UX to design minimal operator panels in Vue.",
  },
  {
    role: "Backend Software Engineer",
    company: "Bolt",
    timeframe: "2021 – 2022 · Remote (US)",
    summary:
      "Built crawlers and checkout simulators that ingested 400k+ products, and automated partner-store flows with headless scrappers for commerce embedded marketing.",
  },
];

const skillClusters = [
  { title: "Systems", items: ["Java/Kotlin", "Spring", "FastAPI", "Kafka", "Airflow"] },
  { title: "Data", items: ["PySpark", "Data Mesh", "Event pipelines", "SQL"] },
  { title: "Infrastructure", items: ["AWS", "Terraform", "Kubernetes", "Docker", "Spinnaker"] },
  { title: "Observability", items: ["Datadog", "Tracing", "Dashboards"] },
  { title: "Interface", items: ["React", "Next.js", "Vue", "Tailwind"] },
  { title: "Practices", items: ["Test Driven Development", "Domain Driven Design"] },
];

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adrián Aranda - About</title>
        <meta
          name="description"
          content="I’m Adrián Aranda, a software engineer from Barcelona, Spain. Learn more about me and my tech stack!"
          key="Software engineer in Barcelona"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Navbar />
      <main className="layout stack-lg">
        <section className="section-block bio-grid">
          <div className="stack">
            <p className="eyebrow">Hey there,</p>
            <h1>I’m Adrián,<br/>a backend engineer at Pleo.</h1>
            <p className="muted">
              I’m a pragmatic engineer with a taste for concise UX. I’ve partnered with teams at{' '}
              <Link href="https://www.bolt.com" target="_blank" rel="noreferrer" className="link-underline accent">
                Bolt
              </Link>
              ,{' '}
              <Link href="https://www.glovoapp.com" target="_blank" rel="noreferrer" className="link-underline accent">
                Glovo
              </Link>
              , and now <span className="accent">Pleo</span>, shipping JVM services, payments, and tooling for product squads.
            </p>
            <p className="muted">
              Track record covers microservices, data pipelines, infrastructure-as-code, and measured interfaces. <br/>When not coding, you'll find me swimming and recording music at my home studio.
            </p>
          </div>
          <figure className="portrait-frame">
            <div className="media-frame">
              <Image alt="Adrián Aranda" src={adrian2} placeholder="blur" />
            </div>
          </figure>
        </section>

        <section className="section-block experience-grid">
          <div className="stack">
            <p className="eyebrow">Experience</p>
            {experience.map((item) => (
              <article key={item.company} className="experience-item">
                <p className="small-label">{item.timeframe}</p>
                <h2>
                 - {item.role}, <span className="accent"><i>{item.company}</i></span>
                </h2>
                <p className="muted">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section-block experience-grid">
            <div className="stack">
                <p className="eyebrow">Stacks & Capabilities</p>
                {skillClusters.map((cluster) => (
                    <div key={cluster.title} className="accent-row">
                        <span className="small-label">{cluster.title}</span>
                        <span>{cluster.items.join(' · ')}</span>
                    </div>
                ))}
            </div>
        </section>
      </main>
    </>
  );
};

export default About;
