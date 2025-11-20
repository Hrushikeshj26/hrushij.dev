import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  // 1. State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 2. Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // 3. Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // This creates a mailto link with the form data
    const mailtoLink = `mailto:hrushij92@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    
    // Opens the user's default email client
    window.location.href = mailtoLink;
    
    // Optional: Clear form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div id='contact' className='text-white max-w-7xl mx-auto flex md:gap-5 md:flex-row flex-col p-4'>
        <div className='pt-15'>
            <h2 className='uppercase font-semibold text-4xl md:text-5xl pb-4'>let's connect</h2>
            <p className='text-lg w-full'>Let's build something great together. Reach out if you're looking for a developer, have a query, or simply want to connect.</p>
            <div className='w-45 flex gap-2 my-5'>
                <a
                href="https://www.linkedin.com/in/hrushikeshj26/" 
                target="_blank"
                rel="noopener noreferrer"
                className='bg-gray-800 py-3 px-3 rounded-full text-blue-300 hover:text-white text-2xl font-semibold flex items-center justify-center hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg'>
                    <FaLinkedinIn />
                </a>
                <a
                    href="https://github.com/Hrushikeshj26" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='bg-gray-800 py-3 px-3 rounded-full text-blue-300 hover:text-white text-2xl font-semibold flex items-center justify-center hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg'>
                        <FaGithub />
                </a>
                <a
                href="https://www.linkedin.com/in/hrushikeshj26/" 
                target="_blank"
                rel="noopener noreferrer"
                className='bg-gray-800 py-3 px-3 rounded-full text-blue-300 hover:text-white text-2xl font-semibold flex items-center justify-center hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg'>
                    <FaLinkedinIn />
                </a>
                <a
                    href="https://github.com/Hrushikeshj26" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='bg-gray-800 py-3 px-3 rounded-full text-blue-300 hover:text-white text-2xl font-semibold flex items-center justify-center hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg'>
                        <FaGithub />
                </a>
            </div>
        </div>
        
        <form onSubmit={handleSubmit} className='flex flex-col md:w-1/2 p-8 gap-1'>
            <label htmlFor="name">Name</label>
            <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='your name' 
                className='p-2 bg-gray-800 rounded mb-2'
                required
            />
            
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='your email'
                className='p-2 bg-gray-800 rounded mb-2' 
                required
            />
            
            <label htmlFor="subject">Subject</label>
            <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className='p-2 bg-gray-800 rounded mb-2'
                required
            />
            
            <label htmlFor="message">Message</label>
            <textarea 
                type='text'
                name="message"
                value={formData.message}
                onChange={handleChange}
                className='p-2 bg-gray-800 rounded mb-2' 
                required
            />
            
            <button
                type="submit"
                className='bg-blue-700 py-3 px-6 rounded-full text-white font-medium flex items-center gap-10
                            hover:bg-blue-800 hover:scale-105 cursor-pointer transition-all duration-300 shadow-lg w-35 justify-center'
            >Submit</button>
        </form>
    </div>
  )
}

export default Footer