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
    imageUrl: "/images/projects/novacrypto.png" // Replace with your image path
  },
  {
    id: 3,
    name: "TechNest – Personal Tech Blog Website",
    info: "A fully responsive personal tech blog with a clean UI, search functionality, and dynamic routing. Built with a focus on a reusable component-based architecture.",
    techStack: ["React.js", "Tailwind CSS", "React Router"],
    liveDemo: "https://tech-nestt.vercel.app/",
    githubCode: "https://github.com/Hrushikeshj26/TechNest",
    imageUrl: "https://www.wscubetech.com/blog/wp-content/uploads/2024/02/product-landing-page.webp" // Replace with your image path
  }
];


  return (
    <div className='text-white max-w-7xl mx-auto'>
      <hr className='pb-15' />
        <h1 className='uppercase font-semibold text-5xl pb-4'>Featured Projects</h1>
        <p className='text-xl'>Here are some of the selected projects that showcase my passion for front-end development.</p>
    <div className='my-5 pb-15 w-full flex flex-col gap-15 items-center justify-center'>
        {projectList.map((projects)=>{
            return(
                <Projects key={projects.id} props={projects}/>
            )
        })}
    </div>
    <hr className='pt-1' />
    </div>
  )
}

export default Hero2