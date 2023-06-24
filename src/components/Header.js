import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { XIcon } from "@heroicons/react/solid";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../styles/Header.css";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm bg-white flex items-center justify-between h-[80px] px-8 md:px-12 lg:px-20">
      {/* logo - first item */}
      <Link
        to="/"
        className="text-xl lg:text-[22px] font-bold tracking-wide text-gray-800 hover:text-black"
      >
        Arif.dev
      </Link>
      {/* links - second item which is hidden in mobile screen */}
      <nav
        className="flex items-center font-medium tracking-wide text-2xl "
        ref={navRef}
      >
        <NavLink to="/" onClick={showNavbar}>
          Home
        </NavLink>

        <HashLink to="/#about" smooth onClick={showNavbar}>
          About
        </HashLink>

        {/* <NavLink to="/blogs" onClick={showNavbar}>
          Blogs
        </NavLink> */}

        <HashLink to="/#projects" smooth onClick={showNavbar}>
          Projects
        </HashLink>

        <HashLink to="/#contact" smooth onClick={showNavbar}>
          Contact
        </HashLink>

        <button
          className="p-[5px] hover:cursor-pointer border-none outline-none nav-close-btn"
          onClick={showNavbar}
        >
          <XIcon className="w-6 h-6 text-black"></XIcon>
        </button>
      </nav>
      {/* menu icon - visible in only mobile screen */}
      <button
        className="menu-icon p-[5px] hover:cursor-pointer border-none outline-none text-black"
        onClick={showNavbar}
      >
        <FontAwesomeIcon className="text-2xl" icon={faBarsStaggered} />
      </button>
    </header>
  );
};

export default Header;
