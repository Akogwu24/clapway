import React from 'react';

import { FiChevronDown } from 'react-icons/fi';
import { HiOutlineSearch } from 'react-icons/hi';

const Navbar = ({ navStyle }) => {
  const listItems = ['SCIENCE', 'CRYPTO', 'GAMES', 'CANNABIS', 'SERVICES'];

  return (
    <nav className={navStyle}>
      <ul className='dropdown '>
        <li className='dropbtn flex items-center'>
          <a href='/'>ALL</a>
          <FiChevronDown color='white font-bold ml-2' />
        </li>
        <li className='dropdown-content text-black shadow-md'>
          <a href='/'>NEWS</a>
          <a href='/'>TIPS</a>
          <a href='/'>TOP LISTS</a>
          <a href='/'>REVIEWS</a>
        </li>
      </ul>

      <ul className='flex-col flex py-5 md:py-0 md:flex-row justify-between items-center  md:w-2/5 '>
        {listItems.map((item, index) => (
          <li key={index} className='middle py-5 md:py-0'>
            <a href='/'>{item}</a>
          </li>
        ))}
      </ul>

      <ul className='dropdown flex'>
        <li className='dropbtn flex items-center'>
          <a href='/'>OTHER</a>
          <FiChevronDown className='ml-2' />
        </li>
        <li className='dropdown-content text-black shadow-md'>
          <a href='/'>WEBSITE</a>
          <a href='/'>BRAND</a>
          <a href='/'>TECH</a>
          <a href='/'>SOCILA</a>
          <a href='/'>ADULT</a>
        </li>
      </ul>
      <ul className='absolute md:-bottom-5 md:left-12 lg:static  mt-7 md:mt-0 '>
        <a href='/' className='ml-40 '>
          FFEATURED
        </a>
      </ul>
      <HiOutlineSearch className='ml-40 hidden md:block' />
    </nav>
  );
};

export default Navbar;
