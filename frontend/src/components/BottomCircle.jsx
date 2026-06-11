import React from "react";
import { useRef } from "react";
import gsap from "gsap";

const BottomCircle = () => {
  const circleRef = useRef();
  const expandCircle = () => {
    gsap.to(circleRef.current, {
      width: "250vmax",
      height: "250vmax",
      left: "50%",
      top: "50%",
      xPercent: -50,
      yPercent: -50,
      duration: 1.2,
      ease: "power4.inOut",
    });
  };
  return (
    <div
      ref={circleRef}
      onClick={expandCircle}
      className="cursor-pointer hover:scale-102 absolute h-130 w-130 rounded-full bg-[#111111] left-1/2 -translate-x-1/2 top-[42vw]"
    ></div>
  );
};

export default BottomCircle;
