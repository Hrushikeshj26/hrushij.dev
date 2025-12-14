import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function About() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Tailwind CSS", "GSAP", "Framer Motion", "Bootstrap"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Figma", "Chrome DevTools", "Vercel", "Netlify"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Time Management", "Communication", "Attention to Detail"]
    }
  ];

  return (
    <div className='text-white max-w-7xl mx-auto h-auto py-10 md:py-20 px-6 md:px-12'>
      
      <h1 className='uppercase font-semibold text-3xl hidden md:flex md:text-4xl pb-10 md:pb-16 mt-10 md:mt-20 justify-center'>
        about me
      </h1>

      {/* Profile Section: Stacks on mobile (flex-col), Side-by-side on desktop (md:flex-row) */}
      <div className='flex flex-col md:flex-row w-full gap-10 md:gap-16 justify-between items-center'>
        
        {/* Profile Image */}
        <div className="flex shrink-0 md:mt-0 mt-20">
          <img 
            src="/images/cat-pic2.jpg" 
            alt="profile-pic" 
            className='w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-(--primary) shadow-2xl'
          />
        </div>

        {/* Text Content */}
        <div className='flex flex-col w-full md:w-1/2 text-center md:text-left'>
          <p className='text-2xl md:text-4xl pb-5 font-medium leading-tight'>
            I am a front-end developer based in India.
          </p>
          <p className='text-base md:text-lg text-gray-300 leading-relaxed'>
            I am a Frontend Developer looking for exciting opportunities. I have a background in Computer Applications (BCA). I like to focus on accessibility and performance when developing. Passionate and curious about solving problems. Currently, I’m exploring the React.js ecosystem, Webflow, and UI Designing. While I am not programming, I enjoy gaming. Always learning to improve my skills.
          </p>

          {/* Buttons */}
          <div className='flex w-full flex-wrap justify-start md:justify-start gap-2 md:gap-4 mt-8'>
            <button className='bg-(--primary) hover:bg-(--primary-foreground) py-3 px-6 rounded-full text-white font-medium flex items-center gap-3 hover:scale-105 hover:text-black cursor-pointer transition-all duration-300 shadow-lg'>
              Download Resume<GoDotFill/>
            </button>
            
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-(--primary-foreground-1) p-3 rounded-full text-black hover:text-white hover:bg-(--primary-foreground-2) hover:scale-105 transition-all duration-300 shadow-lg'
            >
              <FaLinkedinIn size={24} />
            </a>
            
            <a
              href="https://github.com/your-github-profile" 
              target="_blank"
              rel="noopener noreferrer"
              className='bg-(--primary-foreground-1) p-3 rounded-full text-black hover:text-white hover:bg-(--primary-foreground-2) hover:scale-105 transition-all duration-300 shadow-lg'
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      <hr className='mt-16 md:mt-35' />

      {/* Skills Section */}
      <div className='flex w-full gap-8 justify-between items-center flex-col'>
        <h1 className='uppercase font-semibold text-3xl md:text-4xl pb-5 mt-10 md:mt-16 text-center'>
          My Skills
        </h1>
        
        {/* Skills Grid: 1 column on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-4 md:mb-8 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-300 mb-4 md:mb-6">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-(--skills-color) text-white text-sm md:text-base font-medium px-4 py-2 rounded-full hover:bg-blue-600 hover:scale-105 transition-all duration-300 cursor-default shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <hr className='mt-10 md:mt-16' />
    </div>
  )
}

export default About;