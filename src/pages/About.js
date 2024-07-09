import React from 'react'
import { social_links } from '../data/links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
  return (
    <div className='min-h-screen w-full flex flex-col text-white'>
      <div className='p-4 pt-12 sm:h-screen flex flex-col items-center '>
        <div className='pt-2 px-4 w-full text-left font-bold text-8xl text-[#F2E0BD]'>
            About me.
        </div>

        <div className='flex flex-col items-center sm:items-start sm:flex-row p-4 mt-4 md:w-2/3 '>
            <div className='p-4 flex flex-col items-center w-64 sm:w-1/3'>
              <div className='border-4  border-double border-[#F2E0BD] rounded'>
                <img className='p-4 contrast-75 hover:contrast-100 ' src="assets/images/me.jpg"/>
              </div>

              <div className='ml-auto flex pt-4 text-black text-xs md:text-base'>
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
                        size="sm" 
                        className="p-2 rounded-full bg-[#F2E0BD]"
                        />
                    </a>
                ))}
            </div>
            </div>
            <div className='sm:w-2/3 m-2 p-4 px-10 text-left'>
              
              <div className='font-medium text-3xl'>
                <div className='absolute mt-3 ml-1 h-[1em] text-transparent bg-[#6A3937]'>
                 Hi, I'm Prashansa.
                </div>
                <div className='relative'>
                  Hi, I'm Prashansa.
                </div>
              </div>
              
              
              <div className='pt-8'>
                <div>
                  I am a budding software engineer who loves experimenting with new technologies. You can check out my projects on<a 
                    href="https://github.com/prashansatanwar"  
                    target="_blank"
                    rel="noreferrer"
                    className='underline ml-1 px-1 hover:text-[#6A3937] hover:bg-white'>GitHub</a>.

                  Occasionally, I<a 
                    href="https://medium.com/@prashansatanwar"  
                    target="_blank"
                    rel="noreferrer"
                    className='underline ml-1 px-1 hover:text-[#6A3937] hover:bg-white'>write</a>.
                </div>

                <div className='pt-4'>

                  When I'm not in front of a screen, you'll find me admiring or
                  <a 
                    href="https://www.instagram.com/ps_palette/"  
                    target="_blank"
                    rel="noreferrer"
                    className='underline ml-1 px-1 hover:text-[#6A3937] hover:bg-white'>creating art</a>. 

                  I also love to read, so feel free to send me any book suggestions!
                
                </div>


                <div className='mt-8 pt-2 border-t-4 border-double'>
                  <div className='font-medium'>Let's chat!</div>
                  
                  <div className='pt-1'> 
                    Email me at<a  
                    href="mailto:prashansatanwar@gmail.com"
                    target="_blank"
                    rel="noreferrer" className='underline cursor-pointer bg-[#385B94] px-1 mx-1'>prashansatanwar@gmail.com</a>or text me on <a  
                    href="https://twitter.com/prashansatanwar"
                    target="_blank"
                    rel="noreferrer" className='underline cursor-pointer bg-[#385B94] px-1 mx-1'>twitter</a>!
                  </div>
                </div>
                  
                  
                  

              </div>

            </div>
        </div>
      </div>



        {/* <div className='h-screen'>
          Prashansa in a nutshell.
        </div> */}
    </div>
  )
}

export default About