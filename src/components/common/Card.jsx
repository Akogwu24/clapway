import React from 'react';

const Card = ({
  img,
  text,
  className,
  textStyles,
  imgStyles,
  imageContainer,
}) => {
  return (
    <section className={className}>
      <div className={imageContainer}>
        <img src={img} alt='bulb' className={imgStyles} />
      </div>
      <div>
        <h4 className={textStyles}>{text}</h4>
      </div>
    </section>
  );
};

export default Card;
