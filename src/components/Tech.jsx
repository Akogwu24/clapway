import React from 'react';

import Card from './common/Card';
import SmallCard from './common/SmallCard';
import crypto from '../assets/images/crypto-image2.jpg';
import alien from '../assets/images/Alien.jpg';
import brain from '../assets/images/New-Tech2.jpg';

const Tech = () => {
  return (
    <div className='md:w-1/3'>
      <h1 className='text-5xl font-bold italic mb-12 '>Tech</h1>
      <div className='hover:text-red-500 w-full mb-14'>
        <Card
          img={crypto}
          text='How to Find the Crypto Trading Platform of Your Dreams'
          textStyles='text-4xl'
          imgStyles='w-full'
        />
      </div>
      <div className='tech-small-card pr-2'>
        <SmallCard smallImg={alien} smallText='4 Ways You Can Learn to Code' />
        <SmallCard
          smallImg={brain}
          smallText='Best Platforms to Use When Preparing for Microsoft 70-764 Exam; Why...'
        />
      </div>
    </div>
  );
};

export default Tech;
