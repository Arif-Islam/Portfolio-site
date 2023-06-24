import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-[#2D2E32]">
      <div className="w-11/12 lg:w-[900px] xl:w-[940px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between py-10 space-y-6 sm:space-y-0">
          <div>
            <p
              to="/"
              className="font-semibold tracking-wide text-white hover:text-white text-center sm:text-left leading-relaxed"
            >
              Copyright © 2021. Dev — @Ariful_Islam
            </p>
          </div>
          <div className="flex space-x-5">
            <a
              href="https://github.com/Arif-Islam"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="w-5 h-5 text-stone-100 transition ease-linear hover:cursor-pointer hover:scale-125"></BsGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/mdarifulislam1998/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="w-5 h-5 text-stone-100 transition ease-linear hover:cursor-pointer hover:scale-125"></BsLinkedin>
            </a>
            <a
              href="https://www.facebook.com/AR1F.01/"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook className="w-5 h-5 text-stone-100 transition ease-linear hover:cursor-pointer hover:scale-125"></BsFacebook>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
