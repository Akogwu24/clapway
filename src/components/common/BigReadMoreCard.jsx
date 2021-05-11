import React from 'react';

const BigReadMoreCard = ({ img, title, header, brief }) => {
  return (
    <section className='crypto py-18 pb-28 border-b-2 mb-20'>
      <h1 className='text-6xl font-extrabold mb-20'>{title}</h1>
      <div className='image-text-container flex'>
        <div className='image-container h-full'>
          <img src={img} alt='pyramid' className='h-full pr-24' />
        </div>
        <div className='text-container w-1/2 '>
          <h1 className='text-5xl font-bold hover:text-red-500'>{header}</h1>
          <p className='text-3xl w-11/12 my-12 text-gray-600'>{brief}</p>
          <button
            type='button'
            className='bg-black text-2xl text-white p-3 hover:bg-gray-800'
          >
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default BigReadMoreCard;
