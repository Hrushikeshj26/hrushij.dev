import React from 'react'

function Projects({props}) {
  return (
    <div className='flex flex-col md:flex-row gap-8 w-full items-center justify-evenly bg-gray-800 rounded-2xl shadow-blue-800 shadow-lg overflow-hidden'>
        <div className='rounded-xl w-2/2 md:w-2/3 flex items-center flex-col'>
            <img src={props.imageUrl}
            alt="project-demo" 
            className='object-cover w-full h-fit'
            />
        </div>
        <div className='w-full flex gap-1 flex-col p-4'>
            <h2 className='md:text-2xl text-xl font-semibold'>{props.name}</h2>
            <p className='w-full text-gray-400 text-base'>{props.info}</p>

            <div>
              <div className='w-full h-full p-3 mt-4 rounded-xl'>
                <h3 className='text-lg'>Tech Stack</h3>
                <hr className='border-gray-400 my-2'/>
          
                <div className='flex flex-wrap justify-start gap-2'>
                  {/* Map over the techStack array */}
                  {props.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-(--color-primary) text-white text-sm px-3 py-1 mt-2 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex items-center justify-start gap-4 text-gray-300 underline underline-offset-4 mt-10'>
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