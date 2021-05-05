import React from 'react';
import Effective from '../components/Effective';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';

const Header = () => {
  return (
    <div>
      <Logo />
      <Navbar />
      <Effective />
    </div>
  );
};

export default Header;
