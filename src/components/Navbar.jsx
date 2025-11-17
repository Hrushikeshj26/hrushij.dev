import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-20 bg-black flex items-center px-15 text-white'>
        <h1 className='w-full text-[1.6rem] font-bold '>Hrushij.Dev</h1>
        <div className='w-full text-lg flex gap-10 list-none font-medium justify-end'>
            <li>WORK</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </div>
    </div>
  )
}

export default Navbar