import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const Contact = () => {
  return (
    <div>


      <div className="text-center  text-2xl pt-10 border-t">
      <Title text1={'CONTACT'} text2={'US'}/>
      </div>

       <div className="flex my-10 flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="image" className="w-full md:max-w-[480px]" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>5670 wiliam Station <br /> Suite 350 , Washington , USA</p>
          <p className='text-gray-500'>Tel: +424 5235-4532 <br /> Email : admin@forver.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn More About our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
          <p></p>
        </div>
       </div>

       <NewsLetterBox/>

    </div>
  )
}

export default Contact

