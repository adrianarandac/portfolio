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
      "Owning card-domain services in Java/Kotlin, evolving Terraform + Kubernetes stacks, and tightening observability so finance teams feel invisible tooling.",
  },
  {
    role: "Full Stack Software Engineer",
    company: "Glovo",
    timeframe: "2022 – 2023 · Barcelona",
    summary:
      "Scaled courier-facing microservices, shipped event-driven pipelines consuming 2.5M+ events/day, and paired with UX to design minimal operator panels in Vue.",
  },
  {
    role: "Back End Software Engineer",
    company: "Bolt",
    timeframe: "2021 – 2022 · Remote (US)",
    summary:
      "Built crawlers and checkout simulators that ingested 400k+ products, and automated partner-store flows with headless Puppeteer for commerce experiments.",
  },
];

const skillClusters = [
  { title: "Systems", items: ["Java/Kotlin", "Spring", "FastAPI", "Kafka", "Airflow"] },
  { title: "Data", items: ["PySpark", "Data Mesh", "Event pipelines", "SQL"] },
  { title: "Infrastructure", items: ["AWS", "Terraform", "Kubernetes", "Docker", "Spinnaker"] },
  { title: "Observability", items: ["Datadog", "Tracing", "Lean dashboards"] },
  { title: "Interface", items: ["React", "Next.js", "Vue", "Tailwind"] },
  { title: "Practices", items: ["TDD", "Lean delivery", "Calm comms"] },
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
            <p className="eyebrow">Biography</p>
            <h1>I’m Adrián, a backend engineer at Pleo.</h1>
            <p className="muted">
              I’m a proactive, social, and creative person with a big-picture mindset. I’ve partnered with teams at{' '}
              <Link href="https://www.bolt.com" target="_blank" rel="noreferrer" className="link-underline accent">
                Bolt
              </Link>
              ,{' '}
              <Link href="https://www.glovoapp.com" target="_blank" rel="noreferrer" className="link-underline accent">
                Glovo
              </Link>
              , and currently <span className="accent">Pleo</span>. I focus on JVM environments with microservices and event-driven design, pairing data with product thinking.
            </p>
            <p className="muted">
              When not working you’ll find me producing music, swimming, or dreaming about having a sphynx cat. My background in sales and audiovisuals keeps my engineering grounded in storytelling and clarity.
            </p>
            <div className="stack">
              <div className="accent-row">
                <span className="small-label">Focus</span>
                <span>Event-driven systems, observability, calm UI.</span>
              </div>
              <div className="accent-row">
                <span className="small-label">Stack</span>
                <span>Kotlin · Java · PySpark · React.</span>
              </div>
            </div>
          </div>
          <figure className="portrait-frame">
            <div className="media-frame">
              <Image alt="Adrián Aranda" src={adrian2} placeholder="blur" />
            </div>
            <figcaption>Barcelona, captured between rehearsals.</figcaption>
          </figure>
        </section>

        <section className="section-block experience-list">
          <p className="eyebrow">Experience</p>
          {experience.map((item) => (
            <article key={item.company} className="experience-item">
              <p className="small-label">{item.timeframe}</p>
              <h2>
                {item.role}, <span className="accent">{item.company}</span>
              </h2>
              <p className="muted">{item.summary}</p>
            </article>
          ))}
        </section>

        <section className="section-block stack">
          <p className="eyebrow">Stacks</p>
          <div className="skills-grid">
            {skillClusters.map((cluster) => (
              <div key={cluster.title} className="stack">
                <span className="small-label">{cluster.title}</span>
                <div className="language-list">
                  {cluster.items.map((item) => (
                    <span key={item} className="accent-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
