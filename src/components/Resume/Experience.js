import React from 'react'
import { experience } from '../../data/resume/experience'

function Experience() {
    return (
        <div>
            {experience.map((l,index)=>(
                <div key={index} className='py-2'>
                    <div className='flex flex-col sm:flex-row py-1 sm:py-0 pl-2'>
                        <div className='flex-grow font-semibold'>{l.title}</div>
                        <div className='text-xs' style={{color:'#2E6F95'}}>{l.location}</div>
                    </div>
                    <div className='flex flex-col sm:flex-row py-1 sm:py-0 pl-2'>
                        <div className='flex-grow text-xs opacity-50 font-semibold'>{l.designation}</div>
                        <div className='text-xs'>{l.start}-{l.end}</div>
                    </div>
                    <div className='pl-2 sm:pl-6 text-sm w-4/5'>{l.description.split('\n').map(s => <p>{s}</p>)}</div>
                </div>
            ))}
        </div>
    )
}

export default Experience
