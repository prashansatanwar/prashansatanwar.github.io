import React from 'react'
import { social_links } from '../data/links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '../components/NavBar';

function About() {
  return (
    <>
      <NavBar currentId={1}/>
      <div className='min-h-screen w-full flex flex-col text-primary2'>
        <div className='pt-[22%] md:pt-[11%] lg:pt-[8%] sm:h-screen flex flex-col items-center '>
          <div className='w-full text-secondary flex flex-col gap-2'>
              <h1 className='font-bold text-3xl md:text-5xl italic'>/about</h1>
          </div>

          <div className='h-full flex flex-col items-center sm:items-start sm:flex-row my-8 md:w-2/3 '>
              <div className='flex p-4 lg:p-8 flex-col h-full justify-center items-center w-64 sm:w-1/3'>
                <div className='border-4 p-2 lg:p-4  border-double border-[#F2E0BD] rounded'>
                  <img className=' contrast-75 hover:contrast-100 ' src="assets/images/me.jpg"/>
                </div>

                <div className='ml-auto flex m-4 gap-2 sm:gap-1 lg:gap-2 text-black text-base sm:text-xs md:text-base'>
                  {social_links.map((l, k) => (
                      <a
                          href={l.path}
                          target="_blank"
                          rel="noreferrer"
                          key={k}
                          className=''
                      >
                      <FontAwesomeIcon
                          icon={l.icon}
                          size="sm" 
                          className="p-2 rounded-full bg-[#F2E0BD]"
                          />
                      </a>
                  ))}
              </div>
              </div>
              <div className='sm:w-2/3 m-2 p-4 px-10 text-left h-full'>
                
                <div className='font-semibold text-3xl'>
                  <div className='absolute mt-3 ml-1 h-[1em] text-transparent bg-accent'>
                  Hi, I'm Prashansa.
                  </div>
                  <div className='relative transition-all transform duration-300 hover:scale-105'>
                    Hi, I'm Prashansa.
                  </div>
                </div>

                <div className='pt-10 flex flex-col  justify-center gap-4 '>
                  <p>
                    <strong>Software engineer since 2022.</strong> I build things, break things, and rebuild them better.
                  </p>
                  <p>
                    <strong>Always learning.</strong> New tools, frameworks, and ways to solve problems keep me engaged.
                  </p>
                  <p>
                    <strong>Sometimes I <a  href={'https://medium.com/@prashansatanwar'} target="_blank" rel="noreferrer" className='hover:text-[#B69EB4] hover:underline'>write</a>. </strong> 
                    Mostly about code or anything new I've learned.
                  </p>
                  <p>
                    <strong>A reader and a hobby artist.</strong> I enjoy books, painting, and all kinds of art.
                  </p>
                  <p>
                    <strong>Always in for coffee. </strong> New cafes, new cities, always in.
                  </p>
                  <p>
                    <strong>Professional sleeper.</strong> Missed your call? I was probably asleep.
                  </p>
                  <p>
                    Let’s <a  href={'mailto:prashansatanwar@gmail.com'} target="_blank" rel="noreferrer" className='hover:text-[#B69EB4] hover:underline font-bold'>connect</a> -- code, books, coffee, or art, I’m all ears.
                  </p>
                </div>

              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About