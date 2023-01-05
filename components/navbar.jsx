import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-21 shadow-xl z-[100] bg-[#000000]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <img
          src="/assets/icons/logo_dark.png"
          alt=""
          width={100}
          height={100}
        />
        <div>
          <ul className="hidden md:flex items-center space-x-6">
            <li className="text-sm font-semibold text-white hover:text-white hover:scale-110">
              <Link href="/">Home</Link>
            </li>
            <li className="text-sm font-semibold text-white hover:text-white hover:scale-110">
              <Link href="#about">About me</Link>
            </li>
            <li className="text-sm font-semibold text-white hover:text-white hover:scale-110">
              <Link href="#projects">My Projects</Link>
            </li>
            <li className="text-sm font-semibold text-white hover:text-white hover:scale-110">
              <Link href="#skills">My Skills</Link>
            </li>
            <li className="text-sm font-semibold text-white hover:text-white hover:scale-110">
              <Link href="#contact">Contact me</Link>
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "left-0 top-0 w-[70%] sm:w-[45%] h-screen bg-[#FDF5F3] p-10 ease-in-duration-500"
              : "fixed left-[100%] p-10 ease-in-duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/icons/logo_dark.png"
                alt="/"
                width="60"
                height="55"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="borded-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Confused Unga Bunga</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="#main">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="#about">
                <li className="py-4 text-sm">About me</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">My projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">My skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact me</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Follow me
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
