import React, {useEffect, useState} from 'react'

function ProjectCard({project}) {
    const [flip,setFlip] = useState(false);

    const [imageHeight, setImageHeight] = useState(0);

    useEffect(() => {
        const image = new Image();
        image.src = project.image;

        const handleImageLoad = () => {
            setImageHeight(image.height);
        };

        image.onload = handleImageLoad;

        return () => {
            image.onload = null;
        };
    }, [project.image]);

    return (
        <div className='m-1 rounded-lg overflow-hidden
                        shadow-lg hover:
                        bg-white' >

            <div className='h-32 bg-black overflow-hidden'>
                <img src={project.image} className='w-full'/>
            </div>

            <div className='border-t-4 border-[#7f5539] flex flex-col items-center'>
                
              <div className='h-0 w-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-[#7f5539]'>
                
              </div>


                <div className='px-8 py-2 '>

                    <div className='py-2 flex'>
                        <span className='font-medium text-lg'>{project.title}</span>
                        <span className='text-sm ml-auto opacity-70'>{project.date}</span>
                    </div>
                    <div className='px-2 pt-0 pb-4 text-sm text-left'>
                        {project.description}
                    </div>
                    <div className='py-2 text-xs flex text-left opacity-70'>
                        {project.tags.map((tag,ind) => (
                            tag!="All" && <span key={ind} className='pr-1'>{tag}</span>
                        ))}
                    </div>

                    <div className='py-2 flex text-sm'>
                        {project.github.length>0 && 
                            <a className='p-1 px-2 bg-gray-600 rounded-md text-white' href={project.github}>Github</a>
                        }
                        {project.link.length > 0 && 
                            <a className='ml-2 p-1 px-2 bg-purple-600 rounded-md text-white' href={project.link}>Website</a>
                        }
                        <div className='ml-auto p-1 px-2 bg-[#7f5539] hover:cursor-pointer rounded-md text-white'>Read More</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard