import React from 'react';

import Card from './common/Card';
import SmallCard from './common/SmallCard';
import crypto from '../assets/images/crypto-image2.jpg';
import alien from '../assets/images/Alien.jpg';

const Tech = () => {
  return (
    <div className='w-1/3 bg-red-400'>
      <h1 className='text-5xl font-bold italic mb-12 '>Tech</h1>
      <div className='bg-green-700 w-full'>
        <Card
          img={crypto}
          text='How to Find the Crypto Trading Platform of Your Dreams'
          textStyles='text-3xl'
          imgStyles='w-full'
        />
      </div>
      <div>
        <SmallCard smallImg={alien} smallText='4 Ways You Can Learn to Code' />
      </div>
    </div>
  );
};

export default Tech;
