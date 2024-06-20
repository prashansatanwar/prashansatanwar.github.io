import React, { useEffect } from 'react'
import { social_links } from '../data/links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
    const introText = "Hello, I'm \n Prashansa!!";

    // useEffect(() => {

    //     document.querySelectorAll(".bouncing-letters>span").forEach((element) => {
    //         element.addEventListener("mouseover", (e) => bounce(e.target));
    //     });

    //     function bounce(letter) {
    //         if (!letter.classList.contains("bounce")) {
    //             letter.classList.add("bounce");
    //             setTimeout(
    //                 function () {
    //                     letter.classList.remove("bounce");
    //                 },
    //                 1000
    //             );
    //         }
    //     }

    // })
  return (
    <div className='min-h-screen w-full flex flex-col bg-[#507255] p-4'> 
        <div className='flex-grow flex flex-col justify-center tracking-widest text-[#F2E0BD]'>
            <div className='text-9xl font-extrabold p-4'>
                Hello;
            </div>
            <div className='text-xl opacity-80'>
                I'm <span className='font-bold'>Prashansa</span>, a developer in the making.
            </div>
        </div>

        <div className='flex m-4 mt-auto items-center justify-center'>
            <div className='flex-grow m-2 h-[2px] rounded-lg bg-[#F2E0BD] opacity-50'>

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
                        className="p-2 rounded-full bg-[#F2E0BD]"
                        />
                    </a>
                ))}
            </div>

        </div>

           
        
            {/* <div className='mb-10 h-60 md:h-80 aspect-square flex justify-center items-center relative  '>
                <div className='absolute h-60 md:h-80 aspect-square flex'>
                    <div className='h-1/2 w-1/2 border-t-2 border-l-2 border-[#FEFAE0] pt-1 pl-1'>
                        <div className='h-3/4 w-3/4 border-t-2 border-l-2 border-[#FEFAE0] top-0'>

                        </div>
                    </div>
                    <div className='h-1/2 w-1/2 mt-auto border-b-2 border-r-2 border-[#FEFAE0] pb-1 pr-1 flex'>
                        <div className='h-3/4 w-3/4 border-b-2 border-r-2 border-[#FEFAE0] mt-auto ml-auto'>

                        </div>
                    </div>

                </div>

                <a href="https://github.com/prashansatanwar" 
                    target='_blank'
                    className='opacity-0 absolute h-48 md:h-60 aspect-square bg-gray-700 hover:backdrop-contrast-125 flex items-center justify-center hover:opacity-50 text-white'>
                        Go to github
                </a>
                <div className='h-48 md:h-60 aspect-square overflow-clip hover:opacity-60 hover:cursor-pointer'>
                    <img 
                        className=''
                        src='assets/images/me.png'    
                    />
                </div>
            </div>

            <div className='flex justify-center w-full lg:w-3/4 h-full'>

                <div className='pt-1 border-t-2 border-[#FEFAE0] flex-grow'>
                    <div className='ml-auto h-full border-t-2 border-[#FEFAE0] w-4/5'>

                    </div>
                </div>
                
                <div className='text-[#7f5539]'>
                    <div className='p-2 text-4xl md:text-6xl font-bold'>
                        <span className=''>
                            Hello, I'm 
                        </span>
                        <span className='text-[#FEFAE0] font-extrabold'> Prashansa! </span>
                    </div> 
                    <div className='md:text-xl'>
                        This is my  
                        <span className='font-bold'> Portfolio. </span>
                    </div>
                </div>

                <div className='pb-1 border-b-2 border-[#FEFAE0] flex-grow'>
                    <div className='h-full border-b-2 border-[#FEFAE0] w-4/5'>

                    </div>
                </div>
            </div>


            <div className='mt-8'>
            </div> */}


            {/* <div className='text-9xl text-left text-violet-400 font-extrabold bouncing-letters'>
                {introText.split("").map((letter, ind) => (
                    letter == '\n' 
                        ? <br key={ind}></br> 
                        : <span key={ind} className="bounce-anim mix-blend-difference ">{letter}</span>
                ))}
            </div> */}
    </div>
  )
}

export default Home