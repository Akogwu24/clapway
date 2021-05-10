import React from 'react';
import Crypto from '../layout/Crypto';
import GamesCannbis from '../layout/GamesCannbis';
import Header from '../layout/Header';
import ScienceSection from '../layout/ScienceServices';

const Home = () => {
  return (
    <div className='container md:px-20 mx-auto'>
      <Header />
      <ScienceSection />
      <Crypto />
      <GamesCannbis />
    </div>
  );
};

export default Home;
