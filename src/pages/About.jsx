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
    <div className='dark:text-white max-w-7xl mx-auto h-auto py-2 px-3 md:px-10'>
      
      {/* <h1 className='uppercase font-semibold text-3xl hidden md:flex md:text-3xl pb-10 md:pb-16 mt-10 md:mt-20 justify-center'>
        about me
      </h1> */}

      {/* Profile Section: Stacks on mobile (flex-col), Side-by-side on desktop (md:flex-row) */}
      {/* <div className='flex flex-col md:flex-row w-full gap-10 md:gap-16 justify-between items-center'> */}
        
        {/* Profile Image */}
        {/* <div className="flex shrink-0 md:mt-0 mt-20">
          <img 
            src="/images/cat-pic2.jpg" 
            alt="profile-pic" 
            className='w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-(--color-primary) shadow-2xl'
          />
        </div> */}

        {/* Text Content */}
        {/* <div className='flex flex-col w-full md:w-1/2 text-center md:text-left'>
          <p className='text-2xl md:text-4xl pb-5 font-medium leading-tight'>
            I am a <span className='text-(--color-primary) font-semibold'>front-end developer</span> based in India.
          </p>
          <p className='text-sm md:text-lg dark:text-gray-300 leading-relaxed'>
            I am a Frontend Developer looking for exciting opportunities. I have a background in Computer Applications (BCA). I like to focus on accessibility and performance when developing. Passionate and curious about solving problems. Currently, I’m exploring the React.js ecosystem, Webflow, and UI Designing. While I am not programming, I enjoy gaming. Always learning to improve my skills.
          </p> */}

          {/* Buttons */}
          {/* <div className='flex w-full flex-wrap justify-start md:justify-start gap-2 md:gap-4 mt-8'>
            <button className='bg-(--color-primary) hover:bg-(--color-secondary) py-3 md:px-6 px-5 rounded-full text-white font-medium flex items-center gap-2 md:gap-3 hover:scale-105 cursor-pointer transition-all duration-300 shadow-lg'>
              Download Resume<GoDotFill/>
            </button>
            
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className=' bg-(--color-secondary) p-3 rounded-full dark:text-black text-white hover:text-white hover:bg-(--color-secondary-hover) hover:scale-105 transition-all duration-300 shadow-lg'
            >
              <FaLinkedinIn size={24} />
            </a>
            
            <a
              href="https://github.com/your-github-profile" 
              target="_blank"
              rel="noopener noreferrer"
              className=' bg-(--color-secondary) p-3 rounded-full dark:text-black text-white hover:text-white hover:bg-(--color-secondary-hover) hover:scale-105 transition-all duration-300 shadow-lg'
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div> */}
      {/* </div> */}

      <hr className='mt-16 md:mt-5' />

      <h1 className='uppercase font-bold md:text-4xl text-2xl pb-5 md:mt-10 mt-8 mb-5 text-center md:text-left'>
          My Skills
      </h1>
      <div className='flex w-full gap-8 justify-between items-center flex-col'>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-2 w-full">
          {skillCategories.map((category, index) => (
            <div key={index} className="mb-4 md:mb-8 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold dark:text-gray-400 mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-(--color-primary) text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-600 hover:scale-105 transition-all duration-300 cursor-default shadow-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* <hr className='mt-10 md:mt-16' /> */}
    </div>
  )
}

export default About;