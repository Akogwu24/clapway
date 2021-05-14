import React from 'react';

import { FiChevronDown } from 'react-icons/fi';
import { HiOutlineSearch } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = ({ navStyle }) => {
  return (
    <nav className={navStyle}>
      <ul className='dropdown '>
        <li className='dropbtn flex items-center'>
          <Link to='/'>ALL</Link>
          <FiChevronDown color='white font-bold ml-2' />
        </li>
        <li className='dropdown-content text-black shadow-md'>
          <Link to='/'>NEWS</Link>
          <Link to='/'>TIPS</Link>
          <Link to='/'>TOP LISTS</Link>
          <Link to='/'>REVIEWS</Link>
        </li>
      </ul>

      <ul className='flex-col flex py-5 md:py-0 md:flex-row justify-between items-center  md:w-2/5 '>
        <li>
          <Link to='/science'>SCIENCE</Link>
        </li>
        <li>
          <Link to='/crypto'>CRYPTO</Link>
        </li>
        <li>
          <Link to='/games'>GAMES</Link>
        </li>
        <li>
          <Link to='/cannabis'>CANNABIS</Link>
        </li>
        <li>
          <Link to='/services'>SERVICES</Link>
        </li>
      </ul>

      <ul className='dropdown flex'>
        <li className='dropbtn flex items-center'>
          <Link to='/'>OTHER</Link>
          <FiChevronDown className='ml-2' />
        </li>
        <li className='dropdown-content text-black shadow-md'>
          <Link to='/'>WEBSITE</Link>
          <Link to='/'>BRAND</Link>
          <Link to='/'>TECH</Link>
          <Link to='/'>SOCILA</Link>
          <Link to='/'>ADULT</Link>
        </li>
      </ul>
      <ul className='absolute md:-bottom-5 md:left-12 lg:static  mt-7 md:mt-0 '>
        <Link to='/featured' className='ml-40 '>
          FFEATURED
        </Link>
      </ul>
      <HiOutlineSearch className='ml-40 hidden md:block' />
    </nav>
  );
};

export default Navbar;
