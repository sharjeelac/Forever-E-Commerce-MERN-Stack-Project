import React from 'react';
import { assets } from '../assets/assets';

const Navbar = ({ setToken }) => {
  return (
    <nav className='flex items-center justify-between px-[4%] py-3 bg-white shadow-sm sticky top-0 z-50'>
      {/* Logo */}
      <img
        className='w-[max(10%,80px)] sm:w-32 object-contain'
        src={assets.logo}
        alt='Admin Logo'
      />

      {/* Logout Button */}
      <button
        onClick={() => setToken('')}
        className='bg-black hover:bg-gray-800 text-white px-5 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-200 shadow-md'
      >
        🚪 Logout
      </button>
    </nav>
  );
};

export default Navbar;
