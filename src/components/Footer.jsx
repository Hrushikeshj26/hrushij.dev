import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className='text-white max-w-7xl mx-auto flex gap-5'>
        <div className='pt-15'>
            <h2 className='uppercase font-semibold text-5xl pb-4'>let's connect</h2>
            <p className='text-lg w-full'>Let's build something great together. Reach out if you're looking for a developer, have a query, or simply want to connect.</p>
            <div className='w-45 flex gap-2 my-5'>
                <a
                href="https://www.linkedin.com/in/your-linkedin-profile/" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className='bg-gray-800 py-3 px-3 rounded-full text-[#D3E97A] text-2xl font-semibold flex items-center justify-center hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg'>
                    <FaLinkedinIn />
                </a>
                <a
                    href="https://github.com/your-github-profile" // Replace with your GitHub URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className='bg-gray-800 py-3 px-3 rounded-full text-[#D3E97A] text-2xl font-semibold flex items-center justify-center hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg'>
                        <FaGithub />
                </a>
                <a
                href="https://www.linkedin.com/in/your-linkedin-profile/" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className='bg-gray-800 py-3 px-3 rounded-full text-[#D3E97A] text-2xl font-semibold flex items-center justify-center hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg'>
                    <FaLinkedinIn />
                </a>
                <a
                    href="https://github.com/your-github-profile" // Replace with your GitHub URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className='bg-gray-800 py-3 px-3 rounded-full text-[#D3E97A] text-2xl font-semibold flex items-center justify-center hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg'>
                        <FaGithub />
                </a>
            </div>
            <p className='h-30 flex items-end'>@2025 made by hrushikesh</p>
        </div>
        <form action=""
        className='flex flex-col w-1/2 p-8 gap-1'
        >
            <label htmlFor="">Name</label>
            <input type="text"
            placeholder='your name' 
            className='p-2 bg-gray-800 rounded mb-2'
            />
            <label htmlFor="">Email</label>
            <input type="email"
            placeholder='your email'
            className='p-2 bg-gray-800 rounded mb-2' 
            />
            <label htmlFor="">Subject</label>
            <input type="text" 
            className='p-2 bg-gray-800 rounded mb-2'
            />
            <label htmlFor="">Message</label>
            <input type='text'
            className='p-2 bg-gray-800 rounded mb-2' 
            />
            <button
              className='bg-[#D3E97A] py-3 px-6 rounded-full text-black font-semibold flex items-center gap-10
                         hover:bg-[#c2d96c] hover:scale-105 cursor-pointer transition-all duration-300 shadow-lg w-35 justify-center'
            >Submit</button>
        </form>
    </div>
  )
}

export default Contact