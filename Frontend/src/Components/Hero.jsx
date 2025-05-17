import React from 'react'
import { assets } from '../assets/assets.js';

const Hero = () => {
  return (
    <div className='border flex flex-col sm:flex-row border-gray-400'>
      {/* Hero left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ' >
          <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
            <p className='w-8 sm:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base' >BEST SELLER</p>
            </div>
            <h1 className='text-3xl sm:text-5xl sm:py-3 leading-relaxed prata-regular'>LATEST ARRIVAL</h1>
            <div className='flex items-center gap-2 '>
              <p className='font-semibold text-sm md:text-base  ' >SHOP NOW</p>
              <p className='w-8 sm:w-11 h-[2px] bg-[#414141]'> </p>
            </div>
          </div>
      </div>

      {/* Left Side */}
      <img src={assets.hero_img} className='w-full sm:w-1/2' alt="" />
    </div>
  )
}

export default Hero
