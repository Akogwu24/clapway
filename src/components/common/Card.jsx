import React from 'react';

const Card = ({ img, text, className }) => {
  return (
    <section className={className}>
      <div className='mb-10 '>
        <img src={img} alt='bulb' className='w-full' />
      </div>
      <div>
        <h4 className='text-5xl font-bold hover:text-red-500 sm:text-center'>
          {text}
        </h4>
      </div>
    </section>
  );
};

export default Card;
