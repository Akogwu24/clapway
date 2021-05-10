import React from 'react';

const ReadMoreCard = ({ header, brief, img }) => {
  return (
    <div className='mr-16 my-10'>
      <div className='mb-5'>
        <h2 className='hover:text-red-500 text-4xl font-bold'>{header}</h2>
      </div>
      <div className='flex justify-between'>
        <div className=''>
          <img src={img} alt='' className='w-full h-52' />
        </div>
        <div className='ml-5'>
          <p className='text-xl text-justify whitespace-normal'>{brief}</p>
          <button
            type='button'
            className='bg-black text-white p-3 mt-5 hover:bg-gray-800'
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreCard;
