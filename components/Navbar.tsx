import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
<div className="flex items-baseline bg-yellow-300 -skew-y-12">
        <div className="text-black text-5xl mr-3">ADRIÁN ARANDA</div>
        <div>
          <Link href="/about">
            <a className="text-black">About Me</a>
          </Link>{" "}
          <Link href="/projects">
            <a className="text-black">/ Projects</a>
          </Link>
          <Link href="/cv">
            <a className="text-black"> / CV</a>
          </Link>
        </div>
      </div>
  )
}

export default Navbar
