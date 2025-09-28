import React, {useEffect, useState} from 'react'

function ProjectGalleryCard({project}) {
    const [animateIn, setAnimateIn] = useState(false)
    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        if (zoom) {
            document.body.style.overflow = "hidden"
            setTimeout(() => setAnimateIn(true), 10)
        } else {
            setAnimateIn(false)
            document.body.style.overflow = "auto"
        }

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [zoom])

  return (
        <>
            <div className={`lg:h-full aspect-square bg-secondary rounded-md p-4 text-primary flex flex-col text-sm md:text-base
                                hover:scale-[1.02] hover:shadow-md hover:shadow-black/20 transition-all duration-200 ease-in-out cursor-pointer
                                `}
                onClick={() => setZoom(true)}
            >
                <div className='h-[70%]'>
                    <img className='h-full w-full object-cover rounded-md' src={project.image} />
                </div>
                <div className='p-2 text-center font-medium lg:text-lg m-auto'>
                    {project.title}
                </div>
            </div>
            
            {zoom &&
                <div className={`fixed inset-0 z-10 flex items-center justify-center 
                    transition-opacity duration-300 bg-black/20 backdrop-blur-sm
                    ${animateIn ? 'opacity-100' : 'opacity-40'}`} 
                onClick={() => setZoom(false)}
                >

                <div
                    className={`bg-secondary rounded-md p-1 md:p-4 text-primary flex flex-col h-[20%] sm:h-[30%] md:h-[40%] aspect-square
                                transition-transform transform transition-all duration-500 ease-in-out
                                cursor-auto
                                ${animateIn ? 'scale-150' : 'scale-40'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='flex '>
                        <p className='ml-auto cursor-pointer' onClick={() => setZoom(false)}> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                            </svg>  
                        </p>
                    </div>

                    <div className='flex flex-col gap-1 md:gap-4 items-left w-full h-full '>
                        <p className='font-bold text-xs sm:text-md md:text-xl'> {project.title} </p>
                        <p className='text-[0.4rem] sm:text-xs md:text-sm flex-grow overflow-y-auto'> {project.description} </p>
                        <p className='py-2 flex text-[0.5rem] sm:text-xs md:text-sm'>
                            {project.github.length>0 && 
                                <a className='p-1 px-2 bg-gray-600 rounded text-white' href={project.github} target="_blank">Github</a>
                            }
                            {project.link.length > 0 && 
                                <a className='ml-2 p-1 px-2 bg-purple-600 rounded text-white' href={project.link} target="_blank">Website</a>
                            }
                            {project.blog.length > 0 && 
                                <a className='ml-auto p-1 px-2 bg-[#7f5539] hover:cursor-pointer rounded text-white' href={project.blog} target="_blank">Read More</a>
                            }
                        </p>
                         <p className='py-2 text-[0.5rem] md:text-xs flex text-left opacity-70 font-bold'>
                            {project.tags.map((tag,ind) => (
                                tag!="All" && <span key={ind} className='pr-1'>#{tag}</span>
                            ))}
                        </p>
                    </div>
                </div>
                </div>
            }
        
        </>
    )
}



export default ProjectGalleryCard;