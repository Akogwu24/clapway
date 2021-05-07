import React, { useState } from 'react';
import Effective from '../components/Effective';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImSearch } from 'react-icons/im';
import { FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Header = () => {
  const [click, setClick] = useState(false);
  const [navDisplay, setNavDisplay] = useState('hidden');

  const handleClick = () => {
    setClick(!click);
    setNavDisplay(!navDisplay);
  };

  return (
    <div className='mb-20'>
      <IconContext.Provider value={{ size: '3rem' }}>
        <div className='flex justify-between my-10 md:justify-start'>
          <div onClick={handleClick}>
            {click ? (
              <GiHamburgerMenu className='md:hidden' />
            ) : (
              <FaTimes className='md:hidden' />
            )}
          </div>
          <Logo className='mr-0' />
          <ImSearch className='md:hidden' />
        </div>
      </IconContext.Provider>

      <Navbar
        navStyle={
          navDisplay
            ? 'absolute z-10 h-4/5 w-1/2 md:w-full md:h-auto md:relative md:flex justify-around items-center font-bold bg-black text-white mb-24 text-center md:text-auto'
            : 'hidden'
        }
      />
      <Effective />
    </div>
  );
};

export default Header;
