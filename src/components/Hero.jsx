import { GoDotFill } from 'react-icons/go';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Hero() {
  return (
    <div className='h-screen flex justify-center items-center text-white overflow-hidden'>
      {/* Hero Content */}
      <div className='w-full max-w-7xl mx-auto pb-25 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20'>
        <div className='flex-1 text-center md:text-left'>
          <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6'>
            HI, I AM <br /> HRUSHIKESH JADHAV.
          </h1>
          <p className='max-w-xl text-gray-300 py-6 text-base sm:text-lg md:text-xl leading-relaxed mx-auto md:mx-0'>
            Frontend Developer crafting clean, engaging, and performant web experiences. I'm driven by a passion for solving problems and building intuitive digital products.
          </p>
          <div className='flex justify-center md:justify-start gap-4 mt-8'>
            <button
              className='bg-[#D3E97A] py-3 px-6 rounded-full text-black font-semibold flex items-center gap-10
                         hover:bg-[#c2d96c] hover:scale-105 cursor-pointer transition-all duration-300 shadow-lg'
            >
              CONTACT ME <GoDotFill className="text-sm" />
            </button>
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile/" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className='bg-gray-800 py-3 px-3 rounded-full text-[#D3E97A] text-2xl font-semibold flex items-center justify-center
                         hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg'
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/your-github-profile" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className='bg-gray-800 py-3 px-3 rounded-full text-[#D3E97A] text-2xl font-semibold flex items-center justify-center
                         hover:bg-gray-700 hover:scale-105 transition-all duration-300 shadow-lg'
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className='flex shrink-0 mt-10 md:mt-0'>
          <img
            src="/images/cat-pic.jpg" // Ensure this path is correct relative to your public folder
            alt="profile-pic"
            className='w-64 h-64 sm:w-80 sm:h-80 md:w-lg md:h-auto object-cover rounded-full border-4 border-[#D3E97A] shadow-2xl'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;