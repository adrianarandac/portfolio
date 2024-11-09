import React from "react";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import adrian2 from "../public/adrian-profile.png";
import Music from "../components/Music";
import Movies from "../components/Movies";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adrián Aranda - About Page</title>
        <meta
          name="description"
          content="I’m Adrián Aranda, a software engineer from Barcelona, Spain. Learn more about me and my tech stack!"
          key="Software engineer in Barcelona"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Navbar />
      <div className="">
        <div className="p-4 mb-10 sm:mb-24 pt-20 lg:pt-[16vh] 2xl:mb-[20vh] projects pb-10">
          <div className="flex-col lg:flex lg:flex-row px-2 lg:px-24 justify-center items-center">
            <div className="p-2 mb-6 lg:hidden">
              <Image alt="adrian aranda" src={adrian2} className="rounded-3xl" />
            </div>
            <div className="w-5/12 hidden m-auto lg:px-5 lg:block relative aspect-square ">
              <Image alt="adrian aranda" src={adrian2} layout="fill" objectFit="cover" className="rounded-3xl" />
            </div>

            <div className="flex-column lg:w-6/12 lg:px-4 lg:pr-4 m-auto ">
              <h3 className="text-white text-4xl font-ibarra mb-4 lg:text-[2.5em] 2xl:text-[4.3em] leading-snug text-justified w-auto inline-block">
                <strong>
                  I’m Adrián, a software engineer for <span className="text-yellow-300">Pleo</span> based in sunny <br /> Barcelona, Spain.
                </strong>
              </h3>
              <p className="text-white font-lato text-lg lg:text-[1em] 2xl:text-[1.3em]">
                I’m a proactive, social, and creative person with a big-picture mindset. I’ve worked with fullstack engineering teams for companies such as{" "}
                <Link href="https://www.bolt.com">
                  <a className="text-yellow-400 hover:text-yellow-500 hover:underline" target="_blank">
                    Bolt
                  </a>
                </Link>{" "}
                and{" "}
                <Link href="https://www.glovoapp.com">
                  <a className="text-yellow-400 hover:text-yellow-500 hover:underline" target="_blank">
                    Glovo
                  </a>
                </Link>
                .<br /> Currently I’m a backend engineer at{" "}
                <Link href="https://www.pleo.io">
                  <a className="text-yellow-400 hover:text-yellow-500 hover:underline" target="_blank">
                    Pleo
                  </a>
                </Link>
                .
                <br />
                <br />
                I specialize in JVM environments with microservices and event-driven design, even though I'm also experienced with Pyspark, Airflow, and data
                products. My background in sales and audiovisuals gives me a product-focused approach to development.
                <br />
                <br />
                When not working, you'll find me producing music, swimming, or dreaming of having a sphynx cat.
                <br />
                <br />
                Please, reach me at{" "}
                <a className="text-yellow-400" href="mailto:adrienaranda@gmail.com">
                  adrienaranda@gmail.com
                </a>{" "}
                or{" "}
                <a className="text-yellow-400" href="adrian_aranda_resume.pdf" download="adrian_aranda_resume">
                  download my CV
                </a>
                .
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
