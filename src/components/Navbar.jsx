import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className='fixed w-full h-20 bg-(--navbar) flex justify-between items-center px-6 md:px-16 text-white z-50 shadow-md'>
        
        {/* Logo */}
        <a href='/' className='text-2xl md:text-[1.6rem] font-bold z-10'>
          Hrushij.Dev
        </a>

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className='hidden md:flex gap-10 font-medium text-xl'>
            <li>
              <Link to="/" className="cursor-pointer hover:text-(--primary-foreground-2) transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="cursor-pointer hover:text-(--primary-foreground-2) transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-(--primary-foreground-2) transition-colors">Contact</Link>
            </li>
        </ul>

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
            <ul className='flex flex-col gap-8 text-3xl font-semibold text-center'>
                <li>
                  <Link to="/" onClick={closeMenu} className="hover:text-blue-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={closeMenu} className="hover:text-blue-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={closeMenu} className="hover:text-blue-400 transition-colors">
                    Contact
                  </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar