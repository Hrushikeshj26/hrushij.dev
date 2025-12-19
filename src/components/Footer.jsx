import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";

function Footer() {
 
  return (
    <div id='contact' className='dark:text-white max-w-7xl dark:bg-(--color-dark-page) bg-(--color-light-page) md:mx-auto mx-2 mb-10 px-2 md:px-20 h-80 flex items-center justify-center rounded-2xl shadow-lg shadow-blue-400 dark:shadow-blue-900'>
        <div className='w-full flex items-center justify-center flex-col gap-5'>
            <h2 className='uppercase font-bold text-2xl md:text-4xl md:pb-4'>let's connect</h2>
            <p className='md:text-lg text-sm dark:text-gray-200 text-center'>Let’s build something great together. Whether you have a project in mind, are looking for a dedicated developer, or simply want to connect and exchange ideas, I’m always open to new opportunities and conversations. Reach out anytime, and let’s create something that truly stands out.</p>
            <Link
                to="/contact"
                className="bg-(--color-primary) py-3 px-4 md:px-6 rounded-full text-white font-medium flex items-center gap-10
                            hover:bg-(--color-secondary) hover:scale-105 cursor-pointer transition-all duration-300 shadow-lg"
            >
                  CONTACT ME <GoDotFill className="text-sm" />
            </Link>
        </div>
    </div>
  )
}

export default Footer