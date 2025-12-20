import { GoDotFill } from "react-icons/go";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {useTypewriter, Cursor} from 'react-simple-typewriter' 

function Hero() {

  const [text] = useTypewriter({
      words: ['HRUSHIKESH JADHAV.', 'FrontEnd Developer', 'HRUSHIKESH JADHAV.','A Frontend Developer','A React Developer','A UI Developer','A Web Developer'],
      loop: {},
      typeSpeed: 120,
      deleteSpeed: 50,
    });

  return (
    <div className="h-screen pt-15 flex justify-center items-center dark:text-white overflow-hidden">
      {/* Hero Content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between md:gap-10 lg:gap-20">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-bold text-2xl sm:text-5xl md:text-4xl lg:text-5xl leading-tight text-(--color-text-light)">
            HI, I AM <br />{" "}
            <div className="flex items-center justify-center md:justify-start w-full mt-2">
                <span className="dark:text-(--color-secondary) text-(--color-primary) text-3xl md:text-5xl">
                  {text}
                  <span className="text-(--color-secondary-hover)"><Cursor /></span>
                </span>
            </div>
          </h1>
          <p className="max-w-2xl dark:text-gray-300 pt-6 md:py-6 text-base md:text-xl leading-relaxed mx-8 md:mx-0 ">
            Frontend Developer who builds clean and user-friendly websites. I enjoy solving problems and creating simple, effective digital experiences.
          </p>
          <div className="flex justify-center md:justify-start gap-2 md:gap-3 mt-8">
            <Link
              to="/contact"
              className="bg-(--color-primary) py-3 px-4 md:px-6 rounded-full text-white font-medium flex items-center gap-2 md:gap-10
                         hover:bg-(--color-secondary) hover:scale-105 cursor-pointer transition-all duration-300 shadow-lg"
            >
              CONTACT ME <GoDotFill className="text-sm" />
            </Link>
            <a
              href="https://www.linkedin.com/in/hrushikeshj26/" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--color-secondary) py-3 px-3 rounded-full dark:text-black text-white text-2xl font-semibold flex items-center justify-center
                         hover:bg-(--color-secondary-hover) hover:text-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Hrushikeshj26" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--color-secondary) py-3 px-3 rounded-full dark:text-black text-white text-2xl font-semibold flex items-center justify-center
                       hover:bg-(--color-secondary-hover) hover:text-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaGithub />
            </a>

            <ThemeToggle/>
          </div>
        </div>

        <div className="flex shrink-0 mt-10 md:mt-0">
          <img
            src="/images/cat-pic.jpg" // Ensure this path is correct relative to your public folder
            alt="profile-pic"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-lg md:h-auto object-cover rounded-full border-4 border-(--color-primary) shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
