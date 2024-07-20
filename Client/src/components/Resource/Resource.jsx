import React from 'react';
import CourseSlider from '../CourseSlider/CourseSlider';


const Resource = () => {
  return (
    <div className='resource pt-24 md:pt-24'>
      <div className='text-center'>
        <h1 className='text-5xl md:text-8xl opacity-80 text-violet-300 font-montserrat-extrabold font-black tracking-tighter'>Resources</h1>
        <div className='section'>
          <p className='md:text-5xl text-S p-10 md:pb-2 pb-3 md:p-48 md:pt-2 pt-0 mt-6 text-white font-montserrat-semibold'>
            BEST FREE RESOURCES FOR LEARNING <br /> PROGRAMMING LANGUAGES
          </p>
          <CourseSlider/>
        </div>
        <div className='section'>
          <p className='md:text-5xl text-S p-10 md:pb-2 pb-3 md:p-48 md:pt-2 pt-0 mt-6 text-white font-montserrat-semibold'>
            BEST FREE RESOURCES FOR LEARNING <br /> WEB DEVELOPMENT
          </p>
          <CourseSlider/>
        </div>
        <div className='section'>
          <p className='md:text-5xl text-S p-10 md:pb-2 pb-3 md:p-48 md:pt-2 pt-0 mt-6 text-white font-montserrat-semibold'>
            BEST FREE RESOURCES FOR LEARNING <br /> APP DEVELOPMENT
          </p>
          <CourseSlider/>
        </div>
        <div className='section'>
          <p className='md:text-5xl text-S p-10 md:pb-2 pb-3 md:p-48 md:pt-2 pt-0 mt-6 text-white font-montserrat-semibold'>
            BEST FREE RESOURCES FOR LEARNING <br /> ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING
          </p>
          <CourseSlider/>
        </div>
      </div>
    </div>
  );
};

export default Resource;
