import React from "react";
import Link from "next/link";
import Image from "next/image";
import spaceOddity from "../public/movies/2001odyssey.jpg";
import trumanShow from "../public/movies/thetrumanshow.jpg";
import bladeRunner from "../public/movies/bladerunner.jpg";

function Movies() {
  return (
    <div className="pt-20 pb-20 sm:mb-36 text-white bg-black lg:py-34">
      <div className="flex flex-col justify-center sm:px-20">
        <div>
          <h3 className="font-vietnam text-4xl text-center sm:text-left pb-14">THREE MOVIES:</h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-20">
          <div className="text-left">
            <Link href="https://www.youtube.com/watch?v=eogpIG53Cis">
              <a target="_blank">
                <Image alt="Blade Runner" src={bladeRunner} objectFit={"contain"} width={280} height={415} className="rounded-xl" />
              </a>
            </Link>
            <h4 className="font-vietnam text-center text-lg pt-2">"Blade Runner"</h4>
          </div>
          <div className=" text-left">
            <Link href="https://www.youtube.com/watch?v=oR_e9y-bka0">
              <a target="_blank">
                <Image alt="2001 A Space Odyssey" src={spaceOddity} objectFit={"contain"} width={310} height={413} className="rounded-xl" />
              </a>
            </Link>
            <h4 className="font-vietnam text-center text-lg pt-2">"2001: A Space Odyssey"</h4>
          </div>
          <div className="text-left ">
            <Link href="https://www.youtube.com/watch?v=dlnmQbPGuls">
              <a target="_blank">
                <Image alt="The Truman Show" src={trumanShow} objectFit={"contain"} width={280} height={415} className="rounded-xl" />
              </a>
            </Link>
            <h4 className="font-vietnam text-center text-lg pt-2">"The Truman Show"</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
