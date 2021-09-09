import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 z-50 font-raleway font-medium tracking-wide flex bg-cardcolor text-textcolor shadow-sm w-screen h-10">
      <Link to="/" className="text-sm sm:text-base items-center justify-center h-full border-bgcolor border-r-2 p-2 pt-2 hover:text-hovercolor">
        PRASHANSA TANWAR
      </Link>

      <div className="md:block hidden m-3 justify-center items-center text-sm">
        <Link className="border-bgcolor border-r-2 px-2 hover:text-hovercolor" to="about">
          ABOUT
        </Link>
        <Link className="border-bgcolor border-r-2 px-2 hover:text-hovercolor" to="resume">
          RESUME
        </Link>
        <Link className="border-bgcolor border-r-2 px-2 hover:text-hovercolor" to="projects">
          PROJECTS
        </Link>
        <Link className="border-bgcolor border-r-2 px-2 hover:text-hovercolor" to="contact">
          CONTACT
        </Link>
      </div>

      <div className="sm:block md:hidden m-auto inline-flex items-center mr-1 cursor-pointer hover:text-hovercolor">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />

          
        </svg>
      </div>

    </nav>
  );
};

export default NavBar;
