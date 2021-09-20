import React from "react";
import Sidebar from "../Sidebar";
import Skills from "../Resume/Skills";
import Education from "../Resume/Education";
import Experience from "../Resume/Experience";
import Courses from "../Resume/Courses";

function Resume() {
	return (
		<div className="flex flex-grow z-10 justify-center font-raleway tracking-wide my-20 h-full w-full">
			<div
				className="flex flex-col lg:flex-row 
                                px-5 md:px-32 w-full 
                                justify-center"
			>
				<Sidebar />
				<div
					className="flex flex-col
                            lg:ml-10 p-5 lg:p-10 lg:w-3/4 
                            order-first lg:order-last 
                            bg-cardcolor "
				>
					<h1 className="tracking-widest uppercase font-extrabold text-3xl text-center py-4 border-b-2">
						Resume
					</h1>
					<br />

					<h2 className="tracking-wider uppercase font-bold text-lg pl-2 mt-4 mb-2 border-b-2"> Education </h2>
					<Education/>
					<br/>

					<h2 className="tracking-wider uppercase font-bold text-lg pl-2 mt-4 mb-2 border-b-2"> Experience </h2>
					<Experience/>
					<br/>

					<h2 className="tracking-wider uppercase font-bold text-lg pl-2 mt-4 mb-2 border-b-2"> Skills </h2>
					<Skills/>
					<br/>

					<h2 className="tracking-wider uppercase font-bold text-lg pl-2 mt-4 mb-2 border-b-2"> Courses </h2>
					<Courses/>
					<br/>

				</div>
			</div>
		</div>
	);
}


export default Resume;
