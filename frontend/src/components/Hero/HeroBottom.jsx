import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { TransitionLink } from "../../pages/Loading";

const HeroBottom = () => {
  const fillRef = useRef(null);

  const handleEnter = () => {
    gsap.to(fillRef.current, {
      scaleY: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(fillRef.current, {
      scaleY: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <div className="flex-none font-[poppins] flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-0 mt-auto pb-4">
      <h6 className="text-xs uppercase tracking-widest text-neutral-500 hidden sm:block">CREATED BY</h6>
      <div className="flex gap-4 flex-col min-[375px]:flex-row items-center w-full min-[375px]:w-auto">
        <TransitionLink to="/contact" className="w-full min-[375px]:w-auto text-center">
          <button className="w-full min-[375px]:w-auto border border-[#111] bg-transparent text-[#111] px-6 py-3 mb-0 sm:mb-20 md:mb-32 rounded-full cursor-pointer hover:scale-105 duration-100 ease-in text-sm font-semibold tracking-wider">
            CONTACT US
          </button>
        </TransitionLink>
        <TransitionLink to="/form" className="w-full min-[375px]:w-auto text-center">
          <button
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="w-full min-[375px]:w-auto relative overflow-hidden bg-[#111] text-white px-6 py-3 mb-0 sm:mb-20 md:mb-32 rounded-full cursor-pointer hover:scale-105 duration-100 ease-in text-sm font-semibold tracking-wider"
          >
            <span className="relative z-10">GET STARTED</span>
            <div
              ref={fillRef}
              className="absolute inset-0 bg-[#E67A3C] origin-bottom scale-y-0"
            />
          </button>
        </TransitionLink>
      </div>

      <h6 className="text-xs uppercase tracking-widest text-neutral-500 hidden sm:block">99 LITTLE BUGS</h6>
    </div>
  );
};

export default HeroBottom;
