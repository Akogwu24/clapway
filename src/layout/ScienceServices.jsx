import React from 'react';
import ReadMoreCard from '../components/common/ReadMoreCard';
import Services from '../components/Services';

import shroom from '../assets/images/Shrooms.jpg';
import eye from '../assets/images/teary-eye.jpg';

const ScienceServies = () => {
  return (
    <>
      <div className='text-6xl mb-5 font-bold flex'>
        <h1 className=''>Science</h1>
        <h1 className='services'>Services</h1>
      </div>

      <section className='md:flex'>
        <aside className='w-1/3'>
          <ReadMoreCard
            header='Why Science Wants You to Take Shrooms— And Wants Canada to Legalize Them'
            brief='As anecdotal evidence continues to mount for the beneficial effect miscroding mushrooms ...'
            img={shroom}
          />
          <ReadMoreCard
            header='3 Terrifying Events That Nobody Expects After the Coronavirus Pandemic Is Over'
            brief='
            If you have not been hiding under a rock, then you are likely familiar lorem lorem lorem orem with ...'
            img={eye}
          />
        </aside>
        <div className='w-2/3'>
          <Services />
        </div>
      </section>
    </>
  );
};

export default ScienceServies;