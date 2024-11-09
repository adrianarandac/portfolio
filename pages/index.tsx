import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  useEffect(() => {
    // This effect can be used to initialize AOS or similar libraries if you choose to use one
    // Example: AOS.init();
  }, []);

  return (
    <div className="scroll-smooth">
      <Head>
        <title>Adrian Aranda - Portfolio</title>
        <meta
          name="description"
          content="This is the portfolio of the barcelona-based developer Adrián Aranda. Find here the portfolio of this software engineer in Barcelona."
          key="Software Engineer in Barcelona"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="flex h-screen text-white text-center bg-gradient-to-r from-black  to-gray-900">
        <div className="m-auto">
          <h1 className="font-ibarra text-4xl sm:text-7xl mb-5 animate-fade-in-down">
            Hi, I'm{" "}
            <strong className="bg-gradient-to-r hover:-translate-x-1.5 from-yellow-50 to-yellow-100 bg-growing-underline hover:text-neutral-900">
              Adrián Aranda.
            </strong>{" "}
            <br />
            Software Engineer
            <br />
            and Artist.
            <br />
          </h1>
          <div className="flex justify-center gap-4 animate-fade-in">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              <Link href="/about">
                <a>About me</a>
              </Link>
            </button>
            <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Additional Content Sections */}
      {/* <section className="h-screen bg-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-semibold pt-20">About Me</h2>
          <p className="mt-5 text-lg">Here is a little more about me...</p>
        </div>
      </section>

      <section className="h-screen bg-gray-200">
        <div className="text-center">
          <h2 className="text-3xl font-semibold pt-20">My Projects</h2>
          <p className="mt-5 text-lg">These are the projects I’ve worked on...</p>
        </div>
      </section>

      <section className="h-screen bg-gray-300">
        <div className="text-center">
          <h2 className="text-3xl font-semibold pt-20">Contact</h2>
          <p className="mt-5 text-lg">Feel free to reach out!</p>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
