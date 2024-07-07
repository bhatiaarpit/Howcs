import React from 'react'
import { image2 } from '../../constants'

const Abouthero = () => {
  return (
    <div>
       <div className='text-center pt-24 md:pt-32'>
        <h1 className='text-4xl md:text-6xl text-violet-300'>About Us</h1>
       </div>
       <div className='hero md:flex '>
      <div className='hero-left md:m-24 md:ml-48  md:w-1/3'>
        <div className=' mx-12 md:mt-4 text-white text-xs md:text-xl md:m-0 text-center md:text-left'>
          <span className='text-3xl'>We</span> are a passionate group of developers committed to making a difference for students entering the field of computer science. Our mission is to guide students in discovering their interests and making a meaningful impact in this ever-evolving technological landscape. HowCS addresses the challenges faced by tech newcomers, providing them with a clear and free learning path, so they can navigate their journey without confusion.
        </div>
      </div>
      <div className="shadow heroimg md:mt-8 mt-6  p-12 pt-0">
          <img src={image2} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Abouthero
