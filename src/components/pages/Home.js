import React, { useState, useEffect, useRef } from "react";
import { social_links } from "../routes.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const content = ["Student ", "Learner ", "Artist ", "Dreamer... ", ""];
const colors = ["#184e77","#1a759f","#34a0a4","#76c893",""];
const darkcolors = ['#F0ACC4','#E1BFBF','#CDD8B9','#AFFCAF',''];

const useInterval = (callback, delay) => {
	const savedCallback = useRef();
  
	useEffect(() => {
	  savedCallback.current = callback;
	}, [callback]);
  
	useEffect(() => {
	  if (delay) {
		const id = setInterval(() => {
		  savedCallback.current();
		}, delay);
		return () => clearInterval(id);
	  }
	  return () => {}; // pass linter
	}, [delay]);
  };

function Home() {

	const [ind, setInd] = useState(0);
	const [charin, setCharin] = useState(0);
	const [curr, setCurr] = useState('');
	const [backward, setBackward] = useState(false)
	
	useInterval(
		() => {
			setCurr(content[ind].slice(0,charin))
			
			if(ind===content.length-1) setInd(0);
			if(charin===content[ind].length-1) setBackward(true);
			
			if(backward) setCharin(charin-1);
			else setCharin(charin+1);
			if(backward && charin <= 0){
				setBackward(false);
				setCharin(0);
				setInd(ind+1);
			}
		},150
	);

	return (
		<div className="flex flex-grow z-10 min-h-screen min-w-screen items-center justify-center font-raleway text-textcolor dark:text-darktextcolor tracking-wide">
			{/* info-card */}
			<div
				className="flex flex-col md:flex-row lg:inline-flex lg:flex-row 
                    justify-center items-center
                    z-10 p-10 pt-0 
                    h-full w-10/12"
			>
				{/* picture */}
				<div
					className="relative md:flex-shrink-0 rounded-full 
                      h-32 w-32 xsm:h-52 xsm:w-52 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96
                      lg:ml-14 
                      bg-cardcolor dark:bg-darkcardcolor"
				>
					<div
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        rounded-full bg-center bg-contain bg-img 
                        h-95p w-95p
                        hover:shadow-md hover:scale-110 transition ease-in-out duration-500"
					></div>
				</div>
				{/* card */}
				<div className="flex flex-col flex-grow items-center justify-center text-center p-2 md:pl-4 mt-5 lg:mt-0 mb-0">
					{/* name */}
					<div
						className="text-xl sm:text-4xl md:text-6xl 
                          w-full text-center justify-center items-center
                          font-bold tracking-wider"
					>
						Hi, I'm <br className="sm:hidden" />{" "}
						<span className="text-red-700 dark:text-red-400">Prashansa Tanwar</span>
					</div>
					{/* content */}
					<div
						className="flex-grow text-sm sm:text-base md:text-4xl w-full
								uppercase font-bold text-center 
                          		md:px-5 sm:py-5 md:py-10 
                          		font-normal tracking-widest"
								style={
									window.localStorage.getItem('color-theme') === 'dark' 
									? {color:darkcolors[ind]}
									: {color:colors[ind]}
								}
					>
						{curr} &nbsp;
					</div>
					{/* Social Media */}
					<div
						className="items-center justify-center text-center 
                          h-5 md:h-16 w-full my-5"
					>
						<div className="inline-flex justify-center items-center h-full w-full md:hidden">
							{social_links
								.filter((l) => !l.index)
								.map((l, index) => (
									<a
										href={l.path}
										target="_blank"
										rel="noreferrer"
										key={index}
										className="text-gray-600 dark:text-white hover:text-hovercolor dark:hover:text-darkhovercolor"
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
										className="text-gray-600 dark:text-white hover:text-hovercolor dark:hover:text-darkhovercolor"
									>
										<FontAwesomeIcon
											icon={l.icon}
											size="sm"
											color='#000'
											className="rounded-full mx-2"
										/>
									</a>
								))}
						</div>

						<div className="inline-flex justify-center items-center h-full w-full hidden md:flex">
							{social_links
								.filter((l) => !l.index)
								.map((l, index) => (
									<a
										href={l.path}
										target="_blank"
										rel="noreferrer"
										key={index}
										className="text-gray-600 dark:text-white hover:text-hovercolor dark:hover:text-darkhovercolor"
									>
										<FontAwesomeIcon
											icon={l.icon}
											size="lg"
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
										className="text-gray-600 dark:text-white hover:text-hovercolor dark:hover:text-darkhovercolor"
									>
										<FontAwesomeIcon
											icon={l.icon}
											size="lg"
											className="rounded-full mx-2"
										/>
									</a>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
