import React from 'react';
import Effective from '../components/Effective';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImSearch } from 'react-icons/im';

const Header = () => {
  return (
    <div className='mb-20'>
      <Logo />
      <GiHamburgerMenu />
      <ImSearch />

      <Navbar />
      <Effective />
    </div>
  );
};

export default Header;
