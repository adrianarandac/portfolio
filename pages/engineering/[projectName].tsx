import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import EngineeringProjectsSection from "../../components/EngineeringProjectsSection";
import Navbar from "../../components/Navbar";
import { engineeringProjects, getEngineeringProject } from "../../data/engineeringProjects";

type EngineeringProjectPageProps = {
  slug: string;
  title: string;
  description: string;
};

const EngineeringProjectPage: NextPage<EngineeringProjectPageProps> = ({ slug, title, description }) => {
  return (
    <>
      <Head>
        <title>{`${title} - Engineering - Adrian Aranda`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} - Engineering - Adrian Aranda`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.adrianaranda.com/engineering/${slug}`} />
        <link rel="canonical" href={`https://www.adrianaranda.com/engineering/${slug}`} />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Navbar />
      <main className="layout stack-lg">
        <section className="section-block">
          <Link href="/engineering" className="link-underline">
            Back to Engineering
          </Link>
        </section>
        <EngineeringProjectsSection initialSlug={slug} showSelector={false} titleLevel="h1" compact />
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = engineeringProjects.map((project) => ({ params: { projectName: project.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<EngineeringProjectPageProps> = async ({ params }) => {
  const slug = typeof params?.projectName === "string" ? params.projectName : "";
  const project = getEngineeringProject(slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      slug: project.slug,
      title: project.label,
      description: project.description,
    },
  };
};

export default EngineeringProjectPage;
