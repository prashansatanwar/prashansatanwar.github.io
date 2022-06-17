import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import { courses,categories } from '../../data/resume/courses'

function Courses() {
	const [selected, setSelected] = useState("All");
    return (
        <div>
            <div className="flex flex-wrap">
                {categories.map((l, index) => (
                    <CategoryButton
                        key={index}
                        category={l}
                        selected={selected}
                        setSelected={setSelected}
                    />
                ))}
            </div>
            <div className='px-2 text-center'>
                {courses
                    .filter((l) => l.category.includes(selected))
                    .sort((a,b)=> (a.title<b.title)? 1:-1)
                    .sort((a,b)=>(a.sem>b.sem)? 1:-1)
                    .map((l, index) => (
                        
                        <a key={index} className='text-sm px-4  tracking-widest opacity-80 border-r-2 border-l-2 border-bgcolor dark:border-darkbgcolor' href={l.link} target='_blank' rel='noreferrer'> <span className='font-medium' >{l.code}</span> {l.title}</a>
                ))}
            
            </div>
        </div>
    )
}

export default Courses
