import React, { useEffect, useState } from 'react'
import ClusteredTags from '../components/ClusteredTags';

function Skills() {
  const [winH, setWinH] = useState(window.innerHeight);
  const [winW, setWinW] = useState(window.innerWidth);

  useEffect(() => {
    if(window.innerHeight) setWinH(window.innerHeight);
    if(window.innerWidth) setWinW(window.innerWidth);
  }, [window.innerHeight, window.innerWidth])

  return (
    <div className='h-[100%] px-10 lg:py-28 pt-[26%] sm:pt-[12%] lg:pt-[8%] w-full flex flex-col md:flex-row bg-primary2 text-primary'>
      
      {/* For screen size >= md */}
        <div className='w-2/5 flex flex-col items-left text-left h-full hidden md:block'>
          <p className='text-xs text-accent2 font-medium md:text-sm italic flex items-center'> 
            {`<body>`}
            <div className='w-2/3 h-3 ml-2 rounded-sm
                            bg-gradient-to-r from-gray-400 to-gray-500'></div>
            <div className='w-1/3 h-3 ml-4 rounded-sm
            bg-gradient-to-r to-[#6792A7] from-accent2'></div>
          </p>

          <p className='pl-8 pb-2 text-xs text-accent3 font-medium md:text-sm italic flex items-center'>
            {`<h1>`}
            <div className='w-4/5 h-3 ml-2 rounded-sm
                            bg-gradient-to-r to-[#B69EB4]  from-accent3'></div>
          </p>
          <p className='text-5xl pl-16 font-bold py-6'>  
              Skills in practice.
          </p>
          <p className='pl-8 pt-6 text-xs text-accent3 font-medium md:text-sm italic flex items-center'>  
            {`</h1>`}
            <div className='w-2/5 h-3 ml-2 rounded-sm
                            bg-gradient-to-r to-[#B69EB4]  from-accent3'></div>
            <div className='w-1/5 h-3 ml-2 rounded-sm
            bg-gradient-to-r from-gray-500 to-gray-500'></div>
            </p>

          <p className='pl-8 pb-2 text-xs text-[#BF6B4A] font-medium md:text-sm italic flex items-center'>
            {`<p>`}
            <div className='w-3/6 h-3 ml-5 rounded-sm
            bg-gradient-to-r from-[#BF6B4A] to-gray-500'></div>
            </p>
          <p className='text-xl pl-16 py-6 lg:py-10 tracking-wider'>
           Learning is my default mode. I dabble into too many things at once and manage to enjoy the chaos. Outside work, I'm usually exploring something new just for the thrill of it. 
          </p>
          <p className='pl-8 pt-6 lg:pt-16 text-xs text-[#BF6B4A] font-medium md:text-sm italic flex items-center'> 
            {`</p>`}
            <div className='w-4/6 h-3 ml-2 rounded-sm
                            bg-gradient-to-r to-[#BF6B4A]  from-[#BF6B4A]'></div>
          </p>

          <p className='text-xs text-accent2 font-medium md:text-sm italic flex items-center'>
            {`</body>`}
            <div className='w-2/6 h-3 ml-2 rounded-sm
                            bg-gradient-to-r from-gray-400 to-gray-500'></div>
            <div className='w-1/6 h-3 ml-4 rounded-sm
            bg-gradient-to-r to-[#6792A7]  from-accent2'></div>
          </p>
        </div>

      {/* For screen size < md */}
        <div className='h-3/5 w-full md:hidden text-sm flex flex-col text-left sm:overflow-y-auto'>

          <p className='text-xs text-accent2 font-medium italic flex items-center'> 
            {`<body>`}
            <div className='w-2/3 h-3 ml-2 rounded-sm
                            bg-gradient-to-r from-gray-400 to-gray-500'></div>
            <div className='w-1/3 h-3 ml-4 rounded-sm
            bg-gradient-to-r to-[#6792A7] from-accent2'></div>
          </p>

          <p className='pb-2 text-accent3 font-medium italic flex items-center'>
            {`<h1>`}
            <div className='w-4/5 h-3 ml-2 rounded-sm
                            bg-gradient-to-r to-[#B69EB4]  from-accent3'></div>
          </p>
          <p className='text-xl sm:text-2xl pl-8 font-bold py-2'>  
              Skills in practice.
          </p>
          <p className='pt-6 text-accent3 font-medium italic flex items-center'>  
            {`</h1>`}
            <div className='w-2/5 h-3 ml-2 rounded-sm
                            bg-gradient-to-r to-[#B69EB4]  from-accent3'></div>
            <div className='w-1/5 h-3 ml-2 rounded-sm
            bg-gradient-to-r from-gray-500 to-gray-500'></div>
          </p>

          <p className='pb-2 text-[#BF6B4A] font-medium italic flex items-center'>
            {`<p>`}
            <div className='w-3/6 h-3 ml-5 rounded-sm
            bg-gradient-to-r from-[#BF6B4A] to-gray-500'></div>
            </p>
          <p className='text-md sm:text-lg pl-8 py-2 tracking-wider'>
           Learning is my default mode. I dabble into too many things at once and manage to enjoy the chaos. Outside work, I'm usually exploring something new just for the thrill of it. 
          </p>
          <p className='pt-4 text-[#BF6B4A] font-medium italic flex items-center'> 
            {`</p>`}
            <div className='w-4/6 h-3 ml-2 rounded-sm
                            bg-gradient-to-r to-[#BF6B4A]  from-[#BF6B4A]'></div>
          </p>
          <p className='text-xs text-accent2 font-medium italic flex items-center'>
            {`</body>`}
            <div className='w-2/6 h-3 ml-2 rounded-sm
                            bg-gradient-to-r from-gray-400 to-gray-500'></div>
            <div className='w-1/6 h-3 ml-4 rounded-sm
            bg-gradient-to-r to-[#6792A7]  from-accent2'></div>
          </p>
        </div>

        <div className='mx-4 w-3/5 italic tracking-widest text-secondary2 hidden lg:block'>
          <ClusteredTags containerHeight={winH-150} containerWidth={600}/>
        </div>

        <div className='mx-4 w-3/5 italic tracking-widest text-secondary2 hidden md:block lg:hidden'>
          <ClusteredTags containerHeight={winH-150} containerWidth={400}/>
        </div>

        <div className='mx-4 mt-10 h-2/5 italic tracking-widest text-secondary2 md:hidden'>
          <ClusteredTags containerHeight={100} containerWidth={winW-100}/>
        </div>

    </div>
  )
}

export default Skills