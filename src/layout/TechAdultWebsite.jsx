import React from 'react';
import Tech from '../components/Tech';
import Website from '../components/Website';
import Adult from '../components/Adult';

const TechAdultWebsite = () => {
  return (
    <section
      className='md:flex justify-between border-t-2
    pt-20 my-20 gap-14'
    >
      <Tech />
      <Adult />
      <Website />
    </section>
  );
};

export default TechAdultWebsite;
