import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { Programming_Resource } from '../../constants';

const Resource = () => {
  return (
    <div className='resource pt-24 md:pt-24'>
      <div className='text-center'>
        <h1 className='text-5xl md:text-8xl text-violet-300'>Resources</h1>
        <div className='section'>
          <p className='md:text-5xl text-xs p-10 md:pb-8 pb-3 md:p-48 md:pt-2 pt-0 mt-6 text-white'>
            BEST FREE RESOURCES FOR LEARNING PROGRAMMING LANGUAGES
          </p>
          <div className='w-3/4 m-auto mt-5'>
            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                700: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return `<span class="${className} bg-white"></span>`;
                },
              }}
              modules={[FreeMode, Pagination]}
              className='max-w-full'
            >
              {Programming_Resource.map(({ Img, CourseName, InstructorName, Btn }) => (
                <SwiperSlide key={CourseName}>
                  <div className='bg-white text-black rounded-xl mb-8  md:w-[300px] md:h-[300px] flex flex-col'>
                    <div className='rounded-xl bg-indigo-200 flex justify-center items-center h-1/2'>
                      <img src={Img} alt={CourseName} className='h-44 w-44' />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 p-4 h-1/2'>
                      <p className='text-xl font-semibold'>{CourseName}</p>
                      <p className='text-l font-medium'>{InstructorName}</p>
                      <button className='bg-indigo-300 text-white text-lg px-6 py-1 rounded-xl'>{Btn}</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
