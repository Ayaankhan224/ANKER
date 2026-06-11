import React from 'react'
import Navbar from '../components/Navbar'
import HeroText from '../components/HeroText'
import HeroBottom from '../components/HeroBottom'
import BottomCircle from '../components/BottomCircle'

const Hero = () => {
  return (
    <div className='p-6 flex flex-col min-h-screen relative overflow-hidden'>
      <Navbar />
      <HeroText />
      <HeroBottom />
      <BottomCircle />
    </div>
  )
}

export default Hero