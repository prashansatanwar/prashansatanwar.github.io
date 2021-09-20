import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./routes";

function Menu({ open, toggle }) {
	return (
		<div
			className={
				open
					? "fixed font-raleway font-medium tracking-wide shadow-sm top-10 z-40 left-full w-full sm:w-1/2 h-full transition duration-1000 ease-in-out transform -translate-x-full"
					: "fixed font-raleway font-medium tracking-wide shadow-sm top-10 z-40 left-full w-full sm:w-1/2 h-full transition duration-1000 ease-in-out transform translate-x-full"
			}
			onClick={toggle}
			
		>
			<div className="py-2 flex flex-col text-center bg-cardcolor bg-opacity-90 w-full h-full">
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
