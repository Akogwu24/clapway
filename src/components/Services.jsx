import React from 'react';
import Card from './common/Card';
import writer from '../assets/images/writer.jpg';

const Services = () => {
  const cardComponents = [1, 2, 3, 4, 5, 6];

  return (
    <div className=''>
      <h2>Services</h2>
      <main className='grid grid-cols-3 gap-4'>
        {cardComponents.map((cardComponent) => (
          <Card img={writer} />
        ))}
      </main>
    </div>
  );
};

export default Services;
