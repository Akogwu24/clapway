import React from 'react';
import Cannabis from '../components/Cannabis';
import Games from '../components/Games';

const GamesCannbis = () => {
  return (
    <section className='flex justify-between'>
      <Games />
      <Cannabis />
    </section>
  );
};

export default GamesCannbis;
