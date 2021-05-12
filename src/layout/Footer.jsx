import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='p-3 px-16 text-white bg-gray-900 flex justify-between text-lg'>
      <samll>&copy; All Rights Reserved - clapway.com</samll>
      <ul className=''>
        <Link to='/' className=' hover:text-red-500 mr-8'>
          Home
        </Link>
        <Link to='/' className='hover:text-red-500 mr-8'>
          About
        </Link>
        <Link to='/' className='hover:text-red-500 mr-8'>
          Contact Us
        </Link>
        <Link to='/' className='hover:text-red-500 mr-8'>
          Privacy Policy
        </Link>
        <Link to='/' className='hover:text-red-500 mr-8'>
          Terms of Use
        </Link>
      </ul>
    </section>
  );
};

export default Footer;
