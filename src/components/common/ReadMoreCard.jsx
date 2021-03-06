import React from 'react';

const ReadMoreCard = ({
  header,
  brief,
  img,
  containerStyle,
  textStyle,
  textBtnContainer,
}) => {
  return (
    <div className={containerStyle}>
      <div className='mb-5'>
        <h2 className='hover:text-red-500 text-4xl font-bold'>{header}</h2>
      </div>
      <div className='flex justify-between'>
        <div className=''>
          <img src={img} alt='' className='w-full h-52' />
        </div>
        <div className={textBtnContainer}>
          <p className={textStyle}>{brief}</p>
          <button
            type='button'
            className='bg-black text-white p-3 mt-5 hover:bg-gray-800'
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreCard;
