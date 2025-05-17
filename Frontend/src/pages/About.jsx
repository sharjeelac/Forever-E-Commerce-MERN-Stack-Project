import React from 'react';
import Title from '../Components/Title.jsx';
import NewsLetterBox from '../Components/NewsLetterBox.jsx';
import { assets } from '../assets/assets.js';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'} />
       </div>


       <div className='my-10 flex flex-col md:flex-row gap-16'>

        <img
          className='w-full md:max-w-[450px]'
          src={assets.about_img}
          alt=''
        />

{/* --------------------------------Text--------------------- right side */}
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ea dolores praesentium, tenetur sequi impedit ut repellat vitae
            illum iure.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut esse
            reiciendis et quibusdam doloremque recusandae sint iusto obcaecati
            earum necessitatibus, expedita aperiam in aliquam totam maxime rem
            minus assumenda veniam.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            quisquam quas sunt, odio error dolores adipisci excepturi itaque
            facere aspernatur!
          </p>
        </div>

      </div>



    <div className="text-xl py-4">
      <Title text1={'WHY'} text2={"CHOOSE US"}/>
    </div>

    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance</b>
        <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia delectus ipsum nulla eveniet esse inventore corporis aliquid illum laboriosam neque?</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience</b>
        <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia delectus ipsum nulla eveniet esse inventore corporis aliquid illum laboriosam neque?</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Services</b>
        <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia delectus ipsum nulla eveniet esse inventore corporis aliquid illum laboriosam neque?</p>
      </div>
    </div>

    <NewsLetterBox/>


    </div>






  );
};

export default About;
