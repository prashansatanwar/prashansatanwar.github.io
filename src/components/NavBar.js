import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <nav className='h-12 fixed z-10 w-full flex p-4 px-8 text-[#F2E0BD] bg-[#507255] font-medium text-lg'>
        <Link to={'/'} className=''>
            {"<_"}
        </Link>
        <div className='ml-auto flex'>
            <Link to={"/projects"} className='mx-4'>
                Projects
            </Link>
            <Link to={'/about'} className=''>
                About 
            </Link>
        </div>

    </nav>
  )
}

export default NavBar