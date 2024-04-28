"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative">
      <nav className=" bg-slate-900 bg-opacity-90 flex justify-between items-center px-[5%] sm:px-[10%] py-10 fixed top-0 w-full animate-[fadeUp_2s_ease-out] z-10">
        <div className=" flex justify-start gap-3 text-2xl font-medium cursor-pointer ">
          <h1 className="text-white text-xl sm:text-3xl font-bold ">
            JEMS <span className=" text-slate-500">RAKHOLIYA</span>
          </h1>
        </div>
        {!showMenu ? (
          <HiMenuAlt2
            onClick={() => setShowMenu(true)}
            className="inline text-3xl text-white md:hidden"
          />
        ) : (
          <IoClose
            onClick={() => setShowMenu(false)}
            className="inline text-3xl text-white md:hidden z-10"
          />
        )}
        <div className="hidden md:flex justify-start gap-8 text-xl text-white">
          <Link href="/">Home</Link>
          <Link href="/expertise">Expertise</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
      {showMenu && (
        <div className="h-screen w-screen grid place-content-center justify-items-center gap-10 absolute bg-slate-950 bg-opacity-25 text-xl text-white z-0">
          <Link href="/">Home</Link>
          <Link href="/expertise">Expertise</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
