import React from 'react';

import Card from '../components/common/Card';
import SmallCard from '../components/common/SmallCard';
import fraudster from '../assets/images/Fraud-Phone2.jpg';
import drink from '../assets/images/drink1.jpg';
import adidas from '../assets/images/adidas.jpeg';

const Adult = () => {
  return (
    <div className='w-1/3'>
      <h1 className='text-5xl font-bold italic mb-12 '>Adult</h1>
      <div className='hover:text-red-500 w-full mb-14'>
        <Card
          img={fraudster}
          text='5 Most Common Credit Card Scams and How to Prevent Them'
          textStyles='text-3xl'
          imgStyles='w-full'
        />
      </div>
      <div className='pr-2'>
        <SmallCard
          smallImg={drink}
          smallText='Online Slots: Are They Worth It?'
        />
        <SmallCard
          smallImg={adidas}
          smallText='Adidas Condemns Sex Violence In School'
        />
      </div>
    </div>
  );
};

export default Adult;
