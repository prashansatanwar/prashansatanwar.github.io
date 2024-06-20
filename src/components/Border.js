import React from 'react'

function Border() {
  return (
    <div className='absolute h-screen w-full'>
        <div className='flex flex-col h-screen w-full absolute'>
            <div className='bg-[#F2E0BD] h-6 w-full'></div>
            <div className='bg-[#F2E0BD] h-6 w-full mt-auto'></div>
        </div>
        <div className='flex w-full absolute'>
            <div className='bg-[#F2E0BD] w-6 h-screen'></div>
            <div className='bg-[#F2E0BD] w-6 h-screen ml-auto'></div>
        </div>
    </div>
  )
}

export default Border