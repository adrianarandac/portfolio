import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import sevenpng from "../public/sevenpng.png";
import sevenpng2 from "../public/sevenpng2.png";
import sevenpng3 from "../public/sevenpng3.png";
import apipiePng from "../public/apipie.png";
import apipiePng1 from "../public/apipie-1.png";
import apipiePng2 from "../public/apipie-2.png";
import apipiePng3 from "../public/apipie-3.png";
import apipiePng4 from "../public/apipie-4.png";
import daimmerGif from "../public/daimmer-macbook.png";
import { useState } from "react";

const sevenImgs = [sevenpng, sevenpng2, sevenpng3];
const apipieImgs = [apipiePng, apipiePng1, apipiePng2, apipiePng3, apipiePng4];

const Projects = () => {
  const [selected, setSelected] = useState(0);
  const [selectedApipie, setSelectedApipie] = useState(0);

  const increaseSeven = () => {
    selected + 1 == sevenImgs.length ? setSelected(0) : setSelected(selected + 1);
    console.log(selected);
  };
  const decreaseSeven = () => {
    selected - 1 == -1 ? setSelected(sevenImgs.length - 1) : setSelected(selected - 1);
    console.log(selected);
  };
  const increaseApipie = () => {
    selectedApipie + 1 == apipieImgs.length ? setSelectedApipie(0) : setSelectedApipie(selectedApipie + 1);
    console.log(selected);
  };
  const decreaseApipie = () => {
    selectedApipie - 1 == -1 ? setSelectedApipie(apipieImgs.length - 1) : setSelectedApipie(selectedApipie - 1);
    console.log(selectedApipie);
  };
  return (
    <>
      <Head>
        <title>Adrian Aranda - Portfolio</title>
        <meta
          name="description"
          content="Apipie, Daimmer and SEVEN are the full-stack projects built by the software engineer Adrián Aranda."
          key="Software Engineer in Barcelona"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>{" "}
      <Navbar />
      <div className="h-screen pb-12 sm:pt-5 bg-white sm:pb-34 projects flex flex-col items-center sm:snap-mandatory snap-y sm:overflow-scroll">
          {/* SEVEN */}
          <div className="w-full pt-24 pb-16 sm:pb-24 sm:h-[95vh] px-3 from-indigo-300 bg-blue-800 bg-gradient-120 tile flex-column items-center align-middle sm:flex snap-center">
            <div className="hidden sm:w-5/12 sm:flex justify-center animate-[fade-in_2s_ease-in-out]">
              <button onClick={decreaseSeven}>O</button>

              <Image alt="seven-1" src={sevenImgs[selected]} objectFit={"contain"} width={300} height={800} className="m-auto xl:h-full" />
              <button onClick={increaseSeven}>O</button>
            </div>

            <div className="flex-col sm:w-3/6">
              <h3 className="text-white text-[3.5em] 2xl:text-[5.5em] font-vietnam transition ease-in-out duration-1000 w-auto inline-block hover:-translate-y-1">
                <strong>SEVEN.</strong>
              </h3>
              <p className="text-white text-lg lg:text-[1.1em] 2xl:text-[1.5em] font-bold sm:w-11/12 mb-8 text-justify m-auto">
                <br />
                SEVEN is the way to realistically plan your free time for the next 7 days!
                <br /> <br /> This full-stack app revolves around geolocation thanks to Mapbox and the Google Maps API, along with the Geocoder library to
                transform coordinates to formatted addresses!
              </p>
              <div className="mb-10 m-auto sm:w-11/12 2xl:text-lg">
                <span className="border border-yellow-400  mr-2 px-2.5 py-0.5 rounded bg-yellow-200 text-yellow-900">
                  React
                </span>
                <span className="border border-gray-800  mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">MongoDB</span>
                <span className="border border-blue-400 mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800">
                  Mapbox
                </span>{" "}
                <div className="my-2"></div>
                <span className="text-green-800 border border-green-800 mr-2 px-2.5 py-0.5 rounded bg-green-200 ">
                  Tailwind
                </span>
                <span className="border border-pink-900 mr-2 px-2.5 py-0.5 rounded bg-pink-200 text-pink-900">Google Cloud</span>
              </div>
              <div className="text-center gap-5 italic hidden sm:block">
                <button type="button" className="button">
                  <Link href="https://github.com/AdDanNiTom">
                    <a
                      className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-500"
                      target="_blank"
                    >
                      SOURCE CODE
                    </a>
                  </Link>
                </button>
                <button type="button" className="green-button">
                  <Link href="http://app-seven.herokuapp.com">
                    <a
                      className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-500"
                      target="_blank"
                    >
                      LIVE
                    </a>
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex justify-center mb-10 sm:hidden animate-[fade-in_2s_ease-in-out]">
              <button onClick={decreaseSeven}>O</button>
              <Image alt="seven-1" src={sevenImgs[selected]} objectFit={"contain"} width={300} height={500} />
              <button onClick={increaseSeven}>O</button>
            </div>

            <div className="text-center gap-5 italic sm:hidden">
              <button type="button" className="button">
                <Link href="https://github.com/AdDanNiTom">
                  <a
                    className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-500"
                    target="_blank"
                  >
                    SOURCE CODE
                  </a>
                </Link>
              </button>
              <button type="button" className="green-button">
                <Link href="http://app-seven.herokuapp.com">
                  <a
                    className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-500"
                    target="_blank"
                  >
                    LIVE
                  </a>
                </Link>
              </button>
            </div>
          </div>
          {/* APIPIE */}
          <div className="w-full pt-24 pb-16 sm:pb-24 sm:h-[90vh] px-3 from-pink-300  bg-pink-500 bg-gradient-120 tile flex-column items-center align-middle sm:flex snap-center">
            <div className="flex-col sm:w-3/5 sm:pl-40 ">
              <h3 className="text-white text-[3.5em] 2xl:text-[5.5em] font-vietnam transition ease-in-out duration-1000 w-auto inline-block  hover:-translate-y-1">
                <strong>Apipie</strong>
              </h3>
              <p className="text-white text-justify mb-4  text-lg lg:text-[1.1em] 2xl:text-[1.5em] font-bold pb-4 sm:w-11/12 m-auto sm:mb-5">
                <br />
                Apipie is a social network inspired by Instagram and Wikipedia for baking lovers and a fun place to share your best recipes or make new friends.
                <br />
                <br /> Even though it's not as technically advanced as SEVEN., this project is my personal favourite because it was really fun to build and also
                my first experience building a full stack app. The app feels responsive, looks clean and <strong>works well</strong>!
              </p>
              <div className="m-auto w-full sm:w-11/12 sm:mb-10 text-sm font-medium 2xl:text-lg mb-10">
                <span className="border border-yellow-600 mr-2 px-2.5 py-0.5 rounded bg-yellow-200 text-yellow-900">
                  HTML
                </span>
                <span className="border border-green-800 mr-2 px-2.5 py-0.5 rounded bg-green-200 text-green-900">
                  Express
                </span>

                <span className="border border-gray-800  mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">Mongoose</span>
                <span className="border border-blue-400 mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800">
                  Bootstrap
                </span>
              </div>
              <div className="text-center gap-5 mb-3 hidden sm:block sm:justify-end">
                <button type="button" className="button">
                  <Link href="https://github.com/AdDanNiTom">
                    <a
                      className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-500"
                      target="_blank"
                    >
                      SOURCE CODE
                    </a>
                  </Link>
                </button>
                <button type="button" className="green-button">
                  <Link href="http://apipie.herokuapp.com/">
                    <a
                      className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-500"
                      target="_blank"
                    >
                      LIVE
                    </a>
                  </Link>
                </button>
              </div>
              <div className="flex justify-center mb-9 sm:hidden animate-[fade-in_2s_ease-in-out]">
                <button onClick={decreaseApipie}>O</button>
                <Image alt="seven-1" src={apipieImgs[selectedApipie]} objectFit={"contain"} width={300} height={500} />
                <button onClick={increaseApipie}>O</button>
              </div>
            </div>

            <div className="hidden sm:w-2/4 sm:flex justify-center animate-[fade-in_2s_ease-in-out]">
              <button onClick={decreaseApipie}>O</button>

              <Image alt="seven-1" src={apipieImgs[selectedApipie]} objectFit={"contain"} width={300} height={800} className="m-auto" />
              <button onClick={increaseApipie}>O</button>
            </div>
            <div className="text-center gap-5 italic mb-3 sm:hidden">
              <button type="button" className="button">
                <Link href="https://github.com/AdDanNiTom">
                  <a
                    className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-500"
                    target="_blank"
                  >
                    SOURCE CODE
                  </a>
                </Link>
              </button>
              <button type="button" className="green-button">
                <Link href="http://apipie.herokuapp.com/">
                  <a
                    className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-500"
                    target="_blank"
                  >
                    LIVE
                  </a>
                </Link>
              </button>
            </div>
          </div>
          {/* DAIMMER */}
          <div className="w-full pt-24 pb-16 sm:pb-24 sm:h-[90vh] px-3 from-yellow-200 bg-yellow-500 bg-gradient-120 tile flex-column items-center align-middle sm:flex snap-end">
            <div className="hidden sm:w-6/12 sm:flex justify-center animate-[fade-in_2s_ease-in-out]">
              <Image alt="daimmer video" src={daimmerGif} objectFit={"contain"} width={700} height={700} className="m-auto" />
            </div>

            <div className="flex-col sm:w-3/6 sm:pr-20">
              <h3 className="text-black  text-[3.5em] 2xl:text-[5.5em] font-vietnam transition ease-in-out duration-1000  w-auto inline-block hover:-translate-y-1">
                <strong>Daimmer</strong>
              </h3>
              <p className="text-black text-lg lg:text-[1.1em] 2xl:text-[1.5em] font-bold sm:w-11/12 mb-8 lg:pr-20 text-justify m-auto">
                <br />
                Daimmer was my first project ever!
                <br /> <br /> This is an addictive eye-hand coordination game where you have to press the letter displayed in the black tiles while hovering
                over them.
              </p>
              <div className="m-auto w-full sm:w-11/12 sm:mb-10 text-sm font-medium 2xl:text-lg">
                <span className="border border-blue-400 mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800">HTML</span>
                <span className="border border-gray-800  mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">Pure CSS</span>
                <span className="border border-yellow-600 mr-2 px-2.5 py-0.5 rounded bg-yellow-200 text-yellow-900">
                  Javascript
                </span>
                <span className="border border-green-800 mr-2 px-2.5 py-0.5 rounded bg-green-200 text-green-900">
                  Express.js
                </span>
              </div>
              <div className="text-center gap-5 italic hidden sm:block">
                <button type="button" className="button">
                  <Link href="https://github.com/adrianarandac/daimmer">
                    <a
                      className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-500"
                      target="_blank"
                    >
                      SOURCE CODE
                    </a>
                  </Link>
                </button>
                <button type="button" className="green-button">
                  <Link href="https://adrianarandac.github.io/daimmer/">
                    <a
                      className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-500"
                      target="_blank"
                    >
                      LIVE
                    </a>
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex justify-center mb-10 sm:hidden animate-[fade-in_2s_ease-in-out]">
              <Image alt="seven-1" src={daimmerGif} objectFit={"contain"} width={400} height={350} />
            </div>

            <div className="text-center gap-5 italic sm:hidden">
              <button type="button" className="button">
                <Link href="https://github.com/adrianarandac/daimmer">
                  <a
                    className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-500"
                    target="_blank"
                  >
                    SOURCE CODE
                  </a>
                </Link>
              </button>
              <button type="button" className="green-button">
                <Link href="https://adrianarandac.github.io/daimmer/">
                  <a
                    className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-500"
                    target="_blank"
                  >
                    LIVE
                  </a>
                </Link>
              </button>
            </div>
          </div>
      </div>
    </>
  );
};

export default Projects;
