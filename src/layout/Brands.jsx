import React from 'react';
import jumpi from '../assets/images/Jumpi.jpg';

const Brands = () => {
  return (
    <section className='crypto py-18 pb-28 mb-20'>
      <h1 className='text-6xl font-extrabold mb-20'>Brands</h1>
      <div className='image-text-container flex'>
        <div className='image-container h-full'>
          <img src={jumpi} alt='pyramid' className='h-full pr-24' />
        </div>
        <div className='text-container w-1/2 '>
          <h1 className='text-5xl font-bold hover:text-red-500'>
            Meet Jumpi, the 3-in-1 Car Vacuum, Jumpstarter, and Power Bank
          </h1>
          <p className='text-3xl w-11/12 my-12 text-gray-600'>
            Have you ever been in an emergency on the road? It can be a real
            nightmare even if you’re prepared. If not, you could be dealing with
            a life-or-death situation. Now, there’s a way for you to stay safe,
            clean, and connected no matter where the road...
          </p>
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

export default Brands;
