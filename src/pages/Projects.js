import React, { useEffect, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { RevealOnScroll } from '../components/RevealOnScroll'



function Projects() {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState(["All"]);
    const [inputTags, setInputTags] = useState([]);
    const [drop, setDrop] = useState(false);

    useEffect(() => {
        let newTags = new Set();
        projects.map((project) => (
            project.tags.map((tag) => (
                newTags.add(tag)
            ))
        ))
        setTags(newTags);
    }, [filteredProjects,projects])
    

    function filter(t) {
        let updatedTags;
        if(t === "All") {
            updatedTags = ["All"];
        }
        else {
            if(selectedTags.includes(t)) {
                updatedTags = selectedTags.filter((tg) => tg !== t)
            }
            else {
                updatedTags = [...selectedTags, t];
            }

            if(updatedTags.includes("All")) {
                updatedTags = updatedTags.filter((tg) => tg !== "All")
            }
        }

        if(updatedTags.length === 0) {
            updatedTags = ["All"]
        }
        setSelectedTags(updatedTags);

        let updatedProjects = new Set();
        updatedTags.map((tg) => (
            projects.map((project) => (
                tg.length>0 && project.tags.includes(tg) && updatedProjects.add(project)
            ))
        ))
        console.log(selectedTags)

        setFilteredProjects(Array.from(updatedProjects))
        if(updatedTags.length === 1 && updatedTags[0] == "All") {
            document.getElementById('input-tags').value ='';
        }
        else {   
            document.getElementById('input-tags').value = updatedTags.join(" ");
        }

    }

    function handleInputKeyPress(event) {
        if (event.key === 'Enter') {
            let input = event.target.value.trim();
            let inTags = [];
            Array.from(input.split(" ")).map((tg) => {
                inTags.push(tg)
            })

            if(input.length === 0) {
                inTags.push("All");
            }
            let updatedProjects = new Set();
            inTags.map((tg) => (
                projects.map((project) => (
                    tg.length>0 && exists(tg, project.tags) && updatedProjects.add(project)
                ))
            ))
            setFilteredProjects(Array.from(updatedProjects))
            setSelectedTags(inTags)
        }
    }

    function exists(tag, tags) {
        for (const tg of tags) {
            if (tg.toLowerCase() === tag.toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    function handleButtonClick() {
        const enterKeyPressEvent = {
            key: 'Enter',
            target: {
                value: document.getElementById('input-tags').value.trim()
            }
        };
        handleInputKeyPress(enterKeyPressEvent);
    }

    return (
        <div className='p-4 min-h-screen w-full flex flex-col'>
            <div className='p-4 text-left font-bold text-8xl'>
                Projects.
            </div>

            <div className='flex p-2 px-4'>
                <div className='flex-grow flex bg-[#FEFAE0] p-2 rounded-md'>
                    <input id='input-tags' className='flex-grow' placeholder='Search...'
                            onKeyPress={handleInputKeyPress}/>
                    <div className='flex items-center hover:cursor-pointer hover:text-blue-800' onClick={handleButtonClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search h-4" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>
                </div>
                <div className='ml-2 flex items-center hover:cursor-pointer hover:text-blue-800' onClick={() => setDrop(!drop)} >
                    {drop
                        ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-up-fill h-6" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                        </svg>
                        : 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill h-6" viewBox="0 0 16 16">
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>
                    }
                    
                </div>
            </div>

            <div className='flex flex-wrap px-4 max-h-[8em] overflow-y-auto'>
                {drop &&  Array.from(tags).map((tag, ind) => (
                    <div key={ind} className={`p-1 px-2 mx-1 mb-1 rounded-md text-white hover:cursor-pointer flex ${exists(tag, selectedTags) ? "bg-[#7f5539]" : "bg-[#6b705c]" }`} onClick={() => filter(tag)}>
                        {tag}
                    </div>
                ))}


                
            </div>

           {filteredProjects.length>0
            ?
            <div className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2 p-4'>
                {filteredProjects.toReversed().map((project,ind) => (
                    <div className='overflow-hidden' key={ind}>
                        <RevealOnScroll ind={ind}>
                            <ProjectCard project={project} />
                        </RevealOnScroll>
                    </div>
                ))}
            </div>
            :
            <div className='flex justify-center p-4'>
                <img src='assets/images/think.png' className=''></img>
            </div>
           } 

            


        </div>
    )
}

export default Projects