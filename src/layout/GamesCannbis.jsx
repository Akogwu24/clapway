import React from 'react';
import Cannabis from '../components/Cannabis';
import Games from '../components/Games';

const GamesCannbis = () => {
  return (
    <section className='flex justify-between border-t-2 py-20 border-b-2'>
      <Games />
      <Cannabis />
    </section>
  );
};

export default GamesCannbis;
