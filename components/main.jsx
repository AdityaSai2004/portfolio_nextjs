import React from "react";
import Link from "next/link";

const Main = () => {
  return (
    <div
      className="w-full h-screen text-left bg-[url('/assets/icons/IMG_5001.jpg')] bg-no-repeat bg-cover bg-top bg-fixed"
      id="main"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-left items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Hello World
          </p>
          <h1 className="py-4 text-[#ffffff]">
            Vanakam, I am <span className="text-[#aff038]"> Aditya</span>
          </h1>
          <h1 className="py-2 text-[#ffffff]">
            A Front-End Web Developer and tech enthusiast
          </h1>
          <p className="py-4 text-[#ffffff] sm:max-w-[70%]">
            I’m focused on building responsive front-end web applications and
            learning ML
          </p>
          <Link href="#contact">
            <div className="py-4 align-content:center text-center">
              <div className="rounded-full shadow-lg shadow-[#aff038] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <span className="text-base tracking-widest text-white ">
                  Contact Me
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
