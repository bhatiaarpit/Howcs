import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Roadmaps from '../components/Roadmaps/Roadmaps';
import Footer from '../components/Footer/Footer';
// import Features from '../components/Features/Features';

const Home = () => {
  return (
    <div className='w-screen'>
    <Navbar/>
    <Hero/>
    <Roadmaps/>
    {/* <Features/> */}
    <Footer/>
    </div>
  )
}

export default Home
