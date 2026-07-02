import React from 'react'

const FormInfo = () => {
  return (
    <div className='w-full lg:w-[43%] border-neutral-400/50 border-b lg:border-b-0 lg:border-r pb-8 lg:pb-0 lg:pr-12 lg:mr-16 shrink-0'>
      <div className='h-full w-full max-w-xl py-6 sm:py-10 lg:py-20 px-2 lg:px-6 flex flex-col gap-4 sm:gap-6 lg:gap-9'>
        <a className='w-fit text-xs sm:text-[0.9rem] font-[poppins] bg-[#d1cec6] py-1 px-3 rounded-full font-medium'>How it works</a>
        <h1 className='text-4xl sm:text-6xl lg:text-8xl font-[poppins] text-black leading-tight lg:leading-none'>Let's get<br/>started</h1>
        <p className='text-lg sm:text-xl lg:text-2xl text-[#96938f] font-light leading-relaxed'>Ready to streamline your hiring process? Fill out the form and we'll rank candidates based on your job requirements.</p>
      </div>
    </div>
  )
}

export default FormInfo