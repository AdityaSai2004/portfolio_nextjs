import Image from "next/image";
import Link from "next/link";
import React from "react";
import agrotis from "../public/assets/projects/agrotis.png";
import fitnut from "../public/assets/projects/fitnut.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem.jsx";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#aff038]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Agrotis"
            backgroundImg={agrotis}
            projectUrl="/property"
            tech="Flask"
          />
          <ProjectItem
            title="Fitnut"
            backgroundImg={fitnut}
            projectUrl="/crypto"
            tech="Java"
          />
          <ProjectItem
            title="Journal"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="DocHub"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Gatsby JS"
          />
        </div>
        <a href="https://github.com/AdityaSai2004" className="mt-10px">
          Click here to see more of my projects
        </a>
      </div>
    </div>
  );
};

export default Projects;
