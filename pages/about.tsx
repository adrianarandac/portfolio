import React from "react";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import adrian2 from "../public/adrian3.png";
import Music from "../components/Music";
import Movies from "../components/Movies";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adrián Aranda - About Page</title>
        <meta name="description" content="I’m Adrián Aranda, a software engineer from Barcelona, Spain. Learn more about me and my tech stack!" key="Software engineer in Barcelona" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Navbar />
      <div className="h-screen">
      <div className="p-4 mb-10 sm:mb-24 pt-20 lg:pt-[16vh] 2xl:mb-[20vh] projects pb-10">
        <div className="flex-col lg:flex lg:flex-row px-2 lg:px-24 justify-center items-center">
          <div className="p-2 mb-6 lg:hidden">
            <Image alt="adrian aranda" src={adrian2} className="rounded-3xl" />
          </div>
          <div className="w-5/12 hidden m-auto lg:px-5 lg:block relative aspect-square">
            <Image alt="adrian aranda" src={adrian2} layout="fill" objectFit="cover" className="rounded-3xl" />
          </div>

          <div className="flex-column lg:w-6/12 lg:px-4 lg:pr-4 m-auto ">
            <h3 className="text-white text-4xl font-ibarra mb-4 lg:text-[2.5em] 2xl:text-[4.3em] leading-snug text-justified w-auto inline-block">
              <strong>I’m Adrian, a Software Engineer working remotely for <span className="text-yellow-300">Pleo</span> in sunny Barcelona, Spain.</strong>
            </h3>
            <p className="text-white font-lato text-lg lg:text-[1em] 2xl:text-[1.3em]">
              <br />
              🙇🏻 I have a social and creative nature and good skills to see the big picture. I value innovative thinking, focus and the chance to get involved,
              as I am a proactive person and I enjoy sharing ideas. I previously was part of{" "}
              <Link href="https://www.bolt.com">
                <a className="text-blue-500 animation-pulse transition ease-in-out duration-1000 hover:text-blue-400	hover:underline" target="_blank">Bolt's </a>
              </Link> and
              <Link href="https://www.glovoapp.com">
                <a className="text-blue-500 animation-pulse transition ease-in-out duration-1000 hover:text-blue-400	hover:underline" target="_blank"> Glovo's </a>
              </Link>
              fullstack engineering teams. Now I work as a back end engineer for               <Link href="https://www.pleo.io">
                <a className="text-blue-500 animation-pulse transition ease-in-out duration-1000 hover:text-blue-400	hover:underline" target="_blank">Pleo</a>
              </Link>.
              <br />
              <br />
              🖥️ As a software engineer with a passion for building robust end-to-end solutions, I have experience in JVM environments, Python and modern UI frameworks such as React or Vue. Thanks to my background in audiovisual media and customer success, I bring a comprehensive and product-oriented approach to software development. My expertise lies in developing scalable distributed systems and data pipelines with technologies like Pyspark and Airflow.
              <br />
              <br />
              🎧 Besides my tech interests, out of the office you’ll find me playing chess, producing music, swimming or dreaming about having a sphynx cat.
              <br />
              <br />
              ⭐️ Please, feel free to contact me at{" "}
              <a className="text-blue-400" href="mailto: adrienaranda@gmail.com">
                adrienaranda@gmail.com
              </a>{" "}
              or{" "}
              <a className="text-blue-400" href="adrian_aranda_resume.pdf" download="adrian_aranda_resume">
                download my CV
              </a>
              !
            </p>
          </div>
        </div>
      </div>
      <Music />
      <Movies />
      </div>
    </>
  );
};

export default About;
