import React from "react";
import Link from "next/link";
import { useState } from "react";

function MobileNav({ open, setOpen }: any) {
  return (
    <div
      className={`absolute z-50 top-0 h-fit pb-5 left-0 w-screen bg-black transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md`}
    >
      <div className="text-white font-vietnam text-2xl bg-growing-underline flex items-center justify-center filter drop-shadow-md h-20">
        <Link href="/">
          <a>MENU</a>
        </Link>
      </div>
      <div className="flex flex-col bg-black gap-7 pl-4">
        <Link href="/about">
          <a
            className=" text-white text-lg"
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
            className=" text-white text-lg"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            Projects
          </a>
        </Link>
        <Link href="/contact">
          <a
            className=" text-white text-lg pb-3"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            Contact
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex fixed w-screen z-10 align-middle filter drop-shadow-md bg-black items-center justify-between h-16 px-5 sm:px-10">
      <MobileNav open={open} setOpen={setOpen} />
      <div>
        <Link href="/">
          <a className="text-white font-vietnam text-xl sm:text-3xl whitespace-nowrap inline-block bg-gradient-to-r hover:-translate-y-1.5 from-yellow-50 to-yellow-100 bg-growing-underline hover:text-black">
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
        <div className="gap-10 hidden md:flex">
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
          <Link href="/contact">
            <a className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-400">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
