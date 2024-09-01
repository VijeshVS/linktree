import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaLaptopCode } from 'react-icons/fa';

const Linktree = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center p-6">
      <div className="transform transition-transform duration-300 hover:scale-110">
        <img
          src="./avatar.svg" 
          alt="Logo"
          className="w-36 h-36 object-contain rounded-full shadow-md"
        />
      </div>

      <h1 className='text-2xl font-bold mt-4 text-white'>Vijesh Shetty</h1>

      <div className="w-full mt-6 max-w-xs space-y-4">
        <a
          href="https://vijesh.vercel.app"
          className="flex items-center justify-center space-x-2 w-full text-center py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
        >
          <FaLaptopCode className="text-xl" />
          <span>Portfolio</span>
        </a>
        <a
          href="https://www.linkedin.com/in/vijeshsshetty/"
          className="flex items-center justify-center space-x-2 w-full text-center py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
        >
          <FaLinkedin className="text-xl" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/vijeshvs"
          className="flex items-center justify-center space-x-2 w-full text-center py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 hover:scale-105 transition-transform duration-300"
        >
          <FaGithub className="text-xl" />
          <span>GitHub</span>
        </a>
        <a
          href="mailto:vijeshsshetty@gmail.com"
          className="flex items-center justify-center space-x-2 w-full text-center py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 hover:scale-105 transition-transform duration-300"
        >
          <FaEnvelope className="text-xl" />
          <span>Email</span>
        </a>
        <a
          href="https://vijesh.vercel.app/Resume.pdf"
          className="flex items-center justify-center space-x-2 w-full text-center py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 hover:scale-105 transition-transform duration-300"
        >
          <FaFileAlt className="text-xl" />
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Linktree;
