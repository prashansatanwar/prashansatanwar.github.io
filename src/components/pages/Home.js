import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-grow justify-center items-center font-raleway m-5 mb-0 h-full w-full">
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
        <div className='flex flex-col flex-grow items-center justify-center text-center p-2 mt-5 lg:mt-0 mb-0'>
            {/* name */}
            <div className='text-l sm:text-3xl md:text-5xl font-bold tracking-widest'>
                PRASHANSA TANWAR
            </div>
            {/* content */}
            <div className='flex-grow text-xs sm:text-sm md:text-md lg:text-lg md:pl-10 sm:py-5 md:py-10 font-normal tracking-wide'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo commodi rerum expedita consectetur debitis quisquam provident nisi quis esse perspiciatis magnam incidunt, tempore dolorum est minus. Dignissimos laborum pariatur amet?
            </div>
            {/* Social Media */}
            <div className='items-center text-center h-1/5'>
              social media
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
