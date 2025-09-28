import React, {useEffect, useState, useRef} from 'react'
import NavBar from '../components/NavBar'
import { projects as proj} from '../data/projects'
import ProjectGalleryCard from '../components/ProjectGalleryCard'

// Two views - gallery view and detailed view
function ProjectDetails() {
  const [view, setView] = useState("gallery"); 
  const searchRef = useRef(null); 
  const [searchClicked, setSearchClicked] = useState(false);
  const filterRef = useRef(null); 
  const [filterOpen, setFilterOpen] = useState(false);
  const [projects, setProjects] = useState(proj);
  
  const [searchQuery, setSearchQuery] = useState("");
  const searchQueryRef = useRef(searchQuery);
  useEffect(() => { searchQueryRef.current = searchQuery }, [searchQuery]);


  const allTags = [...new Set(proj.flatMap(p => p.tags))];
  const [selectedTags, setSelectedTags] = useState(["All"]);


  const monthMap = {
    January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
    July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
  };

  function parseMonthYear(str) {
    const [month, year] = str.split(" ");
    return new Date(parseInt(year), monthMap[month], 1); // day = 1
  }

  function setSortedProjects(list) {
    setProjects([...list].sort((a, b) => {
      return parseMonthYear(b.date) - parseMonthYear(a.date) // latest first
    }));
  }

  useEffect(() => {
    setSortedProjects(projects);
  }, [])


  function exists(tag, tags) {
        for (const tg of tags) {
            if (tg.toLowerCase() === tag.toLowerCase()) {
                return true;
            }
        }
        return false;
    }

  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilterOpen(false);
      }
    }

    function handleClickOutsideSearch(event) {
      if(searchRef.current && !searchRef.current.contains(event.target)) {
        if(!searchQueryRef.current) {
          setSearchClicked(false)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutsideSearch);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutsideSearch);
    };
  }, [filterRef, searchRef]);

function handleFilter(tag) {
  let updatedTags;

  if (tag === "All") {
    updatedTags = ["All"];
  } else {
    if (selectedTags.includes(tag)) {
      updatedTags = selectedTags.filter((t) => t !== tag);
    } else {
      updatedTags = [...selectedTags, tag];
    }

    if (updatedTags.includes("All")) {
      updatedTags = updatedTags.filter((t) => t !== "All");
    }
  }

  if (updatedTags.length === 0) {
    updatedTags = ["All"];
  }

  setSelectedTags(updatedTags);
  if (updatedTags.includes("All")) {
    setSortedProjects(proj);
  } else {
    const filtered = proj.filter((p) =>
      updatedTags.some((tag) => p.tags.includes(tag))
    );
    setSortedProjects(filtered);
  }
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    setSearchQuery(e.target.value);

    const filtered = proj.filter((p) => 
        p.title.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) || 
        p.tags.some((tag) => tag.toLowerCase().includes(query))
    );

    setSortedProjects(filtered);
}

function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}


  const debouncedHandleSearch = (e) => { 
    debounce(handleSearch(e), 200)
  }


  return (
    <>
      <NavBar currentId={1}/>
      <div className='min-h-screen w-full flex flex-col text-primary2'>
        <div className='pt-[22%] md:pt-[11%] lg:pt-[8%] pb-12 flex flex-col items-center'>
          <div className='w-full text-secondary flex flex-col gap-2'>
              <h1 className='font-bold text-3xl md:text-5xl italic'>/projects</h1>
          </div>
        </div>

        {/* views */}
        <div className='px-20 sm:px-28 lg:px-48'>
          <div className='flex overflow-auto'>
            <span className='flex gap-2'>
              <button className={`flex justify-center items-center gap-1 py-1 px-2 rounded-lg ${view === 'gallery' ? 'bg-black/20 hover:bg-black/30' : 'hover:bg-black/20'} `} onClick={() => setView("gallery")}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
                  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
                </svg>
                <p>
                  Gallery
                </p>
              </button>
              <button className={`flex justify-center items-center gap-1 py-1 px-2 rounded-lg  ${view === 'details' ? 'bg-black/20 hover:bg-black/30' : 'hover:bg-black/20'}`} onClick={() => setView("details")}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z"/>
                </svg>
                <p>
                  Details
                </p>
              </button>
            </span>

            <span className='ml-auto flex'>
              {/* <button>
                sort by
              </button> */}
              <button className={`flex justify-center items-center py-1 px-2 rounded-lg  ${filterOpen || (selectedTags.length > 0 && !selectedTags.includes('All')) ? 'bg-black/20 hover:bg-black/30' : 'hover:bg-black/20'}`} onClick={() => setFilterOpen(!filterOpen)}>
                {/* filter */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
                  <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
                </svg>
              </button>

              {filterOpen &&
                <div ref={filterRef} className='absolute z-10 mt-10 right-32 bg-secondary text-primary rounded-md p-4 flex flex-col gap-2 shadow-md shadow-black/20'>
                  <p className='font-bold'>Filter by:</p>
                  <div className='flex flex-wrap gap-2 max-w-xs'>
                    {allTags.map((tag, ind) => (
                      <button 
                        key={ind}
                        className={`rounded-full p-1 px-2 ${exists(tag, selectedTags) ? "font-bold bg-primary text-secondary" : "font-medium bg-secondary text-primary  hover:scale-105 hover:bg-black/10 transition-all duration-150 ease-in-out " }`}
                        onClick={() => handleFilter(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              }


              <button className='ml-1 flex justify-center items-center'>
                {/* search */}
                <div className={`py-2 px-2 h-full w-full  hover:bg-black/20 ${searchClicked ? 'bg-black/20 rounded-l-lg':'rounded-lg'}`} onClick={() => setSearchClicked(!searchClicked)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg>
                </div>
                <div className="relative flex items-center">
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        searchClicked ? 'w-36 pl-2 bg-black/10 rounded-r-lg' : 'w-0'
                      }`}
                    >
                      <input
                        ref={searchRef}
                        type="text"
                        value={searchQuery}
                        placeholder="Type to search..."
                        onChange={(e) => debouncedHandleSearch(e)}
                        className="w-full px-2 py-1 bg-transparent outline-none"
                      />
                    </div>
                    </div>

              </button>
            </span>
          </div>

          <div className='m-5 md:m-10'>

            {view === "gallery" 
              ? <div className={`xl:mx-20 lg:my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4`}>
                  {projects?.map((p, k) => (
                    <ProjectGalleryCard key={k} project={p}/>
                  ))}
                </div>

              : <div className=''> 
                  <table className='w-full'>
                    <thead className='border-b-2 border-black/20'>
                      <tr className='text-left text-sm text-secondary opacity-70'>
                        <th className='p-2'>Year</th>
                        <th className='p-2'>Project</th>
                        <th className='p-2'>Description</th>
                        <th className='p-2'>Technologies</th>
                        <th className='p-2'>Links</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects?.map((p, k) => (
                        <tr key={k} className='border-b border-black/10 hover:bg-black/10 transition-colors duration-200 ease-in-out text-xs sm:text-sm'>
                          <td className='p-2 '> {p.date} </td>
                          <td className='p-2 font-bold'> {p.title} </td>
                          <td className='p-2 max-w-xs text-left'> {p.description} </td>
                          <td className="p-2 max-w-xs ">
                            <div className="flex flex-wrap gap-2">
                              {p.tags.map(
                                (tag, ind) =>
                                  tag !== "All" && tag !== "Game" && (
                                    <span
                                      key={ind}
                                      className="rounded-full bg-secondary text-primary p-1 px-2 font-bold break-words"
                                    >
                                      {tag}
                                    </span>
                                  )
                              )}
                            </div>
                          </td>
                          <td className='p-2 text-sm'>
                            <span className='flex gap-2 items-left'>
                              {p.github.length>0 && 
                                <a className='p-1 px-2 bg-gray-600 rounded text-white hover:cursor-pointer' href={p.github} target="_blank">Github</a>
                              }
                              {p.link.length > 0 && 
                                <a className='p-1 px-2 bg-purple-600 rounded text-white hover:cursor-pointer' href={p.link} target="_blank">Website</a>
                              }
                              {p.blog.length > 0 && 
                                <a className='p-1 px-2 bg-[#7f5539] hover:cursor-pointer rounded text-white' href={p.blog} target="_blank">Read More</a>
                              }
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails