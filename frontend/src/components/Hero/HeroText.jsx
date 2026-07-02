import React from "react"

const HeroText = () => {
  return (
    <div className="flex-grow flex flex-col justify-center items-center text-center gap-4 py-12 md:py-20">
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-[oran] tracking-tighter leading-tight lg:leading-none">
        We make <span className="text-[#E56E3A] font-[nycd]">talent</span>
        <br />
        impossible to miss
      </h1>
      <p className="text-sm sm:text-base md:text-[1.2rem] uppercase font-[poppins] tracking-wide mt-2">
        AI-powered candidate ranking
        <br /> with transparent hiring insights
      </p>
    </div>
  )
}

export default HeroText
