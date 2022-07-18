import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import seven1 from "../public/seven-1.jpeg";
import apipie1 from "../public/apipie-1.jpeg";

const projects = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen pb-12  bg-white sm:pb-34 projects">
        <div className="flex flex-col items-center">
          <div className="w-screen pt-24 sm:pt-[20vh] pb-5 sm:h-[75vh] from-blue-500  bg-blue-700 bg-gradient-120 tile flex-column items-center align-middle sm:flex mb-7 px-4 sm:px-40">
            <div className="hidden justify-center mb-9 sm:block">
              <Image alt="seven-1" src={seven1} objectFit={"contain"} width={400} height={400} className="m-auto" />
            </div>

            <div className="flex-col sm:w-3/5">
              <h3 className="text-white text-[3.5em] font-vietnam transition ease-in-out duration-1000  w-auto inline-block hover:-translate-y-1">
                <strong>SEVEN.</strong>
              </h3>
              <p className="text-white text-lg lg:text-[1em] font-bold	 text-justify pb-4 w-11/12 m-auto">
                <br />
                SEVEN is a full-stack app to realistically plan your free time in the next 7 days!
                <br /> <br /> This app revolves around geolocation thanks to Mapbox, which also works together with Geocoder library and Google Cloud to
                transform coordinates to formatted and usable addresses!
              </p>
              <div className="mb-6 w-11/12 m-auto">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900 ">
                  React
                </span>
                <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">MongoDB</span>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                  Mapbox
                </span>{" "}
                <br />
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                  Tailwind
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                  Google Cloud
                </span>
              </div>
              <div className="text-center gap-5 italic mb-3 hidden sm:block">
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
            <div className="flex justify-center mb-9 sm:hidden">
              <Image alt="seven-1" src={seven1} objectFit={"contain"} width={500} height={500} />
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
          <div className="w-screen pb-5 pt-5 sm:h-[75vh] px-4 from-pink-400  bg-pink-500 bg-gradient-120 tile flex-column items-center align-middle sm:flex">
            <div className="flex-col sm:w-3/5 sm:pl-40">
              <h3 className="text-white text-[3.5em] font-vietnam transition ease-in-out duration-1000 w-auto inline-block  hover:-translate-y-1">
                <strong>Apipie</strong>
              </h3>
              <p className="text-white text-justify text-lg lg:text-[1em] font-bold pb-4 w-11/12 m-auto">
                <br />
                Apipie is a social network for baking lovers and a fun place to share your best recipes and make new friends. <br />
                <br /> Even though it's not as technically advanced as SEVEN., this project is my personal favourite because it was really fun to build and also
                my first experience building a full stack app. The app feels responsive, looks clean and <strong>works well</strong>!
              </p>
              <div className="mb-6 w-11/12 m-auto">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900 ">
                  HTML
                </span>
                <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Express</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Mongoose</span>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">
                  Bootstrap
                </span>
                {/* <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                  Handlebars
                </span> */}
              </div>
              <div className="text-center gap-5 italic mb-3 hidden sm:block">
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
              <div className="flex justify-center mb-9 sm:hidden">
                <Image alt="seven-1" src={apipie1} objectFit={"contain"} width={500} height={500} />
              </div>
            </div>

            <div className="relative hidden sm:block item-detail">
              <Image alt="Adrián Aranda photo" src={apipie1} layout={"fill"} objectFit={"contain"} />
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
        </div>
      </div>
    </>
  );
};

export default projects;
