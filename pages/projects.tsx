import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import seven1 from "../public/seven-1.jpeg";
import apipie1 from "../public/apipie-1.png";

const projects = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen pt-[16vh] flex-column projects">
        <div className="grid justify-items-center">
          <div className="w-4/6 sm:w-100 tile flex items-center mb-36 bg-grey-800">
            <div className="relative hidden lg:visible item-detail">
              <Image alt="Adrián Aranda photo" src={seven1} layout={"fill"} objectFit={"contain"} />
            </div>

            <div className="flex-col w-4/6">
              <h3 className=" text-white text-[3.5em] transition ease-in-out duration-1000 hover:text-fuchsia-300 w-auto inline-block bg-gradient-to-r hover:-translate-y-1">
                <strong>SEVEN.</strong>
              </h3>
              <p className="text-white text-justify pb-4">
                <br />
                SEVEN is a full-stack app to realistically plan your free time in the next 7 days!
                <br /> <br /> This app revolves around geolocation thanks to Mapbox, which also works together with Geocoder library and Google Cloud to
                transform coordinates to formatted and usable addresses!
              </p>
              <div className="mb-8 flex justify-center">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900 ">
                  React
                </span>

                <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">MongoDB</span>

                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Mapbox</span>
              </div>

              <div className="text-center gap-5 italic">
                <button type="button" className="button">
                  <Link href="https://github.com/AdDanNiTom">
                    <a
                      className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-400"
                      target="_blank"
                    >
                      SOURCE CODE
                    </a>
                  </Link>
                </button>
                <button type="button" className="green-button">
                  <Link href="http://app-seven.herokuapp.com">
                    <a
                      className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-400"
                      target="_blank"
                    >
                      LIVE
                    </a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          {"different"}
          <div className="w-4/6 tile flex items-center mb-36 bg-grey-800">
            <div className="flex-col w-4/6">
              <h3 className="text-white text-[3.5em] transition ease-in-out duration-1000 hover:text-green-500 w-auto inline-block bg-gradient-to-r hover:-translate-y-1">
                <strong>Apipie</strong>
              </h3>
              <p className="text-white text-justify mb-4">
                <br />
                Apipie is a social network for baking lovers and a fun place to share your best recipes and make new friends. Even though it's not as
                technically advanced as SEVEN., this project is my personal favourite because it was really fun to build and also my first experience building a
                full stack app. The app feels responsive, looks clean and <strong>works well</strong>!
              </p>
              <div className="text-center gap-5 italic">
                <button type="button" className="button">
                  <Link href="https://github.com/AdDanNiTom">
                    <a
                      className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-400"
                      target="_blank"
                    >
                      SOURCE CODE
                    </a>
                  </Link>
                </button>
                <button type="button" className="green-button">
                  <Link href="http://app-seven.herokuapp.com">
                    <a
                      className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-400"
                      target="_blank"
                    >
                      LIVE
                    </a>
                  </Link>
                </button>
              </div>
            </div>

            <div className="relative item-detail ">
              <Image alt="Adrián Aranda photo" src={apipie1} layout={"fill"} objectFit={"contain"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
