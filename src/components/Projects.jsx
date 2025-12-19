import React from 'react'

function Projects({props}) {
  return (
    <div className='flex flex-col md:w-100 h-110 items-center  dark:bg-(--color-dark-page) bg-(--color-light-page) rounded-2xl ring-2 ring-(--color-primary)/50 overflow-hidden shadow-xl dark:shadow-white/20 shadow-black/30 dark:hover:shadow-white/40 hover:shadow-black/50'>
        <div className='rounded-xl w-full flex items-center flex-col bg-amber-200'>
            <img src={props.imageUrl}
            alt="project-demo" 
            className='object-fill w-full'
            />
        </div>
        <div className='flex gap-1 flex-col p-4 mt-3'>
            <h2 className='text-lg font-bold text-black dark:text-white'>{props.name}</h2>
            <p className='w-full dark:text-gray-400 text-gray-800 text-sm line-clamp-4'>{props.info}</p>

            <div>
              <div className='w-full h-full p-3  rounded-xl'>
                {/* <h3 className='text-lg text-black dark:text-white font-semibold'>Tech Stack</h3>
                <hr className='border-gray-400 my-2'/>
          
                <div className='flex flex-wrap justify-start gap-2'>
                  {props.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-(--color-primary) text-white text-sm px-3 py-1 mt-2 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
                 <hr className='dark:border-gray-300 border-gray-800 my-2'/>
                <div className='flex items-center justify-center gap-4 dark:text-gray-300 text-gray-900 text-sm underline underline-offset-4 mt-5'>
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