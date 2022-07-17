import React from "react";
import Link from "next/link";
import { useState } from "react";

function MobileNav({ open, setOpen }: any) {
  return (
    <div
      className={`absolute top-0 left-0 z-10 h-screen w-screen bg-black transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out filter drop-shadow-md`}
    >
      <div className="text-white text-3xl font-vietnam  bg-gradient-to-r hover:-translate-y-1 from-yellow-50 to-yellow-100 bg-growing-underline hover:text-black flex items-center justify-center filter drop-shadow-md h-20">
        <Link href="/">
          <a>MENU</a>
        </Link>
      </div>
      <div className="flex flex-col bg-gray-900 pl-4">
        <Link href="/about">
          <a
            className=" text-white my-4 text-lg"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            About
          </a>
        </Link>
        <Link href="/projects">
          <a
            className=" text-white my-4 text-lg"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            Projects
          </a>
        </Link>
        <Link href="/resume">
          <a
            className=" text-white my-4 text-lg"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            CV
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-black items-center justify-between px-3 sm:px-10">
      <MobileNav open={open} setOpen={setOpen} />
      <div>
        <Link href="/">
          <a className="text-white text-xl sm:text-3xl whitespace-nowrap font-vietnam inline-block bg-gradient-to-r hover:-translate-y-1.5 from-yellow-50 to-yellow-100 bg-growing-underline hover:text-black">
            {" "}
            ADRIAN ARANDA
          </a>
        </Link>
      </div>
      <div className="flex justify-end items-center">
        <div
          className="z-50 flex relative w-7 h-7 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3" : ""}`} />
          <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
          <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3" : ""}`} />
        </div>
        <div className="flex gap-10 hidden md:flex">
          <Link href="/about">
            <a className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-400">
              About Me
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-400">
              Projects
            </a>
          </Link>
          <Link href="/resume">
            <a className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-400">
              CV
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
