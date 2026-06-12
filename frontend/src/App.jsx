import React from 'react'
import Hero from './pages/Hero'
import Loading from './pages/Loading'

const App = () => {
  return (
    <div className='selection:text-black selection:bg-[#E56E3A]'>
      <Loading once='true'>
        <Hero />
      </Loading>
    </div>
  )
}

export default App