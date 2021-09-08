import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className="justify-center items-center font-raleway h-screen w-screen bg-bgcolor">
    {/* info-card */}
      <div className="md:bg-red-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    flex flex-col lg:inline-flex lg:flex-row  justify-center items-center h-4/5 w-10/12">
        {/* picture */}
        <div className="relative flex-shrink-0 rounded-full h-56 w-56 lg:h-64 lg:w-64 bg-cardcolor">
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        rounded-full bg-center bg-contain bg-img h-52 w-52 lg:h-60 lg:w-60
                        hover:scale-110 transition ease-in-out duration-500"
          ></div>
        </div>
        {/* card */}
        <div className='bg-blue-200 sm:bg-green-200 flex flex-col items-center justify-center text-center p-4 min-h'>
            {/* name */}
            <div className='text-3xl md:text-5xl font-bold tracking-widest'>
                PRASHANSA TANWAR
            </div>
            {/* content */}
            <div className='flex-grow text-sm md:text-md lg:text-lg sm:px-28 sm:pt-10 pb-1 font-normal tracking-wide'>
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
