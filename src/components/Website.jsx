import React from 'react';
import ReadMoreCard from '../components/common/ReadMoreCard';
import brain from '../assets/images/New-Tech2.jpg';
import bull from '../assets/images/Money-man2.jpg';

const Website = () => {
  return (
    <div className='px-2 md:w-1/3'>
      <h1 className='text-5xl font-bold italic mb-12'>Website</h1>
      <div>
        <ReadMoreCard
          header='Best Platforms to Use When Preparing for Microsoft 70-764 Exam; Why Use Exam Dumps?'
          brief='Are you looking for ways to prepare for your upcoming Microsoft 70-764 exam? Or, do...'
          img={brain}
          containerStyle='pb-12'
          textBtnContainer='w-3/5 text-lg'
          textStyle='text-xl'
        />
        <ReadMoreCard
          header='4Bulls Review: What Is 4Bulls?'
          brief='In the world of retail crypto trading, where the game is dominated by institutions and market...'
          img={bull}
          containerStyle=''
          textBtnContainer='w-3/5 text-lg'
          textStyle='text-xl'
        />
      </div>
    </div>
  );
};

export default Website;
