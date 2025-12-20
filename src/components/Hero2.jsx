import React from 'react'
import Projects from './Projects'

function Hero2() {

const projectList = [
  {
    id: 1,
    name: "Nexora – E-commerce Website",
    info: "A fully responsive e-commerce website, built with React.js and Tailwind CSS, featuring a clean UI, dynamic routing, product listings, and a reusable component-based architecture.",
    techStack: ["HTML", "CSS", "React.js", "Tailwind CSS", "Context API", "React-Hot-Toast", "React Router"],
    liveDemo: "https://nexora-shop.vercel.app/",
    githubCode: "https://github.com/Hrushikeshj26/Nexora",
    imageUrl: "./images/Nexora-demo.png"
  },
  {
    id: 2,
    name: "TechNest – Tech Blog Website",
    info: "A fully responsive personal tech blog with a clean UI, search functionality, and dynamic routing. Built with a focus on a reusable component-based architecture.",
    techStack: ["HTML", "CSS", "React.js", "Tailwind CSS", "React Router"],
    liveDemo: "https://tech-nestt.vercel.app/",
    githubCode: "https://github.com/Hrushikeshj26/TechNest",
    imageUrl: "./images/TechNest-demo.jpg"
  },
  {
    id: 3,
    name: "NovaCrypto – Crypto Tracker",
    info: "A responsive crypto tracker with real-time data from the CoinGecko API. Uses Context API for global state (e.g., currency) and React Router for dynamic routing.",
    techStack: ["HTML", "CSS", "React.js", "Tailwind CSS", "Context API", "CoinGecko API", "React Google Chart"],
    liveDemo: "https://novacrypto.vercel.app/",
    githubCode: "https://github.com/Hrushikeshj26/NovaCrypto",
    imageUrl: "./images/NovaCrypto-demo.png"
  },
  {
    id: 4,
    name: "HealThrive – Landing Page",
    info: "A fully responsive and mobile-friendly landing page built with React.js and Tailwind CSS. Integrated AOS (Animate On Scroll) for smooth scroll-based animations.",
    techStack: ["HTML", "CSS", "React.js", "Tailwind CSS", "AOS Animation"],
    liveDemo: "https://heal-thrive.vercel.app/",
    githubCode: "https://github.com/Hrushikeshj26/HealThrive",
    imageUrl: "./images/HealThrive-demo.png"
  },
  {
    id: 5,
    name: "TechNest – Tech Blog Website",
    info: "A fully responsive personal tech blog with a clean UI, search functionality, and dynamic routing. Built with a focus on a reusable component-based architecture.",
    techStack: ["HTML", "CSS", "React.js", "Tailwind CSS", "React Router"],
    liveDemo: "https://tech-nestt.vercel.app/",
    githubCode: "https://github.com/Hrushikeshj26/TechNest",
    imageUrl: "./images/TechNest-demo.jpg"
  },
];


  return (
    <div className='text-white max-w-7xl md:mx-auto mx-3'>
      <hr className='mx-5 mt-10 pb-5 md:pb-10 text-black dark:text-gray-50' />
        <h1 className='uppercase font-bold text-2xl md:text-4xl p-2 text-black dark:text-white'>Featured Projects</h1>
        <p className='md:text-lg p-2 text-sm dark:text-gray-200 text-gray-800'>Here are some of the selected projects that showcase my passion for front-end development.</p>
    <div className='my-10 pb-10 w-full flex md:flex-row flex-col gap-10 flex-wrap items-center justify-center'>
        {projectList.map((projects)=>{
            return(
                <Projects key={projects.id} props={projects}/>
            )
        })}
    </div>
    <hr className='pt-1 mx-5 text-black dark:text-gray-50 mb-10' />
    </div>
  )
}

export default Hero2