import React, { useEffect, useState } from "react";
import useProjects from "../../../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import auto_parts from "../../../images/Auto Parts optimized.png";
import sports_gear from "../../../images/Sports Gear optimized.png";
import sylhet_safari from "../../../images/Sylhet Safari optimized.png";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const [projects, setProjects] = useProjects();
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);

  return (
    <div id="projects" className="bg-[#f9f9f9]">
      <div className="py-14 lg:py-24">
        <div className="w-11/12 lg:w-[940px] mx-auto text-center lg:text-left">
          <p className="text-lg text-blue-500 font-bold tracking-wide uppercase mb-2 ">
            Projects
          </p>
          <p className="text-xl font-bold text-gray-700 mb-10">
            Each project is a unique piece of development 🧩
          </p>
        </div>

        <div className="w-5/6 sm:w-3/4 md:w-2/3 lg:w-auto mx-auto flex flex-col items-center justify-center gap-10 lg:gap-16 py-6">
          <div className="w-full lg:w-[940px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 bg-white py-6 px-4 lg:p-10 rounded-3xl shadow-sm hover:shadow">
            <div className="lg:w-1/2 mx-auto">
              <div
                className={`image-container ${hovered1 ? "hovered1" : ""}`}
                onMouseEnter={() => setHovered1(true)}
                onMouseLeave={() => setHovered1(false)}
              >
                <img
                  className="img1 hover:cursor-pointer"
                  src={auto_parts}
                  alt=""
                />
              </div>
            </div>
            <div className="w-auto lg:w-1/2 mx-auto flex flex-col items-center">
              <p className="uppercase text-lg font-bold text-gray-800 mb-4">
                Auto Parts 🚗
              </p>
              <p className="text-gray-700 lg:w-[350px] text-center mb-4">
                A manufacturer auto parts website with Express JS backend and
                Firebase authentication. Developed a payment system using stripe
                for users to pay for their orders. Implemented different
                dashboard features for admin and non-admin users.
              </p>
              <div className="flex items-center justify-center flex-wrap space-x-5 font-bold text-gray-700 mb-5">
                <p className="hover:text-gray-400 mb-2 lg:mb-0">React</p>
                <p className="hover:text-gray-400 mb-2 lg:mb-0">Tailwind</p>
                <p className="hover:text-gray-400 mb-2 lg:mb-0">Express Js</p>
                <p className="hover:text-gray-400 mb-2 lg:mb-0">MongoDB</p>
                <p className="hover:text-gray-400 mb-2 lg:mb-0">JWT</p>
                {/* <p className="hover:text-gray-400">Firebase</p> */}
              </div>
              <div className="flex items-center justify-center flex-wrap space-x-6 lg:space-x-8">
                <a
                  href="https://auto-parts-a1c73.web.app/"
                  target="_blank"
                  className="flex items-center hover:text-blue-500 mb-2 lg:mb-0"
                  rel="noreferrer"
                >
                  <p className="font-medium mr-1 text-[17px]">Live Site</p>
                  <BiLinkExternal className="w-5 h-5"></BiLinkExternal>
                </a>
                <a
                  href="https://github.com/Arif-Islam/auto-parts-client-side"
                  target="_blank"
                  className="flex items-center hover:text-blue-500 mb-2 lg:mb-0"
                  rel="noreferrer"
                >
                  <p className="font-medium mr-1 text-[17px]">Clientside</p>
                  <BsGithub className="w-5 h-5"></BsGithub>
                </a>
                <a
                  href="https://github.com/Arif-Islam/auto-parts-server-side"
                  target="_blank"
                  className="flex items-center hover:text-blue-500 mb-2 lg:mb-0"
                  rel="noreferrer"
                >
                  <p className="font-medium mr-1 text-[17px]">Serverside</p>
                  <BsGithub className="w-5 h-5"></BsGithub>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[940px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-12 lg:gap-0 bg-white py-6 px-4 lg:p-10 rounded-3xl shadow-sm hover:shadow">
            <div className="lg:w-1/2 mx-auto">
              <div
                className={`image-container ${hovered2 ? "hovered2" : ""}`}
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
              >
                <img
                  className="img2 hover:cursor-pointer"
                  src={sports_gear}
                  alt=""
                />
              </div>
            </div>
            <div className="w-auto lg:w-1/2 mx-auto flex flex-col items-center">
              <p className="uppercase text-lg font-bold text-gray-800 mb-4">
                Sports Gear 🏓
              </p>
              <p className="text-gray-700 lg:w-[350px] text-center mb-4">
                A website for a warehouse that has different sports gear in
                their inventory. Implemented an authentication system using
                Firebase. Users can add or remove products.
              </p>
              <div className="flex items-center justify-center flex-wrap space-x-5 font-bold text-gray-700 mb-5">
                <p className="hover:text-gray-400 mb-2 lg:mb-0">React</p>
                <p className="hover:text-gray-400 mb-2 lg:mb-0">Tailwind</p>
                <p className="hover:text-gray-400 mb-2 lg:mb-0">Express JS</p>
                <p className="hover:text-gray-400 mb-2 lg:mb-0">MongoDB</p>
                {/* <p className="hover:text-gray-400">Firebase</p> */}
              </div>
              <div className="flex items-center justify-center flex-wrap space-x-6 lg:space-x-8">
                <a
                  href="https://sports-gear-6d1f5.web.app/"
                  target="_blank"
                  className="flex items-center hover:text-blue-500 mb-2 lg:mb-0"
                  rel="noreferrer"
                >
                  <p className="font-medium mr-1 text-[17px]">Live Site</p>
                  <BiLinkExternal className="w-5 h-5"></BiLinkExternal>
                </a>
                <a
                  href="https://github.com/Arif-Islam/sports-gear-client-side"
                  target="_blank"
                  className="flex items-center hover:text-blue-500 mb-2 lg:mb-0"
                  rel="noreferrer"
                >
                  <p className="font-medium mr-1 text-[17px]">Clientside</p>
                  <BsGithub className="w-5 h-5"></BsGithub>
                </a>
                <a
                  href="https://github.com/Arif-Islam/sports-gear-server-side"
                  target="_blank"
                  className="flex items-center hover:text-blue-500 mb-2 lg:mb-0"
                  rel="noreferrer"
                >
                  <p className="font-medium mr-1 text-[17px]">Serverside</p>
                  <BsGithub className="w-5 h-5"></BsGithub>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[940px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 bg-white py-6 px-4 lg:p-10 rounded-3xl shadow-sm hover:shadow">
            <div className="lg:w-1/2 mx-auto">
              <div
                className={`image-container ${hovered3 ? "hovered3" : ""}`}
                onMouseEnter={() => setHovered3(true)}
                onMouseLeave={() => setHovered3(false)}
              >
                <img
                  className="img3 hover:cursor-pointer"
                  src={sylhet_safari}
                  alt=""
                />
              </div>
            </div>
            <div className="w-auto lg:w-1/2 mx-auto flex flex-col items-center">
              <p className="uppercase text-lg font-bold text-gray-800 mb-4">
                Sylhet Safari 🌴
              </p>
              <p className="text-gray-700 lg:w-[350px] text-center mb-4">
                A website for an individual who serves as a tour guide.
                Implemented an authentication system using Firebase to see a
                different route. Service cards are a bit unique and the whole
                site looks beautiful.
              </p>
              <div className="flex items-center justify-center flex-wrap space-x-5 font-bold text-gray-700 mb-5">
                <p className="hover:text-gray-400 mb-2 lg:mb-0">React</p>
                <p className="hover:text-gray-400 mb-2 lg:mb-0">Tailwind</p>
                <p className="hover:text-gray-400 mb-2 lg:mb-0">Firebase</p>
              </div>
              <div className="flex items-center justify-center flex-wrap space-x-6 lg:space-x-8">
                <a
                  href="https://sylhet-safari.web.app/"
                  target="_blank"
                  className="flex items-center hover:text-blue-500 mb-2 lg:mb-0"
                  rel="noreferrer"
                >
                  <p className="font-medium mr-1 text-[17px]">Live Site</p>
                  <BiLinkExternal className="w-5 h-5"></BiLinkExternal>
                </a>
                <a
                  href="https://github.com/Arif-Islam/sylhet-safari"
                  target="_blank"
                  className="flex items-center hover:text-blue-500 mb-2 lg:mb-0"
                  rel="noreferrer"
                >
                  <p className="font-medium mr-1 text-[17px]">Code</p>
                  <BsGithub className="w-5 h-5"></BsGithub>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
