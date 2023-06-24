// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   FaHtml5,
//   FaCss3,
//   FaReact,
//   FaNode,
//   FaCogs,
//   FaDatabase,
//   FaBootstrap,
//   FaGithub,
//   FaLinkedin,
//   FaFacebook,
//   FaInstagram,
// } from "react-icons/fa";
// import { SiJavascript, SiTailwindcss } from "react-icons/si";
import React from "react";
// import ReactTooltip from "react-tooltip";
// import { useNavigate } from "react-router-dom";
import laptop from "../images/laptop.png";
import workingEmoji from "../images/working-emoji.png";
import textLogo from "../images/full_-_stack_-_web_-_developer_cropped-removebg-preview.png";
import "../styles/About.css";

const About = () => {
  //   const navigate = useNavigate();

  //   const goToGithub = () => {
  //     window.open("https://github.com/Arif-Islam", "_blank");
  //   };
  //   const goToLinkedin = () => {
  //     window.open("https://www.linkedin.com/in/mdarifulislam1998/", "_blank");
  //   };
  //   const goToFacebook = () => {
  //     window.open("https://www.facebook.com/AR1F.01/", "_blank");
  //   };
  //   const goToInstagram = () => {
  //     window.open("https://www.instagram.com/_a_r_i_f________/", "_blank");
  //   };
  return (
    <div
      id="about"
      className="bg-white text-black w-11/12 lg:w-[950px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 lg:gap-20 pt-24 pb-32"
    >
      {/* about image  */}
      <div className="flex items-center justify-center lg:w-1/2 relative">
        <img
          className="rounded-2xl w-[300px] h-[220px] sm:w-[375px] sm:h-[260px] lg:w-[420px] lg:h-[320px]"
          src={laptop}
          alt=""
        />
        <div className="hidden sm:block">
          <div className="absolute -bottom-6 -right-6 lg:-bottom-12 lg:-right-12 w-24 h-24 lg:w-44 lg:h-44 bg-white rounded-full flex items-center justify-center">
            <img className="w-full rotate-img" src={textLogo} alt="" />
          </div>
          <img
            className="absolute bottom-2 right-1 lg:bottom-4 lg:right-2 w-10 lg:w-16 mx-auto"
            src={workingEmoji}
            alt=""
          />
        </div>
      </div>
      {/* about talks */}
      <div className="flex flex-col items-center lg:items-start justify-center lg:w-1/2 text-center lg:text-left">
        <p className="uppercase font-bold text-blue-500 text-lg mb-4 lg:mb-2">
          About me
        </p>
        <p className="font-semibold text-2xl mb-4 text-gray-800 max-w-[400px]">
          A dedicated Full Stack Developer based in Sylhet, Bangladesh📍
        </p>
        <p className="text-gray-700 w-11/12 sm:w-[500px] md:w-[600px] lg:w-auto xl:w-[500px]">
          As a Full Stack Developer, I possess an impressive arsenal of skills
          in HTML, CSS, JavaScript, React, Tailwind, NodeJs and MongoDB. I excel
          in developing websites that offer a smooth user experience. My
          expertise lies in crafting dynamic, engaging interfaces through
          writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
