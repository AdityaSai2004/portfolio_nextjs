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
    <div className="fixed w-full h-21 shadow-xl z-[100] bg-[#EDECE8]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/./assets/icons/logo_light.png"
          alt=""
          width={100}
          height={100}
        />
        <div>
          <ul className="hidden md:flex items-center space-x-6">
            <li className="text-sm font-semibold text-gray-500 hover:text-gray-900 hover:scale-110">
              Home
            </li>
            <li className="text-sm font-semibold text-gray-500 hover:text-gray-900 hover:scale-110">
              About me
            </li>
            <li className="text-sm font-semibold text-gray-500 hover:text-gray-900 hover:scale-110">
              My projects
            </li>
            <li className="text-sm font-semibold text-gray-500 hover:text-gray-900 hover:scale-110">
              My skills
            </li>
            <li className="text-sm font-semibold text-gray-500 hover:text-gray-900 hover:scale-110">
              Contact me
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
                src="/./assets/icons/logo_dark.png"
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
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
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
