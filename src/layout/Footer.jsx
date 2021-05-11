import React from 'react';

const Footer = () => {
  return (
    <section className='p-3 px-16 text-white bg-gray-900 flex justify-between text-lg'>
      <samll>&copy; All Rights Reserved - clapway.com</samll>
      <ul className=''>
        <a href='#' className=' hover:text-red-500 mr-8'>
          Home
        </a>
        <a href='#' className='hover:text-red-500 mr-8'>
          About
        </a>
        <a href='#' className='hover:text-red-500 mr-8'>
          Contact Us
        </a>
        <a href='#' className='hover:text-red-500 mr-8'>
          Privacy Policy
        </a>
        <a href='#' className='hover:text-red-500 mr-8'>
          Terms of Use
        </a>
      </ul>
    </section>
  );
};

export default Footer;
