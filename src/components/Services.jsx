import React from 'react';
import Card from './common/Card';
import writer from '../assets/images/writer.jpg';
import exam from '../assets/images/Exam.jpg';
import sitting from '../assets/images/sitting.jpg';
import writer2 from '../assets/images/writer2.jpg';
import mobile from '../assets/images/Mobile-Payment.jpg';
import psy from '../assets/images/psy.jpg';

const Services = () => {
  const cardComponents = [writer, exam, sitting, writer2, mobile, psy];

  const text = [
    'Essay Writing Service Price and the Factors That Influence It',
    'Why Essay Writing Can Help Students With Self-Knowledge',
    'How to Pass Summer Exams During a Pandemic',
    'Creating an Optimized Writing Plan for a Week',
    'Choosing the Right POS System for Your Auto Repair Shop',
    'How Does Psychology Essay Writing Help Students Realize They Have Their Own Psychological Issues?',
  ];

  return (
    <div className='services-container h-full'>
      <main className='md:grid grid-cols-3 gap-8 w-full text-xl'>
        {cardComponents.map((cardComponent, index) => (
          <Card
            key={index}
            img={cardComponent}
            text={text[index]}
            textStyles='text-2xl font-medium hover:text-red-500'
            className='flex md:flex-col justify-between gap-10 md:gap-0'
            imgStyles=''
            imageContainer='bg-blue-700 mb-10'
          />
        ))}
      </main>
    </div>
  );
};

export default Services;
