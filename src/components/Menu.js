import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./routes";

function Menu({ open, toggle }) {
  return (
    <div
      className={
        open
          ? "fixed font-raleway font-medium tracking-wide shadow-sm top-10 z-10 w-full h-full"
          : "hidden"
      }
      onClick={toggle}
    >
      <div className="ml-auto py-2 flex flex-col text-center bg-cardcolor bg-opacity-90 mr-0 xsm:3/5 sm:w-2/5 h-full ">
        {routes
          .filter((l) => !l.index)
          .map((l, index) => (
            <Link
              key={index}
              className="uppercase py-2 text-sm hover:bg-bgcolor hover:bg-opacity-40"
              to={l.path}
            >
              {l.label}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Menu;
