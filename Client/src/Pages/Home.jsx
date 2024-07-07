import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Roadmaps from '../components/Roadmaps/Roadmaps';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className='w-screen'>
    <Navbar/>
    <Hero/>
    <Roadmaps/>
    <Footer/>
    </div>
  )
}

export default Home
