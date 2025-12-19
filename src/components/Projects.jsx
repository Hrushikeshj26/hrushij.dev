import React from 'react'

function Projects({props}) {
  return (
    <div className='flex flex-col md:flex-row gap-8 w-full md:h-95 items-center justify-evenly dark:bg-(--color-dark-page) bg-(--color-light-page) rounded-2xl ring-2 ring-(--color-primary)/50 overflow-hidden'>
        <div className='rounded-xl w-full md:h-95 flex items-center flex-col'>
            <img src={props.imageUrl}
            alt="project-demo" 
            className='object-cover w-full h-full'
            />
        </div>
        <div className='w-full flex gap-1 flex-col p-3'>
            <h2 className='md:text-2xl text-xl font-bold text-black dark:text-white'>{props.name}</h2>
            <p className='w-full dark:text-gray-400 text-gray-800 text-sm'>{props.info}</p>

            <div>
              <div className='w-full h-full p-3 mt-4 rounded-xl'>
                <h3 className='text-lg text-black dark:text-white font-semibold'>Tech Stack</h3>
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
                <div className='flex items-center justify-start gap-4 dark:text-gray-300 text-gray-800 text-sm md:text-base underline underline-offset-4 mt-10'>
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