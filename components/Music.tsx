import React from "react";
import Link from "next/link";
import Image from "next/image";
import blonde from "../public/albums/blonde.jpeg";
import mbdtf from "../public/albums/mbdtf.jpg";
import revolver from "../public/albums/revolver.jpeg";


function Music() {
  return (
    <div className="py-20 lg:py-34 from-neutral-200 bg-white bg-gradient-120  snap-center">
      <div className="flex flex-col justify-center sm:px-20">
        <div>
          <h3 className="font-vietnam text-4xl text-center sm:text-left pb-14">THREE ALBUMS:</h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-20">
          <div className="text-right intersect:bg-indigo-600 transition-colors">
            <Link href="https://www.youtube.com/watch?v=diIFhc_Kzng&list=PLzoqV_VvWIwGzYTcm3r1JwqgQOBXTvKyd">
              <a target="_blank">
                <Image alt="seven-1" src={blonde} objectFit={"contain"} width={350} height={350} className="rounded-lg" />
              </a>
            </Link>
            <h4 className="font-vietnam text-lg pt-2">"Blonde"</h4>
            <p className="italic">by Frank Ocean</p>
          </div>
          <div className="text-right intersect:bg-indigo-600 transition-colors">
            <Link href="https://www.youtube.com/watch?v=UTH1VNHLjng&list=PL8YH4mOwWryUMna911yJM2B52iIIzigKy">
              <a target="_blank">
                <Image alt="seven-1" src={mbdtf} objectFit={"contain"} width={350} height={350} className="rounded-lg" />
              </a>
            </Link>
            <h4 className="font-vietnam text-lg pt-2">"My Beautiful Dark Twisted Fantasy"</h4>
            <p className="italic">by Kanye West</p>
          </div>
          <div className=" text-right intersect:bg-indigo-600 transition-colors">
            <Link href="https://www.youtube.com/watch?v=l0zaebtU-CA&list=PLg5pp7nrH0IqV2ESEZmmgWtECbzkS8d3O">
              <a target="_blank">
                <Image alt="seven-1" src={revolver} objectFit={"contain"} width={350} height={350} className="rounded-lg" />
              </a>
            </Link>
            <h4 className="font-vietnam text-lg pt-2">"Revolver"</h4>
            <p className="italic">by The Beatles</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
