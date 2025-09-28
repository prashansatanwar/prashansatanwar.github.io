import React, { useState, useEffect, useRef } from 'react';
import { projects as proj } from '../data/projects';
import ProjectGalleryCard from '../components/ProjectGalleryCard';
import { useNavigate } from 'react-router-dom';

const monthMap = {
  January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
};

function parseMonthYear(str) {
  const [month, year] = str.split(" ");
  return new Date(parseInt(year), monthMap[month], 1);
}

function Typewriter({ text = "", speed = 150, start = false, onComplete }) {
  const [displayed, setDisplayed] = useState("");
  const idxRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!start || displayed.length === text.length) return; 

    setDisplayed("");
    idxRef.current = 0;
    const chars = Array.from(text);

    intervalRef.current = setInterval(() => {
      const i = idxRef.current;
      if (i < chars.length) {
        setDisplayed(prev => prev + chars[i]);
        idxRef.current += 1;
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        if (onComplete) onComplete(); 
      }
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [start, text, speed, onComplete]);

  return <span>{displayed}</span>;
}


function Projects({ visible }) {
  const [displayOutput, setDisplayOutput] = useState(false);
  const [displayNextCommand, setDisplayNextCommand] = useState(false);
  const navigate = useNavigate();

  const projects = [...proj].sort((a, b) => parseMonthYear(b.date) - parseMonthYear(a.date));

  return (
    <div className='h-[100%] px-5 lg:pl-28 lg:pr-26 pt-[10%] lg:pt-[8%] w-full flex flex-col md:flex-row gap-4 bg-primary text-secondary'>
      <div className='mb-5 -mt-10 md:m-0 md:p-4 h-1/3 md:h-auto md:w-1/4 lg:w-1/5 
                      flex gap-2 md:gap-0 md:flex-col 
                      items-stretch justify-center 
                      order-last md:order-first
                      overflow-auto md:overflow-visible'>
        <div className='aspect-square hover:z-10 
                      sm:border-4 border-black rounded 
                      transform transition-transform duration-300 
                      hover:rotate-2 hover:shadow-lg'>
          <ProjectGalleryCard project={projects.at(0)} />
          <div className='absolute inset-0 z-20'></div>
        </div>
        <div className='aspect-square hidden sm:block
                        hover:z-10 
                        md:ml-4 lg:ml-10 md:-mt-4 lg:-mt-10 
                        sm:border-4 border-black rounded 
                        transform transition-transform duration-300 
                        hover:-rotate-2 hover:shadow-lg'>
          <ProjectGalleryCard project={projects.at(1)} />
          <div className='absolute inset-0 z-20'></div>
        </div>
        <div className='md:pt-4 flex ml-3 md:ml-none '>
          <button className='p-2 px-4 hover:bg-accent3 hover:text-primary2 rounded bg-black/20 text-sm lg:text-base' onClick={() => navigate('/projects')}>
            View full projects archives
          </button>
        </div>
      </div>


      <div className='h-2/3 justify-center md:h-auto md:w-3/4 lg:w-4/5 lg:ml-16 sm:mx-6 md:my-3 text-left tracking-widest'>
        <div className='flex w-full p-2 bg-black/30 rounded-t'>
          <div className='flex gap-2'>
            <div className='rounded-full bg-red-400 h-2 sm:h-4 aspect-square'></div>
            <div className='rounded-full bg-yellow-400 h-2 sm:h-4 aspect-square'></div>
            <div className='rounded-full bg-green-400 h-2 sm:h-4 aspect-square'></div>
          </div>
        </div>

        <div className='p-1 sm:p-4 h-4/5 flex flex-col gap-8 bg-black/20 rounded-b text-[0.7rem] sm:text-xs lg:text-sm overflow-y-auto'>
          <div>
            <span className='text-green-500'>prashansa@MacBook-Pro ~ %</span>
            <span className='pl-2'> cd </span>
            <span className='text-xl md:text-2xl lg:text-4xl font-semibold pl-2'>building_and_experimenting</span>
          </div>

          <div>
            <span className='text-green-500'>prashansa@MacBook-Pro building_and_experimenting %</span>
            <span className='pl-2'> ls </span>
            <div className='font-bold'>readme.txt</div>
          </div>

          <div className='pr-28'>
            <span className='text-green-500'>prashansa@MacBook-Pro building_and_experimenting %</span>
            <span className='pl-2'>
              <Typewriter
                text="cat readme.txt"
                speed={30}
                start={visible}
                onComplete={() => {setTimeout(() => setDisplayOutput(true), 300); setTimeout(() => setDisplayNextCommand(true), 400)}}
              />
            </span>

            {displayOutput && (
              <div className='md:text-base'>
                These projects capture what I’ve been building, testing, and exploring. 
                From prototypes to complete applications, each one represents a skill I’ve honed or a problem I’ve tackled. 
                This archive is a mix of experimentation and purpose.
              </div>
            )}
          </div>

          {displayNextCommand && (
            <div className='pr-28 flex'>
              <span className='text-green-500'>prashansa@MacBook-Pro building_and_experimenting % <span className='h-full m-1 ml-2 px-[0.1rem] py-[0.2rem] bg-black/30 animate-pulse'>&nbsp;</span></span>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
