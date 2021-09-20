import React from "react";
import {social_links} from '../routes.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Home() {
  return (
    <div className="flex flex-grow z-10 justify-center items-center font-raleway m-5 mb-0 h-full w-full tracking-wide">
    {/* info-card */}
      <div className="flex flex-col md:flex-row lg:inline-flex lg:flex-row 
                    justify-center items-center
                    p-10 pt-0 
                    h-full w-10/12">
        {/* picture */}
        <div className="relative md:flex-shrink-0 rounded-full 
                      h-32 w-32 xsm:h-52 xsm:w-52 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96
                      lg:ml-14 
                      bg-cardcolor">
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        rounded-full bg-center bg-contain bg-img 
                        h-95p w-95p
                        hover:shadow-md hover:scale-110 transition ease-in-out duration-500"
          ></div>
        </div>
        {/* card */}
        <div className='flex flex-col flex-grow items-center justify-center text-center p-2 md:pl-4 mt-5 lg:mt-0 mb-0'>
            {/* name */}
            <div className='text-l sm:text-3xl md:text-5xl 
                          w-full text-center justify-center items-center
                          font-bold tracking-wider'>
                Hi, I'm <br className='sm:hidden'/> <span className='text-red-700'>Prashansa Tanwar</span>
            </div>
            {/* content */}
            <div className='flex-grow text-xs sm:text-sm md:text-xl w-full
                          md:px-5 sm:py-5 md:py-10 
                          font-normal tracking-wide'>
              I AM 
            </div>
            {/* Social Media */}
            <div className='items-center justify-center text-center 
                          h-5 md:h-16 w-full my-5'>

              <div className='inline-flex justify-center items-center h-full w-full md:hidden'>
                  {social_links.filter((l) => !l.index).map((l,index) => (
                    <a href={l.path} target='_blank' rel="noreferrer" key={index} className='text-gray-600 hover:text-textcolor'><FontAwesomeIcon icon = {l.icon} size='sm' className="rounded-full mx-2 hover:shadow-lg"/></a>
                  ))}
                  {social_links.filter((l) => l.index).map((l,index) => (
                    <a href={l.path} target='' download='prashansatanwar_resume' key={index} className='text-gray-600 hover:text-textcolor'><FontAwesomeIcon icon = {l.icon} size='sm' className="rounded-full mx-2 hover:shadow-lg"/></a>
                  ))}
              </div>


              <div className='inline-flex justify-center items-center h-full w-full hidden md:flex'>
                  {social_links.filter((l) => !l.index).map((l,index) => (
                    <a href={l.path} target='_blank' rel="noreferrer" key={index} className='text-gray-600 hover:text-textcolor'><FontAwesomeIcon icon = {l.icon} size='lg' className="rounded-full mx-2 hover:shadow-lg"/></a>
                  ))}
                  {social_links.filter((l) => l.index).map((l,index) => (
                    <a href={l.path} target='' download='prashansatanwar_resume' key={index} className='text-gray-600 hover:text-textcolor'><FontAwesomeIcon icon = {l.icon} size='lg' className="rounded-full mx-2 hover:shadow-lg"/></a>
                  ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
