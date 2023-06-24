import React from "react";
import "../styles/Intro.css";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import handWave from "../images/hand wave.png";
import { FaDownload } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="w-11/12 lg:w-full mx-auto h-auto lg:h-screen pt-32 pb-20 md:pb-28 lg:py-0 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-10 text-black">
        <div className="flex flex-col items-center lg:items-start ">
          <div className="flex items-center mb-4">
            <p className="text-[40px] md:text-[55px] font-semibold mr-3 text-gray-800">
              Ariful Islam
            </p>
            <p className="">
              <img className="w-10 md:w-12" src={handWave} alt="" />
            </p>
          </div>
          <div className="text-xl font-medium mb-5 text-typing relative text-gray-700">
            <div className="lg:ml-24">
              <Typewriter
                loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={2000}
                words={[
                  "Full Stack Developer",
                  "Problem Solver",
                  "An Enthusiast",
                ]}
              />
            </div>
          </div>
          <p className="sm:w-[400px] lg:w-[500px] mb-8 text-gray-700 text-[17px] leading-relaxed text-center lg:text-left">
            I'm a passionate and dedicated Full Stack{" "}
            <br className="hidden lg:block" /> Developer based in Sylhet,
            Bangladesh.📍
          </p>
          <Link
            to="files/Md_Ariful_Islam_MERN_Stack_Dev_Resume.pdf"
            target="_blank"
            download
          >
            <button className="px-6 py-4 bg-[#333333] text-white font-medium tracking-wide shadow-xl rounded-2xl transition transform duration-500 ease-in-out hover:-translate-y-[6px] hover:shadow-xl hover:bg-black flex items-center">
              Download Resume{" "}
              <p className="ml-2">
                <FaDownload></FaDownload>
              </p>
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center intro-img">
          {/* intro image div. */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
