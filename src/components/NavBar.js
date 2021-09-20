import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./routes";

const NavBar = ({ toggle,setOpen }) => {
	return (
		<nav className="fixed top-0 z-50 font-raleway font-medium tracking-wider flex bg-cardcolor text-textcolor shadow-sm w-full h-10">
			<Link
				to="/"
				className="text-sm tems-center justify-center h-full border-bgcolor border-r-2 py-2 px-4 tracking-widest hover:text-hovercolor"
				onClick={()=>setOpen(false)}
			>
				<b>PRASHANSA TANWAR</b>
			</Link>

			<div className="md:block hidden m-3 justify-center items-center text-xs">
				{routes
					.filter((l) => !l.index)
					.map((l, index) => (
						<Link
							key={index}
							className="border-bgcolor border-r-2 px-2 uppercase hover:text-hovercolor"
							to={l.path}
						>
							{l.label}
						</Link>
					))}
			</div>

			<div
				className="sm:block md:hidden m-auto inline-flex items-center mr-1 cursor-pointer hover:text-hovercolor"
				onClick={toggle}
			>
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
