import React from 'react';

const NewsLetterBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='my-20 text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe & Get 20% off
      </p>
      <p className='text-gray-400 mt-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, culpa.
      </p>
      <form
        onSubmit={handleSubmit}
        className='w-full sm:w-1/2 flex items-center gap3 mx-auto my-6 border pl-3'
      >
        <input
          type='email'
          className='w-full sm:flex-1 outline-none '
          placeholder='Enter Your Email '
        />
        <button className='bg-black text-white cursor-pointer text-xs px-10 py-4'>
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
