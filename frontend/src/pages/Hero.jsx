import React from 'react'
import Navbar from '../components/Hero/Navbar'
import HeroText from '../components/Hero/HeroText'
import HeroBottom from '../components/Hero/HeroBottom'
import Creators from './Creators'

const Hero = () => {
  return (
    <>
    <div className='min-h-screen w-full p-6 flex flex-col relative overflow-x-hidden'>
      <Navbar />
      <HeroText />
      <HeroBottom />
    </div>
    <Creators />
    </>
  )
}

export default Hero