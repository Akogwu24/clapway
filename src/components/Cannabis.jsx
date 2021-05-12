import React from 'react';

import SmallCard from '../components/common/SmallCard';
import ReadMoreCard from '../components/common/ReadMoreCard';
import man from '../assets/images/Money-man2.jpg';
import lips from '../assets/images/lips.jpg';
import drink from '../assets/images/drink3.jpg';
import game from '../assets/images/Frotnite-game.jpg';
import drink2 from '../assets/images/drink3.jpg';
import man2 from '../assets/images/Money-man2.jpg';
import farmer from '../assets/images/Marijuana2.jpg';

const Cannabis = () => {
  const smallCardImages = [man, lips, drink, game, drink2];
  const smallCardText = [
    'Betting Tips for Sporting Newbies',
    'Tips to Help You Boost Your Odds of Winning at Blackjack',
    'Top Security Tips for Online Gaming and Gambling',
    'The Most Popular Video Games Students Play',
    'From the History of Roulette to the Age of Online Gaming',
  ];

  const readMoreCardImages = [man2, farmer];
  const readMoreHead = [
    'Successful Cannabis Business Ideas You Can Start in 2021',
    'Tips For Choosing Your Hemp CBD Flower Strain: Special Sauce & Others',
  ];
  const readMoreText = [
    'The best way to shake off the Covid blues could be found in starting your...',
    'When you finally decide to give CBD flowers a chance and start smoking them, you...',
  ];

  return (
    <div className='md:flex'>
      <div className=''>
        <div className='mt-24 md:mx-16'>
          {smallCardImages.map((smallCardImage, index) => (
            <SmallCard
              smallImg={smallCardImage}
              smallText={smallCardText[index]}
              imgstyle='h-full'
            />
          ))}
        </div>
      </div>

      <div className='md:w-2/3'>
        <h1 className='text-5xl italic font-bold mb-12'>Cannabis</h1>
        <div>
          {readMoreCardImages.map((readMoreCardImage, index) => (
            <ReadMoreCard
              header={readMoreHead[index]}
              brief={readMoreText[index]}
              img={readMoreCardImage}
              containerStyle='pb-20'
              textBtnContainer='ml-8 w-3/5 text-lg'
              textStyle='text-xl'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cannabis;
