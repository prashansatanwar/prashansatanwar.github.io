import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { social_links } from "./routes";

function Sidebar() {
	return (
		<div className="order-last lg:order-first z-10 mt-20 lg:mt-0 lg:w-1/4 justify-center items-center font-raleway font-normal tracking-wide ">
			<div
				className="rounded-full bg-center bg-contain bg-img 
                            h-44 w-44"
			></div>

			<div className="pt-10 pb-5">
				<div className="pb-1 text-lg md:text-xl lg:text-3xl font-bold">
					PRASHANSA TANWAR
				</div>
				<a
					href="mailto:prashansatanwar@gmail.com"
					className="break-words text-sm md:text-base"
				>
					prashansatanwar@gmail.com
				</a>
			</div>


			<div className="py-6 border-t-2 border-b-2 border-cardcolor border-opacity-70 text-sm font-medium opacity-80">
			I'm an enthusiastic undergraduate student at IIITD who loves to dive into projects. 
			I like to keep an open mind while approaching new problems. 
			I'm currently seeking work opportunities as a Software Engineer or Data Analyst.
			</div>


			<div className="py-5 pb-16">
				<div className="inline-flex h-full w-full">
					{social_links
						.filter((l) => !l.index)
						.map((l, index) => (
							<a
								href={l.path}
								target="_blank"
								rel="noreferrer"
								key={index}
								className="hover:text-hovercolor"
							>
								<FontAwesomeIcon
									icon={l.icon}
									size="sm"
									className="rounded-full mx-2"
								/>
							</a>
						))}
					{social_links
						.filter((l) => l.index)
						.map((l, index) => (
							<a
								href={l.path}
								target=""
								download="prashansatanwar_resume"
								key={index}
								className="hover:text-hovercolor"
							>
								<FontAwesomeIcon
									icon={l.icon}
									size="sm"
									className="rounded-full mx-2"
								/>
							</a>
						))}
				</div>
			</div>
		</div>
	);
}

export default Sidebar;