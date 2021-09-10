import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./routes";

const NavBar = () => {
  return (
    <nav className="fixed top-0 z-50 font-raleway font-medium tracking-wide flex bg-cardcolor text-textcolor shadow-sm w-full h-10">
      <Link to="/Portfolio" className="text-sm sm:text-base items-center justify-center h-full border-bgcolor border-r-2 p-2 hover:text-hovercolor">
        PRASHANSA TANWAR
      </Link>

      <div className="md:block hidden m-3 justify-center items-center text-sm">
        {routes.filter((l) => !l.index).map((l) => (
          <Link className="border-bgcolor border-r-2 px-2 uppercase hover:text-hovercolor" to={l.path}>{l.label}</Link>
        ))}
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
