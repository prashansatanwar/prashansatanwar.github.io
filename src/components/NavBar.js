import React, { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom'


function NavBar({currentId}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

   console.log(location)

  return (
    <nav className={`h-24 fixed z-10 w-full flex p-2 px-8 text-secondary font-medium ${location.pathname.includes("projects") || location.pathname.includes("about") ? 'h-[6%] sm:h-14 backdrop-blur' :''}`}>
        
        <Link to={'/'} className={`font-extrabold p-2 transition-colors ease-in-out duration-300 ${currentId%2 === 0 ? "text-primary" : "text-secondary"}`}>
            {">_"}
        </Link>

        <div id='menu' className={`ml-auto w-[13rem] h-0 right-4 p-4 flex flex-col items-end transition-all duration-300 ease-in-out rounded-md
                            ${menuOpen 
                                ? currentId%2 === 0 
                                    ?  'bg-primary' 
                                    : 'bg-secondary' 
                                : ''
                            }
                            ${menuOpen ? 'shadow-sm h-[15rem]' : ''}
                            `}>
            <div className='flex flex-col items-end cursor-pointer'
                onClick={() => setMenuOpen(!menuOpen)}>

                <div id='line1' className={`h-1 w-4 border-t-2 transition-transform transform origin-center duration-300 delay-75
                                            ${!menuOpen 
                                                ? currentId%2 === 0 
                                                    ?  'border-primary' 
                                                    : 'border-secondary' 
                                                : currentId%2 === 0 
                                                    ?  'border-secondary' 
                                                    : 'border-primary' 
                                            }
                                            ${menuOpen ? 'scale-x-150 -rotate-45 translate-y-2' : '' }`}></div>
                <div id='line2' className={`h-1 w-8 border-t-2 mt-2 transition-transform transform origin-center duration-300 delay-0
                                            ${!menuOpen 
                                                ? currentId%2 === 0 
                                                    ?  'border-primary' 
                                                    : 'border-secondary' 
                                                : currentId%2 === 0 
                                                    ?  'border-secondary' 
                                                    : 'border-primary' 
                                            }
                                            ${menuOpen ? 'scale-x-75 translate-x-2 -translate-y-1 rotate-45' : '' }`}></div>
            </div>
            
            
            <div className={`
                    top-[4rem] p-4 flex flex-col gap-2 w-full items-start transition-all duration-150 ease-in-out
                    ${menuOpen 
                        ? 'opacity-100 -translate-y-0 ' 
                        : 'opacity-0 translate-y-4 pointer-events-none hidden'}`}
            >
                {location.pathname !== "/" && (
                        <Link to={"/"} className={`${currentId%2 === 0 || !menuOpen ? "text-secondary" : "text-primary"}`}>
                            Home
                        </Link>
                )}
                
                {location.pathname !== "/projects" && (
                    <Link to={"/projects"} className={`${currentId%2 === 0 || !menuOpen ? "text-secondary" : "text-primary"}`}>
                        Projects
                    </Link>
                )}

                {location.pathname !== "/about" && (
                        <Link to={'/about'} className={`${currentId%2 === 0 || !menuOpen ? "text-secondary" : "text-primary"}`}>
                            About 
                        </Link>
                )}
                
                <div className={`my-4 ${currentId%2 === 0 || !menuOpen ? "text-secondary" : "text-primary"} flex flex-col items-start gap-2`}>
                   <p className='uppercase opacity-40'> say hello </p>
                    <a
                            href='mailto:prashansatanwar@gmail.com'
                            target="_blank"
                            rel="noreferrer"
                            className='cursor-pointer'
                        >hello@gmail.com</a>
                </div>
            </div>
                
        </div>




    </nav>
  )
}

export default NavBar