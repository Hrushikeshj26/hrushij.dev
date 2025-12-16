import { GoDotFill } from "react-icons/go";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="h-screen pt-15 flex justify-center items-center text-white overflow-hidden">
      {/* Hero Content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between md:gap-10 lg:gap-20">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-bold text-2xl sm:text-5xl md:text-4xl lg:text-5xl leading-tight mb-6 text-(--color-text-light)">
            HI, I AM <br />{" "}
            <span className="text-(--color-secondary) text-4xl md:text-6xl">
              HRUSHIKESH JADHAV.
            </span>
          </h1>
          <p className="max-w-xl text-gray-300 py-2 md:py-6 text-base md:text-xl leading-relaxed mx-8 md:mx-0 ">
            Frontend Developer crafting clean, engaging, and performant web
            experiences. I'm driven by a passion for solving problems and
            building intuitive digital products.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-8">
            <Link
              to="/contact"
              className="bg-(--color-primary) py-3 px-6 rounded-full text-white font-medium flex items-center gap-10
                         hover:bg-(--color-secondary) hover:scale-105 cursor-pointer transition-all duration-300 shadow-lg"
            >
              CONTACT ME <GoDotFill className="text-sm" />
            </Link>
            <a
              href="https://www.linkedin.com/in/hrushikeshj26/" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--color-secondary) py-3 px-3 rounded-full text-black text-2xl font-semibold flex items-center justify-center
                         hover:bg-(--color-secondary-hover) hover:text-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Hrushikeshj26" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--color-secondary) py-3 px-3 rounded-full text-black text-2xl font-semibold flex items-center justify-center
                       hover:bg-(--color-secondary-hover) hover:text-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaGithub />
            </a>
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
