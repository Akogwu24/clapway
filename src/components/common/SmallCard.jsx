import React from 'react';

const SmallCard = ({ smallImg, smallText, imgstyle }) => {
  return (
    <section className='flex items-center  mb-10 mr-20'>
      <div>
        <img src={smallImg} alt='writer' className={imgstyle} />
      </div>
      <div className='ml-10'>
        <h4 className='text-xl font-bold'>{smallText}</h4>
      </div>
    </section>
  );
};

export default SmallCard;
