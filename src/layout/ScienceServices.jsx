import React from 'react';

import ReadMoreCard from '../components/common/ReadMoreCard';
import Services from '../components/Services';

import shroom from '../assets/images/Shrooms.jpg';
import eye from '../assets/images/teary-eye.jpg';

const ScienceServies = () => {
  return (
    <section className='md:flex mb-20 pb-24 border-b-2'>
      <div className='max-w-lg '>
        <h1 className='text-6xl mb-5 font-bold'>Science</h1>
        <aside className=''>
          <ReadMoreCard
            header='Why Science Wants You to Take Shrooms— And Wants Canada to Legalize Them'
            brief='As anecdotal evidence continues to mount for the beneficial effect miscroding mushrooms ...'
            img={shroom}
            textStyle='text-xl text-justify whitespace-normal'
            containerStyle='mr-16 my-10 w-full'
            textBtnContainer='ml-10 '
          />
          <ReadMoreCard
            containerStyle='mr-16 my-10 w-full'
            header='3 Terrifying Events That Nobody Expects After the Coronavirus Pandemic Is Over'
            brief='
            If you have not been hiding under a rock, then you are likely familiar lorem lorem lorem orem with ...'
            img={eye}
            textStyle='text-xl text-justify'
            textBtnContainer='ml-10 '
          />
        </aside>
      </div>

      <div className='pl-20'>
        <h1 className='text-6xl mb-11 font-bold'>Services</h1>
        <Services />
      </div>
    </section>
  );
};

export default ScienceServies;
