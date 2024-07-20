import React from 'react';
import { RoadmapTechField } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Roadmaps = () => {
  return (
    <div className='Roadmaps pt-20 md:pt-32 font-montserrat-regular'>
      <div className='text-center'>
        <h1 className='text-5xl md:text-8xl opacity-80 text-violet-300 font-montserrat-extrabold font-black tracking-tighter'>Roadmaps</h1>
        <p className='md:text-2xl text-xs p-10 md:pb-8 pb-3 md:p-48 md:pt-2 pt-0 mt-6 text-white font-montserrat-medium'>
          Before diving into learning computer science, it's essential to understand why you want to pursue it. Computer science has numerous applications, and here are some fields you can work in...
        </p>
      </div>

      <div className="card mt-0 md:m-24 md:mt-0 flex flex-wrap justify-center">
  {RoadmapTechField.map((techfield, index) => (
    <div 
      key={index} 
      className='m-2 md:w-1/5 w-1/3 mx-3 my-3 md:h-80 h-60 border-gray-100 border-2 text-white rounded-lg backdrop-filter backdrop-blur-lg transition-all duration-100 transform hover:shadow-lg hover:shadow-violet-500  hover:scale-105 hover:-translate-y-1'
    >
      <div className="flex flex-col h-full p-0 overflow-hidden">
        <h5 className='md:text-2xl text-sm m-5 mb-0 '>{techfield.field}</h5>
        <div className='mt-auto mb-5 flex-col justify-center '>
          <p className='m-5 mb-0 text-sm transform transition-transform duration-300 hover:scale-105'>
            {techfield.Description} <FontAwesomeIcon icon={faArrowRight} />
          </p>
          <img 
            src={techfield.img} 
            alt={techfield.field} 
            className='w-full h-full mt-0 ' 
          />
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Roadmaps;
