import React, { useState } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdMail } from "react-icons/md";

function Contact() {

    const[formData, setFormData] = useState({
        name : '',
        email : '',
        message : ''
    });

    const handleChange = (e) => {
        const {id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]:value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create mailto link
        const subject = `New Contact from ${formData.name}`;
        const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
        
        // Open default email client
        window.location.href = `mailto:hrushij92@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        
        // Optional: Reset form
        setFormData({ name: '', email: '', message: '' });
    };

  return (
    <div className="bg-black text-white min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 justify-between mt-10">
        
        {/* Left Side: Text & Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold uppercase mb-6 leading-tight">
            Let's connect
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
            I'm currently available for freelance work and open to full-time opportunities. 
            Whether you have a project idea, a question, or just want to say hi, 
            my inbox is always open!
          </p>
          
          <div className="flex flex-col gap-6">
             <a 
               href="mailto:hrushij92@gmail.com" 
               className="flex items-center gap-4 text-xl md:text-2xl hover:text-blue-400 transition-colors font-semibold group"
             >
               <div className="bg-gray-800 p-3 rounded-full group-hover:bg-gray-700 transition-all">
                 <MdMail className="text-blue-300" size={20} />
               </div>
               hrushij92@gmail.com
             </a>
             
             <div className='flex gap-6 mt-4'>
               <a 
                 href="https://www.linkedin.com/in/hrushikeshj26/" 
                 target="_blank"
                 rel="noreferrer"
                 className='bg-gray-800 p-4 rounded-full text-blue-300 hover:bg-gray-700 hover:scale-110 transition-all duration-300 shadow-lg'
               >
                 <FaLinkedinIn size={20} />
               </a>
               <a 
                 href="https://github.com/Hrushikeshj26" 
                 target="_blank"
                 rel="noreferrer"
                 className='bg-gray-800 p-4 rounded-full text-blue-300 hover:bg-gray-700 hover:scale-110 transition-all duration-300 shadow-lg'
               >
                 <FaGithub size={20} />
               </a>
             </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2 bg-zinc-900/50 p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-lg font-medium text-gray-300">Name</label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={handleChange} 
                placeholder="Enter your name"
                className="bg-zinc-800 border border-zinc-700 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg font-medium text-gray-300">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange} 
                placeholder="Enter your email"
                className="bg-zinc-800 border border-zinc-700 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 transition-all"
              />
            </div>

             <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-lg font-medium text-gray-300">Message</label>
              <textarea 
                id="message" 
                rows="5"
                value={formData.message}
                onChange={handleChange} 
                placeholder="Hi, I have a project idea..."
                className="bg-zinc-800 border border-zinc-700 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-500 resize-none transition-all"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="bg-blue-700 text-white font-bold text-lg py-4 rounded-full mt-4 hover:bg-blue-800 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-blue-900/20"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;