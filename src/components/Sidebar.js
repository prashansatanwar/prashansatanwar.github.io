import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { social_links } from './routes'

function Sidebar() {
    return (
        <div className='order-last lg:order-first mt-20 lg-mt-0 min-w-1/4 pr-20 justify-center items-center font-raleway font-normal tracking-wide '>
            <div className="rounded-full bg-center bg-contain bg-img 
                            h-44 w-44 
                            hover:shadow-2xl">
            </div>

            <div className='py-10'>
                <div className='pb-1 text-lg md:text-xl lg:text-3xl font-bold'>
                    PRASHANSA TANWAR
                </div>
                <a href='mailto:prashansatanwar@gmail.com' className='break-words text-sm md:text-base'>prashansatanwar@gmail.com</a>
            </div>
            
            <hr/>

            <div className='py-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum vitae laboriosam vel ab deserunt ullam veniam quisquam porro aliquam minima reprehenderit autem animi incidunt officiis quaerat, facilis itaque dolores iure!
            </div>

            <hr/>

            <div className='py-5 pb-16'>
            <div className='inline-flex h-full w-full'>
                  {social_links.filter((l) => !l.index).map((l,index) => (
                    <a href={l.path} target='_blank' rel="noreferrer" key={index} className='hover:text-hovercolor'><FontAwesomeIcon icon = {l.icon} size='sm' className="rounded-full mx-2"/></a>
                  ))}
                  {social_links.filter((l) => l.index).map((l,index) => (
                    <a href={l.path} target='' download='prashansatanwar_resume' key={index} className='hover:text-hovercolor'><FontAwesomeIcon icon = {l.icon} size='sm' className="rounded-full mx-2"/></a>
                  ))}
              </div>
            </div>

        
        </div>
    )
}

export default Sidebar
