import React from "react";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import adrian2 from "../public/adrian3.png";

const about: NextPage = () => {
  return (
    <>
      <Head>
        <title>Adrián Aranda / About</title>
        <meta name="description" content="Generated by create next app" key="Adrian" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className="p-4 pt-20 lg:pt-[20vh] projects">
        <div className="flex-col lg:flex lg:flex-row px-2 lg:px-24 justify-center items-center align-middle">
          <div className="p-2 mb-6 lg:hidden">
            <Image alt="adrian aranda" src={adrian2} className="rounded-3xl" />
          </div>
          <div className="w-5/12 hidden m-auto lg:px-5 lg:block relative aspect-square">
            <Image alt="adrian aranda" src={adrian2} layout="fill" objectFit="cover" className=" rounded-3xl overflow-clipped" />
          </div>

          <div className="flex-column  lg:w-6/12 lg:px-4 lg:pr-4 m-auto ">
            <h3 className="text-white text-4xl font-ibarra mb-4 lg:text-[2.3em] leading-snug text-justified w-auto inline-block">
              <strong>
                I’m Adrian, a Software Engineer working remotely for{" "}
                <a
                  href="https://www.bolt.com"
                  className="text-blue-500 animation-pulse transition ease-in-out duration-1000 hover:text-blue-400	hover:underline"
                >
                  Bolt
                </a>{" "}
                on their backend in sunny Barcelona, Spain.
              </strong>
            </h3>
            <p className="text-white font-montserrat text-lg lg:text-[1em] ">
              <br />
              🙇🏻 I have a social and creative nature and good skills to see the big picture. I value innovative thinking, focus and
              the chance to get involved, as I am a proactive person and I enjoy sharing ideas.
              <br />
              <br />
              🖥️ These days my time is spent researching and designing personal projects! I also love to help new devs get started with their careers.
              <br />
              <br />
              🎧 Besides my tech interests, out of the office you’ll find me playing chess, producing music or dreaming about having a cat.
              <br />
              <br />
              ⭐️ You can contact me at <a className="text-blue-400" href="mailto: adrienaranda@gmail.com">adrienaranda@gmail.com</a> or <a className="text-blue-400" href="../public/adrian_aranda_resume.pdf" download>download my CV</a>! 

            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
