import React from 'react';

import Card from './common/Card';
import SmallCard from './common/SmallCard';
import crypto from '../assets/images/crypto-image.jpg';

const Tech = () => {
  return (
    <div>
      <h1>Tech</h1>
      <div>
        <Card
          img={crypto}
          text='How to Find the Crypto Trading Platform of Your Dreams'
        />
      </div>
      <div>
        <SmallCard />
      </div>
    </div>
  );
};

export default Tech;
