import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { XIcon } from "@heroicons/react/solid";
import "./Header.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("container");
  };

  return (
    <nav className="z-20 py-4 lg:py-6 bg-white navbar shadow-sm fixed top-0 left-0 right-0">
      <div className="hidden md:block md:w-11/12 mx-auto ">
        <div className="flex items-center justify-between">
          <div className="">
            <Link
              to="/"
              className="text-[22px] font-bold tracking-wide hover:text-black"
            >
              Arif.dev
            </Link>
          </div>
          <div className="flex space-x-5 justify-center items-center font-semibold tracking-wide text-base">
            <div className="">
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="">
              <HashLink to="/#about" smooth>
                About
              </HashLink>
            </div>
            <div className="">
              <NavLink to="/blogs">Blogs</NavLink>
            </div>
            <div className="">
              <HashLink to="/#projects" smooth>
                Projects
              </HashLink>
            </div>
            <div className="">
              <HashLink to="/#contact" smooth>
                Contact
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden w-11/12 mx-auto">
        <div className="flex items-center justify-between">
          <div className="">
            <Link
              to="/"
              className="text-xl font-bold tracking-wide hover:text-black"
            >
              Arif.dev
            </Link>
          </div>
          <div>
            {!showNav ? (
              <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                className="text-xl"
                icon={faBarsStaggered}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {showNav && (
        <div className="container w-screen h-screen">
          <div className="flex flex-col space-y-10 justify-center items-center font-medium tracking-wide text-[22px]">
            <div className="">
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="">
              <HashLink to="/#about" smooth>
                About
              </HashLink>
            </div>
            <div className="">
              <NavLink to="/blogs">Blogs</NavLink>
            </div>
            <div className="">
              <HashLink to="/#projects" smooth>
                Projects
              </HashLink>
            </div>
            <div className="">
              <HashLink to="/#contact" smooth>
                Contact
              </HashLink>
            </div>
          </div>
          {/* <XIcon
            onClick={() => setShowNav(false)}
            className="w-6 text-black fixed top-4 left-[calc(100%-8.33%)] z-50"
          ></XIcon> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
