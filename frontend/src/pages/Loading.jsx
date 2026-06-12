import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

const Loading = (props) => {
  const pageRef = useRef(null);
  const loaderRef = useRef(null);
  useGSAP(function () {
    const tl = gsap.timeline();
    if (props.once) {
      tl.to(".stair", {
        delay: 1,
        y: "100%",
        stagger: {
          amount: -0.3,
        },
      });
    } else {
      tl.from(".stair", {
        height: 0,
        stagger: {
          amount: -0.3,
        },
      });
      tl.to(".stair", {
        delay: 2,
        y: "100%",
        stagger: {
          amount: -0.3,
        },
      });
    }
    tl.from(
      pageRef.current,
      {
        scale: 1.15,
        duration: 1.5,
        ease: "power3.out",
        transformOrigin: "center center",
      },
      "-=0.8",
    );
    tl.set(loaderRef.current, {
      display: "none",
    });
  });
  return (
    <div className="overflow-hidden">
      <div ref={loaderRef} className="flex h-screen w-full fixed z-20">
        <div className="stair h-screen w-1/5 bg-[#111] "></div>
        <div className="stair h-screen w-1/5 bg-[#111] "></div>
        <div className="stair h-screen w-1/5 bg-[#111] "></div>
        <div className="stair h-screen w-1/5 bg-[#111] "></div>
        <div className="stair h-screen w-1/5 bg-[#111] "></div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Loading;
