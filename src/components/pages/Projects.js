import React from 'react'
import { projects } from '../../data/projects'
import Sidebar from '../Sidebar'

function Projects() {
    return (
        <div className="flex flex-grow 
					z-10 py-20 min-h-screen min-w-screen
					justify-center 
					font-raleway tracking-wide text-textcolor dark:text-darktextcolor
					">
			<div
				className="flex flex-col lg:flex-row 
                            z-10 px-5 md:px-32 w-full 
                                justify-center"
			>
				<Sidebar />
				<div
					className="flex flex-col
                            lg:ml-10 p-5 lg:p-10 lg:w-3/4 
                            order-first lg:order-last 
                            bg-cardcolor dark:bg-darkcardcolor
                            rounded-md "
				>
					<h1 className="tracking-widest uppercase font-extrabold text-4xl text-center py-4 border-b-2">
						Projects
					</h1>
					<br />
                    
                    <div className=''>

                        {projects.map((l,index)=>(
                            <div key={index} className='py-2'>
                                <div className='flex flex-col sm:flex-row py-1 sm:py-0 pl-2'>
                                    <div className='flex-grow font-semibold'>{l.title}</div>
                                    <div className='text-xs text-locationcolor dark:text-darklocationcolor'>{l.location}</div>
                                </div>
                                <div className='flex flex-col sm:flex-row py-1 sm:py-0 pl-2'>
                                    <div className='flex-grow text-xs opacity-50 font-semibold'>{l.team_size}</div>
                                    <div className='text-xs'>{l.start}-{l.end}</div>
                                </div>
                                <div className='pl-2 sm:px-6 text-sm w-4/5'>{l.description.split('\n').map((s,ind) => <p key={ind}>{s}</p>)}</div>
                                <a href={l.link} className='pl-6 text-xs text-hovercolor dark:text-darkhovercolor underline' target='_blank' rel='noreferrer'>{l.text}</a>
                            </div>
                        ))}
            
                    </div>

				</div>
			</div>
		</div>
    )
}

export default Projects
