import React, { useEffect } from 'react'
import { social_links } from '../data/links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Hello() {
  return (
    <div className='h-[100%] w-full flex flex-col bg-primary p-4 cursor-default'> 
            <div className='flex-grow flex flex-col justify-center tracking-widest text-secondary'>
                <div className="text-7xl sm:text-8xl md:text-9xl font-extrabold p-4">
                   {"Hello;".split("").map((char, index) => (
                        <span
                        key={index}
                        className="transition-all duration-300 text-secondary"
                        style={{
                            color: "#F2E0BD",                 // filled by default
                            WebkitTextStroke: "0px #F2E0BD",  // no stroke initially
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.color = "transparent";       // hide fill
                            e.target.style.WebkitTextStroke = "3px #F2E0BD"; // show outline
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = "#F2E0BD";           // revert fill
                            e.target.style.WebkitTextStroke = "0px";  // remove outline
                        }}
                        >
                        {char}
                        </span>
                    ))}

                </div>
                <div className='text:base sm:text-md md:text-xl opacity-80'>
                    I'm <span className='font-bold'>Prashansa</span>, a developer in the making.
                </div>
            </div>

            <div className='flex m-4 mt-auto items-center justify-center'>
                <div className='flex-grow m-2 h-[2px] rounded-lg bg-secondary opacity-50'>

                </div>
                <div className='flex'>
                    {social_links.map((l, k) => (
                        <a
                            href={l.path}
                            target="_blank"
                            rel="noreferrer"
                            key={k}
                            className='mx-2 '
                        >
                        <FontAwesomeIcon
                            icon={l.icon}
                            size="lg" 
                            className="p-2 rounded-full bg-secondary"
                            />
                        </a>
                    ))}
                </div>

            </div>
        </div>
  )
}

export default Hello