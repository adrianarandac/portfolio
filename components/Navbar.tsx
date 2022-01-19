import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-baseline justify-around py-3 fixed w-screen bg-black">
      <div className="text-white text-4xl font-vietnam ml-4 bg-gradient-to-r hover:-translate-y-1.5 from-yellow-50 to-yellow-100 bg-growing-underline hover:text-black">
        <Link href="/">
          <a> ADRIáN ARANDA</a>
        </Link>{" "}
      </div>
      <div className="w-3/5 flex justify-end gap-10 ">
        <Link href="/about">
          <a className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-400">About Me</a>
        </Link>{" "}
        <Link href="/projects">
          <a className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-400">Projects</a>
        </Link>
        <Link href="/resume">
          <a className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-400 mr-4">CV</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
