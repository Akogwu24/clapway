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

      <ul className='flex justify-between items-center w-2/5'>
        {listItems.map((item) => (
          <li className='middle'>
            <a href='/'> {item} </a>
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
      <ul>
        <a href='/' className='mr-40'>
          FFEATURED
        </a>
      </ul>
      <HiOutlineSearch className='ml-40 hidden md:block' />
    </nav>
  );
};

export default Navbar;
