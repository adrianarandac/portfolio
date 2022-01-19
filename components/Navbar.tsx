import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-baseline justify-around py-3">
      <div className="text-white text-4xl font-vietnam ml-4">
        <Link href="/">
          <a> ADRIAN ARANDA</a>
        </Link>{" "}
      </div>
      <div className="w-3/5 flex justify-end gap-10">
        <Link href="/about">
          <a className="text-white whitespace-nowrap">About Me</a>
        </Link>{" "}
        <Link href="/projects">
          <a className="text-white ">Projects</a>
        </Link>
        <Link href="/cv">
          <a className="text-white mr-4">CV</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
