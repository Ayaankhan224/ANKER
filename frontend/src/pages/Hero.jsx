import React from 'react'
import Navbar from '../components/Hero/Navbar'
import HeroText from '../components/Hero/HeroText'
import HeroBottom from '../components/Hero/HeroBottom'

const Hero = () => {
  return (
    <div className='back p-6 flex flex-col min-h-screen relative overflow-hidden'>
      <Navbar />
      <HeroText />
      <HeroBottom />
    </div>
  )
}

export default Hero