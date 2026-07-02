import React from 'react'

const Info = () => {
  return (
    <div className='w-full py-10 md:py-16 px-6 sm:px-12 md:px-20 flex flex-col gap-3 justify-center bg-[#F1EEEA]/50 border-b border-neutral-900/10 shrink-0'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl font-[poppins] font-extrabold text-neutral-900 tracking-tighter'>
        GET IN TOUCH
      </h1>
      <p className='text-sm sm:text-base text-neutral-600 font-[poppins] max-w-xl leading-relaxed'>
        Have questions about ANKER, custom plans, or ranking insights? Drop us a message and we'll reach back to you shortly.
      </p>
    </div>
  )
}

export default Info