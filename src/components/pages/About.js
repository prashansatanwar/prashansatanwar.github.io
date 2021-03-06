import React from "react";
import Sidebar from "../Sidebar";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";
import { Link } from "react-router-dom";

const data = raw("../../data/about.md");

const LinkRenderer = ({ ...children }) => <Link {...children} />;

function About() {
	return (
		<div className="flex flex-grow 
					z-10 py-20 min-h-screen min-w-screen
					justify-center 
					font-raleway tracking-wide text-textcolor dark:text-darktextcolor
					">
						
			<div
				className="flex flex-col lg:flex-row 
                                z-10 px-5 md:px-32 w-full 
                                justify-center"
			>
				<Sidebar />
				<div
					className="flex flex-col
                            lg:ml-10 p-5 lg:p-10 lg:w-3/4 
                            order-first lg:order-last 
                            bg-cardcolor dark:bg-darkcardcolor
							rounded-md "
				>
					<h1 className="tracking-widest uppercase font-extrabold text-4xl text-center py-4 border-b-2">
						About me
					</h1>
					<br />     
					<article className='text-sm'>
						<ReactMarkdown
							children={data}
							components={{
								Link: LinkRenderer,
								h1: ({ node, ...props }) => (
									<h1
										className="px-2 mt-4 mb-2 border-b-2 tracking-wider uppercase font-bold text-xl "
										{...props}
									></h1>
								),
								a: ({node, ...props}) => (
									<a
										className='underline text-hovercolor dark:text-darkhovercolor'
										{...props}
									></a>
								),
								p: ({node, ...props}) => (
									<p 
										className='py-3 pl-2'
										{...props}
									></p>
								),
								ul:({node,...props}) => (
									<ul
										className='px-7'
										style={{listStyle:'disc'}}
										{...props}
										ordered='false'
									></ul>
								),
								li:({node,...props}) => (
									<li
										className='py-1'
										{...props}
										ordered='false'
									></li>
								),
								strong:({node,...props})=>(
									<strong
										className='font-medium'
										{...props}
									></strong>
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
