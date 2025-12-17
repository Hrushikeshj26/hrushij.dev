import React from 'react'
import Projects from './Projects'

function Hero2() {

const projectList = [
  {
    id: 1,
    name: "HealThrive – Mental Wellness Landing Page",
    info: "A fully responsive and mobile-friendly landing page built with React.js and Tailwind CSS. Integrated AOS (Animate On Scroll) for smooth scroll-based animations.",
    techStack: ["React.js", "Tailwind CSS", "AOS Animation"],
    liveDemo: "https://heal-thrive.vercel.app/",
    githubCode: "https://github.com/Hrushikeshj26/HealThrive",
    imageUrl: "https://www.wscubetech.com/blog/wp-content/uploads/2024/02/product-landing-page.webp" // Replace with your image path
  },
  {
    id: 2,
    name: "NovaCrypto – Cryptocurrency Tracker",
    info: "A responsive crypto tracker with real-time data from the CoinGecko API. Uses Context API for global state (e.g., currency) and React Router for dynamic routing.",
    techStack: ["React.js", "Tailwind CSS", "Context API", "CoinGecko API", "React Google Chart"],
    liveDemo: "https://novacrypto.vercel.app/",
    githubCode: "https://github.com/Hrushikeshj26/NovaCrypto",
    imageUrl: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcl16te1dbqsp5np73bh2.png"
  },
  {
    id: 3,
    name: "TechNest – Personal Tech Blog Website",
    info: "A fully responsive personal tech blog with a clean UI, search functionality, and dynamic routing. Built with a focus on a reusable component-based architecture.",
    techStack: ["React.js", "Tailwind CSS", "React Router"],
    liveDemo: "https://tech-nestt.vercel.app/",
    githubCode: "https://github.com/Hrushikeshj26/TechNest",
    imageUrl: "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/render/image/public/projects-images/about-us-page/cover.jpg"
  },
  // {
  //   id: 4,
  //   name: "NovaCrypto – Cryptocurrency Tracker",
  //   info: "A responsive crypto tracker with real-time data from the CoinGecko API. Uses Context API for global state (e.g., currency) and React Router for dynamic routing.",
  //   techStack: ["React.js", "Tailwind CSS", "Context API", "CoinGecko API", "React Google Chart"],
  //   liveDemo: "https://novacrypto.vercel.app/",
  //   githubCode: "https://github.com/Hrushikeshj26/NovaCrypto",
  //   imageUrl: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fcl16te1dbqsp5np73bh2.png"
  // },
  // {
  //   id: 5,
  //   name: "TechNest – Personal Tech Blog Website",
  //   info: "A fully responsive personal tech blog with a clean UI, search functionality, and dynamic routing. Built with a focus on a reusable component-based architecture.",
  //   techStack: ["React.js", "Tailwind CSS", "React Router"],
  //   liveDemo: "https://tech-nestt.vercel.app/",
  //   githubCode: "https://github.com/Hrushikeshj26/TechNest",
  //   imageUrl: "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/render/image/public/projects-images/about-us-page/cover.jpg"
  // }
];


  return (
    <div className='text-white max-w-7xl md:mx-auto mx-3'>
      <hr className='mx-5 pb-5 md:pb-10 text-black dark:text-gray-50' />
        <h1 className='uppercase font-bold text-2xl md:text-4xl p-2 text-black dark:text-white'>Featured Projects</h1>
        <p className='md:text-xl p-2 text-sm dark:text-gray-300 text-gray-800'>Here are some of the selected projects that showcase my passion for front-end development.</p>
    <div className='my-10 pb-10 w-full flex flex-col gap-15 items-center justify-center'>
        {projectList.map((projects)=>{
            return(
                <Projects key={projects.id} props={projects}/>
            )
        })}
    </div>
    <hr className='pt-1 mx-5 text-black dark:text-gray-50' />
    </div>
  )
}

export default Hero2