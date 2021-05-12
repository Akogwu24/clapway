import React from 'react';

import { FiChevronDown } from 'react-icons/fi';
import { HiOutlineSearch } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = ({ navStyle }) => {
  const listItems = ['SCIENCE', 'CRYPTO', 'GAMES', 'CANNABIS', 'SERVICES'];

  return (
    <nav className={navStyle}>
      <ul className='dropdown '>
        <li className='dropbtn flex items-center'>
          <Link href='/'>ALL</Link>
          <FiChevronDown color='white font-bold ml-2' />
        </li>
        <li className='dropdown-content text-black shadow-md'>
          <Link href='/'>NEWS</Link>
          <Link href='/'>TIPS</Link>
          <Link href='/'>TOP LISTS</Link>
          <Link href='/'>REVIEWS</Link>
        </li>
      </ul>

      <ul className='flex-col flex py-5 md:py-0 md:flex-row justify-between items-center  md:w-2/5 '>
        {listItems.map((item, index) => (
          <li key={index} className='middle py-5 md:py-0'>
            <Link href='/'>{item}</Link>
          </li>
        ))}
      </ul>

      <ul className='dropdown flex'>
        <li className='dropbtn flex items-center'>
          <Link href='/'>OTHER</Link>
          <FiChevronDown className='ml-2' />
        </li>
        <li className='dropdown-content text-black shadow-md'>
          <Link href='/'>WEBSITE</Link>
          <Link href='/'>BRAND</Link>
          <Link href='/'>TECH</Link>
          <Link href='/'>SOCILA</Link>
          <Link href='/'>ADULT</Link>
        </li>
      </ul>
      <ul className='absolute md:-bottom-5 md:left-12 lg:static  mt-7 md:mt-0 '>
        <Link href='/' className='ml-40 '>
          FFEATURED
        </Link>
      </ul>
      <HiOutlineSearch className='ml-40 hidden md:block' />
    </nav>
  );
};

export default Navbar;
