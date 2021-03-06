import React from 'react';
import Crypto from '../layout/Crypto';
import GamesCannbis from '../layout/GamesCannbis';
import Header from '../layout/Header';
import ScienceSection from '../layout/ScienceServices';
import TechAdultWebsite from '../layout/TechAdultWebsite';
import Brands from '../layout/Brands';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <div className='container px-5 md:px-0 lg:px-5 mx-auto'>
      <Header />
      <ScienceSection />
      <Crypto />
      <GamesCannbis />
      <TechAdultWebsite />
      <Brands />
      <Footer />
    </div>
  );
};

export default Home;
