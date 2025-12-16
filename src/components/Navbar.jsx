import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdCancel } from "react-icons/md";



function Navbar() {
  const [nav, setNav] = useState(false);

  // Function to toggle the menu
  const handleClick = () => setNav(!nav);

  // Function to close menu when a link is clicked
  const closeMenu = () => setNav(false);

  const scrollToFooter = (e) => {
    e.preventDefault();
    setNav(false); 
  }


  return (
    <div className='fixed w-full h-20 bg-(--color-dark-page) flex justify-between items-center px-6 md:px-16 text-white shadow-md'>
        
        {/* Logo */}
        <a href='/' className='text-xl md:text-[1.5rem] font-semibold'>
          Hrushij.Dev
        </a>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className='hidden md:flex gap-10 text-[1.1rem]'>
              <NavLink to="/" className={({ isActive }) => 
              isActive
              ? "border-b-3 border-(--color-primary)"
              : "hover:text-gray-300"
              }>
                Home
              </NavLink>
            
              <NavLink to="/about" className={({ isActive }) => 
              isActive
              ? "border-b-3 border-(--color-primary)"
              : "hover:text-gray-300"
              }>
                About
              </NavLink>
            
              <NavLink to="/contact" className={({ isActive }) => 
              isActive
              ? "border-b-3 border-(--color-primary)"
              : "hover:text-gray-300"
              }>
                Contact
              </NavLink>
        </div>

        {/* Hamburger Icon (Visible on Mobile) */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer hover:text-blue-400 transition-colors'>
            {!nav ? <HiMenuAlt3 size={30} /> : <MdCancel size={30} />}
        </div>

        {/* Mobile Menu Overlay */}
        <div className={
            !nav 
            ? 'hidden' 
            : 'absolute top-0 left-0 w-full h-screen bg-black/95 flex flex-col justify-center items-center transition-all duration-300'
        }>
            <div className='flex flex-col gap-8 text-3xl font-semibold text-center'>
                  <NavLink to="/" className={({ isActive }) => 
                  isActive
                  ? "border-b-3 border-(--color-primary)"
                  : "hover:text-gray-300"
                  }>
                    Home
                  </NavLink>
                
                  <NavLink to="/about" className={({ isActive }) => 
                  isActive
                  ? "border-b-3 border-(--color-primary)"
                  : "hover:text-gray-300"
                  }>
                    About
                  </NavLink>
                
                  <NavLink to="/contact" className={({ isActive }) => 
                  isActive
                  ? "border-b-3 border-(--color-primary)"
                  : "hover:text-gray-300"
                  }>
                    Contact
                  </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar