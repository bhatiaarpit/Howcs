import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Abouthero from '../components/About-Hero/Abouthero'
import Team from '../components/Team/Team';
import Footer from '../components/Footer/Footer';
const About = () => {
  return (
    <div>
      <Navbar/>
      <Abouthero/>
      {/* <Team/> */}
      <Footer/>
    </div>
  )
}

export default About
