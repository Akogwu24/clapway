import React from 'react';

const Card = ({ img, text, className, textStyles }) => {
  return (
    <section className={className}>
      <div className='mb-5'>
        <img src={img} alt='bulb' className='w-full' />
      </div>
      <div>
        <h4 className={textStyles}>{text}</h4>
      </div>
    </section>
  );
};

export default Card;
