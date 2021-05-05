import React from 'react';

import Card from './common/Card';
import SmallCard from './common/SmallCard';
import bulb from '../assets/images/bulb.jpg';
import writer from '../assets/images/writer.jpg';
import moneyMan from '../assets/images/Money-man.jpg';
import shroom from '../assets/images/Shrooms.jpg';
import marijuana from '../assets/images/Marijuana.jpg';
import cat from '../assets/images/cat.jpg';
import trading from '../assets/images/trading.jpg';
import fraud from '../assets/images/Fraud-Phone.jpg';
import drink from '../assets/images/drink1.jpg';

import lovers from '../assets/images/lover.jpeg';

const Effective = () => {
  const images = [writer, moneyMan, shroom, marijuana, cat];
  const featuredImages = [trading, fraud, drink, lovers];

  return (
    <section className='flex justify-between border-b-4 pb-20 border-gray-300'>
      <Card
        className=' w-3/5 ml-10 mr-20'
        img={bulb}
        text='10 EFFECTIVE WAYS TO EXPAND YOUR SOCIAL MEDIA INFLUENCE'
      />
      <div>
        {images.map((image) => (
          <SmallCard
            imgstyle='w-72 '
            smallImg={image}
            smallText='ESSAY WRITING SERVICE PRICE AND THE FACTORS THAT INFLUENCE IT'
          />
        ))}
      </div>

      <div>
        <h1 className='text-5xl mb-32 font-bold'>Feature</h1>

        {featuredImages.map((featuredImage) => (
          <SmallCard
            imgstyle='w-80'
            smallImg={featuredImage}
            smallText='HOW TO FIND THE CRYPTO TRADING PLATFORM OF YOUR DREAMS'
          />
        ))}
      </div>
    </section>
  );
};

export default Effective;
