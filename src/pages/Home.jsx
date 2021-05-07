import React from 'react';
import Header from '../layout/Header';
import ScienceSection from '../layout/ScienceServices';

const Home = () => {
  return (
    <div className='container md:px-20 mx-auto'>
      <Header />
      <ScienceSection />
    </div>
  );
};

export default Home;
