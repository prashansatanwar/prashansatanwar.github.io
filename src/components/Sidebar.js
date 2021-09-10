import React from 'react'

function Sidebar() {
    return (
        <div className='min-w-1/4 pr-20 justify-center items-center font-raleway font-normal tracking-wide '>
            <div className="rounded-full bg-center bg-contain bg-img 
                            h-44 w-44 md:h-32 md:w-32 lg:h-44 lg:w-44
                            hover:shadow-2xl">
            </div>

            <div className='py-10'>
                <div className='pb-1 text-2xl font-bold'>
                    PRASHANSA TANWAR
                </div>
                <a href='mailto:prashansatanwar@gmail.com'>prashansatanwar@gmail.com</a>
            </div>
            
            <hr/>

            <div className='py-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum vitae laboriosam vel ab deserunt ullam veniam quisquam porro aliquam minima reprehenderit autem animi incidunt officiis quaerat, facilis itaque dolores iure!
            </div>

            <hr/>

            <div className='py-2'>
                social media
            </div>

        
        </div>
    )
}

export default Sidebar
