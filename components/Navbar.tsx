// import React from "react";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     // <nav className="bg-black border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-black">
//     //   <div className="container flex flex-wrap justify-between items-center mx-auto">
//     //     <div className="text-white text-3xl font-vietnam  bg-gradient-to-r hover:-translate-y-1.5 from-yellow-50 to-yellow-100 bg-growing-underline hover:text-black">
//     //       <Link href="/">
//     //         <a> ADRIAN ARANDA</a>
//     //       </Link>
//     //     </div>
//     //     <button
//     //       data-collapse-toggle="navbar-default"
//     //       type="button"
//     //       className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//     //       aria-controls="navbar-default"
//     //       aria-expanded="false"
//     //     >
//     //       <span className="sr-only">Open main menu</span>
//     //       <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//     //         <path
//     //           fillRule="evenodd"
//     //           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//     //           clipRule="evenodd"
//     //         ></path>
//     //       </svg>
//     //     </button>
//     //     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//     //       <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
//     //         <div className="w-3/5 flex justify-end gap-10 ">
//     //           <Link href="/about">
//     //             <a className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-400">
//     //               About Me
//     //             </a>
//     //           </Link>
//     //           <Link href="/projects">
//     //             <a className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-400">
//     //               Projects
//     //             </a>
//     //           </Link>
//     //           <Link href="/resume">
//     //             <a className="text-white whitespace-nowrap transition ease-in-out hover:-translate-y-1 active:scale-110 active:text-zinc-900 active:skew-y-6 duration-400 mr-4">
//     //               CV
//     //             </a>
//     //           </Link>
//     //         </div>
//     //       </ul>
//     //     </div>
//     //   </div>
//     // </nav>

//   );
// };

// export default Navbar;
import React from "react";
import Link from "next/link";
import { useState } from "react";

function MobileNav({ open, setOpen }: any) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-black transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md px-4`}
    >
      <div className="text-white text-3xl font-vietnam  bg-gradient-to-r hover:-translate-y-1.5 from-yellow-50 to-yellow-100 bg-growing-underline hover:text-black">
        <Link href="/">
          <a> MENU</a>
        </Link>
      </div>
      <div className="flex flex-col ml-4">
        <Link href="/about">
          <a
            className=" text-white my-4"
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
            className=" text-white my-4"
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
            className=" text-white font-medium my-4"
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
    <nav className="flex filter drop-shadow-md bg-black px-9 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="text-white text-3xl font-vietnam  bg-gradient-to-r hover:-translate-y-1.5 from-yellow-50 to-yellow-100 bg-growing-underline hover:text-black">
        <Link href="/">
          <a> ADRIAN ARANDA</a>
        </Link>
      </div>
      <div className="w-9/12 flex justify-end items-center">
        <div
          className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
          <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
          <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
        </div>
        <div className="w-3/5 flex justify-end gap-10 md:flex">
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
