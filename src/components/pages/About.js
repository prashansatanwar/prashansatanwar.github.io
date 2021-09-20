import React from "react";
import Sidebar from "../Sidebar";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";
import { Link } from "react-router-dom";

const data = raw("../../data/about.md");

const LinkRenderer = ({ ...children }) => <Link {...children} />;

function About() {
	console.log(data);
	// console.log(LinkRenderer)
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
						About me
					</h1>
					<br />
					<article>
						<ReactMarkdown
							children={data}
							components={{
								Link: LinkRenderer,
								h1: ({ node, ...props }) => (
									<h1
										className="text-xl uppercase font-bold tracking-wider"
										{...props}
									></h1>
								),
								h2: ({ node, ...props }) => (
									<h1
										className="text-lg uppercase font-bold tracking-wider"
										{...props}
									></h1>
								),
								h3: ({ node, ...props }) => (
									<h1
										className="text-base uppercase font-bold tracking-wider"
										{...props}
									></h1>
								),
							}}
						/>
					</article>
				</div>
			</div>
		</div>
	);
}

export default About;
