import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 420);
  };

  return (
    <div>
      <Head>
        <title>Adrian Aranda's Portfolio</title>
        <meta
          name="description"
          content="This is the portfolio of the barcelona-based developer Adrián Aranda. Find here the portfolio of this software engineer in Barcelona."
          key="Software Engineer in Barcelona"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      {/* <Navbar /> */}

      <div className="flex h-screen text-white text-center">
        <div className="m-auto">
          <h1 className="font-ibarra text-4xl sm:text-7xl mb-5 animate-fade-in-down">
            Hi. I'm{" "}
            <strong className="bg-gradient-to-r hover:-translate-x-1.5 from-yellow-50 to-yellow-100 bg-growing-underline hover:text-neutral-900">
              Adrian Aranda
            </strong>{" "}
            <br />
            A Software Engineer.
            <br />
          </h1>
          <p className="font-lato text-sm sm:text-xl animate-fade-in mb-7">
            First of all, thank you for passing by!
            <br />
            Now, what would you like to know more about,
            <br /> me or my projects?
          </p>
          <div className="flex justify-center gap-4 animate-fade-in">
            <button className="bg-blue-500 animate-[fade-in_2s_ease-in-out] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <Link href="/about">
                <a className="font-vietnam">About me</a>
              </Link>
            </button>
            <button className="bg-red-500 fade-in-btn hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
              <Link href="/projects">
                <a className="font-vietnam">Projects</a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
