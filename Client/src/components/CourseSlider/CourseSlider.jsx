import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { Programming_Resource } from '../../constants';


const CourseSlider = () => {
  return (
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
                  spaceBetween: 10,
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
                <SwiperSlide key={CourseName} className='ml-10 m-2 md:m-4' >
                  <div className='navdrop bg-[#865eff] border-2 border-white w-[250px] h-[250px] text-black rounded-xl mb-8 md:w-[300px] md:h-[300px] flex flex-col transform transition-transform duration-300 hover:scale-105'>
                    <div className='rounded-xl m-3 bg-white  flex justify-center items-center h-1/1'>
                      <img src={Img} alt={CourseName} />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 p-4 h-1/3'>
                      <p className='text-xl font-semibold text-white'>{CourseName}</p>
                      {/* <p className='text-l font-medium'>{InstructorName}</p> */}
                      <button className=' border-2 border-white  text-white text-lg px-6 py-1 rounded-xl  transition-colors duration-300 bg-indigo-500'>{Btn}</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
  )
}

export default CourseSlider