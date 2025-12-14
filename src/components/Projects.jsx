import React from 'react'

function Projects({props}) {
  return (
    <div className='flex flex-col md:flex-row gap-8 w-full items-center justify-evenly p-6 md:p-0'>
        <div className='rounded-xl w-2/2 md:w-2/3 flex items-center flex-col'>
            <img src={props.imageUrl}
            alt="project-demo" 
            className='object-cover rounded-xl w-full h-60'
            />
        </div>
        <div className='w-full flex gap-4 flex-col'>
            <h2 className='md:text-3xl text-2xl font-semibold'>{props.name}</h2>
            <p className='w-full text-gray-300 text-lg'>{props.info}</p>

            <div>
          <h3 className='text-xl'>Tech Stack</h3>
          <hr className='border-gray-700 my-2'/>
          
          <div className='flex flex-wrap gap-2'>
            {/* Map over the techStack array */}
            {props.techStack.map((tech) => (
              <span 
                key={tech}
                className="bg-(--skills-color) text-white text-[1rem] font-medium px-3 py-1 mt-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className='flex gap-8 text-(--primary-foreground-1) font-semibold mt-4'>
          <a 
            href={props.liveDemo} // <-- Use your project data
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Live Demo
          </a>
          <a 
            href={props.githubCode} // <-- Use your project data
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Code on GitHub
          </a>
        </div>
        </div>
    </div>
  )
}

export default Projects