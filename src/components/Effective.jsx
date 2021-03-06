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
import drink from '../assets/images/new-drink.jpg';

import lovers from '../assets/images/lover.jpeg';

const Effective = () => {
  const images = [writer, moneyMan, shroom, marijuana, cat];
  const imagesText = [
    'ESSAY WRITING SERVICE PRICE AND THE FACTORS THAT INFLUENCE IT',
    'SUCCESSFUL CANNABIS BUSINESS IDEAS YOU CAN START IN 2021',
    'WHY SCIENCE WANTS YOU TO TAKE SHROOMS— AND WANTS CANADA TO...',
    'TIPS FOR CHOOSING YOUR HEMP CBD FLOWER STRAIN: SPECIAL SAUCE &...',
    'WHAT YOU SHOULD KNOW ABOUT A BALINESE CAT',
  ];
  const imageKeys = [921, 922, 923, 924, 925];

  const featuredImages = [trading, fraud, drink, lovers];
  const featuredImagesText = [
    'HOW TO FIND THE CRYPTO TRADING PLATFORM OF YOUR DREAMS',
    '5 MOST COMMON CREDIT CARD SCAMS AND HOW TO PREVENT THEM',
    'ONLINE SLOTS: ARE THEY WORTH IT?',
    'THE EFFECTS OF DEPRESSION ON YOUR BODY',
  ];
  const featuredImageKeys = ['131', '132', '133', '134'];

  return (
    <section className='md:flex justify-between  border-b-2 gap-10 pb-20 border-gray-100'>
      <Card
        textStyles=' text-2xl md:text-3xl lg:5xl font-bold hover:text-red-500'
        className='w-full mb-12 md:mb-0'
        img={bulb}
        text='10 EFFECTIVE WAYS TO EXPAND YOUR SOCIAL MEDIA INFLUENCE'
        imageContainer='w-full'
        imgStyles='w-full'
      />
      <div className='font-medium '>
        {images?.map((image, i) => (
          <SmallCard
            key={imageKeys[i]}
            imgstyle='w-72'
            smallImg={image}
            smallText={imagesText[i]}
          />
        ))}
      </div>

      <div className=' font-semibold'>
        <h1 className='ml-8 mt-32 md:mt-auto text-5xl mb-16 font-bold'>
          Feature
        </h1>

        {featuredImages?.map((featuredImage, id) => (
          <SmallCard
            key={featuredImageKeys[id]}
            imgstyle='w-80'
            smallImg={featuredImage}
            smallText={featuredImagesText[id]}
          />
        ))}
      </div>
    </section>
  );
};

export default Effective;
