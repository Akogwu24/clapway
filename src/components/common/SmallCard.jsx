import React from 'react';

const SmallCard = ({ smallImg, smallText, imgstyle }) => {
  return (
    <section className='flex items-center mb-10 md:mx-20'>
      <div className='ml-10 sm:ml-0 sm:w-1/2'>
        <img src={smallImg} alt='writer' className={imgstyle} />
      </div>
      <div className='ml-10 sm:w-full '>
        <h4 className='text-xl font-bold hover:text-red-500 md:text-xl'>
          {smallText}
        </h4>
      </div>
    </section>
  );
};

export default SmallCard;
