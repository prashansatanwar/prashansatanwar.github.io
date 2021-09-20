import React from 'react'
import { projects } from '../../data/projects'
import Sidebar from '../Sidebar'

function Projects() {
    return (
        <div className="flex flex-grow z-10 justify-center font-raleway tracking-wide my-20 h-full w-full">
			<div
				className="flex flex-col lg:flex-row 
                                px-5 md:px-32 w-full 
                                justify-center"
			>
				<Sidebar />
				<div
					className="flex flex-col
                            lg:ml-10 p-5 lg:p-10 lg:w-3/4 
                            order-first lg:order-last 
                            bg-cardcolor "
				>
					<h1 className="tracking-widest uppercase font-extrabold text-3xl text-center py-4 border-b-2">
						Projects
					</h1>
					<br />
                    
                    <div className=''>

                        {projects.map((l,index)=>(
                            <div key={index} className='py-2'>
                                <div className='flex flex-col sm:flex-row py-1 sm:py-0 pl-2'>
                                    <div className='flex-grow font-semibold'>{l.title}</div>
                                    <div className='text-xs' style={{color:'#2E6F95'}}>{l.location}</div>
                                </div>
                                <div className='flex flex-col sm:flex-row py-1 sm:py-0 pl-2'>
                                    <div className='flex-grow text-xs opacity-50 font-semibold'>{l.team_size}</div>
                                    <div className='text-xs'>{l.start}-{l.end}</div>
                                </div>
                                <div className='pl-2 sm:px-6 text-sm w-4/5'>{l.description.split('\n').map(s => <p>{s}</p>)}</div>
                                
                            </div>
                        ))}
            
                    </div>

				</div>
			</div>
		</div>
    )
}

export default Projects
