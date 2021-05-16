import React from 'react';

import drink from '../assets/images/drink2.jpg';
import Card from '../components/common/Card';

const Games = () => {
  return (
    <div className=''>
      <h1 className='text-2xl md:text-5xl italic font-bold mb-12'>Games</h1>
      <Card
        img={drink}
        text='Online Slots: Are They Worth It?'
        imgStyles='h-full'
        textStyles='text-3xl md:text-5xl font-bold hover:text-red-500'
      />
    </div>
  );
};

export default Games;
