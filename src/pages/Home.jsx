import React from 'react';
import Crypto from '../layout/Crypto';
import GamesCannbis from '../layout/GamesCannbis';
import Header from '../layout/Header';
import ScienceSection from '../layout/ScienceServices';
import TechAdultWebsite from '../layout/TechAdultWebsite';

const Home = () => {
  return (
    <div className='container md:px-20 mx-auto'>
      <Header />
      <ScienceSection />
      <Crypto />
      <GamesCannbis />
      <TechAdultWebsite />
    </div>
  );
};

export default Home;
