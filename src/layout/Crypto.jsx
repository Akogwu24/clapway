import React from 'react';

import cryptoImg from '../assets/images/crypto-image.jpg';

const Crypto = () => {
  return (
    <section className='crypto py-18 pb-28 border-b-2 mb-20'>
      <h1 className='text-6xl font-extrabold mb-20'>Crypto</h1>
      <div className='image-text-container flex'>
        <div className='image-container h-full'>
          <img src={cryptoImg} alt='pyramid' className='h-full pr-24' />
        </div>
        <div className='text-container w-1/2 '>
          <h1 className='text-5xl font-bold hover:text-red-500'>
            How to Find the Crypto Trading Platform of Your Dreams
          </h1>
          <p className='text-3xl w-11/12 my-12 text-gray-600'>
            As retail investors rush to get in on crypto, it’s back to trading
            fundamentals. Studies estimate that 1 in 10 people will be investing
            their stimulus checks in crypto. Which means that there are going to
            be a huge number of people running towards...
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

export default Crypto;