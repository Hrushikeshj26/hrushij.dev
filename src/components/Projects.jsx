import React from 'react'

function Projects({props}) {
  return (
    <div className='flex flex-col md:flex-row gap-8 w-full items-center justify-evenly p-6 md:p-0 bg-gray-800 rounded-2xl'>
        <div className='rounded-xl w-2/2 md:w-2/3 flex items-center flex-col'>
            <img src={props.imageUrl}
            alt="project-demo" 
            className='object-cover rounded-xl w-full h-60'
            />
        </div>
        <div className='w-full flex gap-2 flex-col'>
            <h2 className='md:text-3xl text-xl font-medium'>{props.name}</h2>
            <p className='w-full text-gray-400 text-base'>{props.info}</p>

            <div>
              <div className='border border-blue-300 w-full h-full p-3 mt-4 rounded-xl'>
                <h3 className='md:text-xl text-lg'>Tech Stack</h3>
                <hr className='border-gray-400 my-2'/>
          
                <div className='flex flex-wrap justify-center gap-1.5'>
                  {/* Map over the techStack array */}
                  {props.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-(--skills-color) text-white text-[1rem] font-extralight px-3 py-1 mt-2 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex items-center justify-center gap-8 text-(--primary-foreground-1) underline mt-6'>
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
        </div>
    </div>
  )
}

export default Projects