"use client"

import Link from "next/link"
import React from 'react'
import Image from 'next/image';


const Nav = () => {
  return (
    <nav className="flex-between w-full pt-0 px-8 sm:px-20">
   <div className="nav_Announcement">
    <div className="nav_container">
      <p className="text-sm font-inter text-gray-400 tracking-wide">Looking for design inspiration?&nbsp;&nbsp;&nbsp;Browse our <a
      className="text-cyan-500 cursor-pointer">curated collections</a>!</p>
    </div>
   </div>

  <div className="nav_header">
    <div className="flex flex-row justify-between items-center">
      <div>
        <Link href="/"  className="flex gap-2 flex-center pt-2 ml-2">
          <Image
            src="/logoPixelsBlack2020.png"
            alt="PX logo"
            width={60}
            height={60}
          />
        </Link>
      </div>
    <div>
      <p className="logo_text ml-2 text-3xl pt-2">PIXELS</p>
    </div>
    </div>


    <nav className=" Main_Links h-10 flex justify-between space-x-8 items-center -ml-1">
      <Link href="/" className="text-lg pt-2 font-satoshi font-semibold">HOME</Link>
      <Link href="/" className="text-lg pt-2 font-satoshi font-semibold">CREATE</Link>
      <Link href="/" className="text-lg pt-2 font-satoshi font-semibold max-sm:hidden">SELL</Link>
      <Link href="/" className="text-lg pt-2 font-satoshi font-semibold max-sm:hidden max-md:hidden">DISCOVER</Link>
    </nav>

    <div className="">
      <Link href="/" className="flex gap-2 flex-center pt-2 mr-2">
        <Image
          src="/IconShoppingCart2015.png"
          alt="PX logo"
          width={30}
          height={30}
        />
      </Link>
    </div>




  </div>


   </nav>
  )
}

export default Nav