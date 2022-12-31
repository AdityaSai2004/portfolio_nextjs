import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";
// modify my image
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            "Hello, my name is Aditya and I'm a 19-year-old computer science
            student from Chennai, India. I've always been drawn to technology
            and the endless possibilities it offers, and I decided to pursue a
            degree in computer science to further my understanding of the field.
            In my free time, I enjoy tinkering with new software and hardware,
            and I'm always on the lookout for ways to improve my skills. I'm
            also a huge fan of gaming and cars. My long-term goal is to work at
            a tech company where I can use my skills to create innovative
            solutions and make a positive impact on the world. I'm a motivated
            and driven individual with a passion for learning and
            problem-solving."
          </p>
          <p className="py-2 text-gray-600"></p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl w-max h-max" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;