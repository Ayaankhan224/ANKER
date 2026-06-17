import React, { createContext, useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Create context for transitions
const TransitionContext = createContext(null);

// Custom hook to use the transition context
export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
};

// Reusable link component that intercepts clicks to run the transition animation
export const TransitionLink = ({ to, children, className, ...props }) => {
  const { transitionTo } = useTransition();

  const handleClick = (e) => {
    e.preventDefault();
    transitionTo(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

// Main Loading Wrapper / Provider
const Loading = ({ children }) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pageRef = useRef(null);
  const loaderRef = useRef(null);

  // Helper to trigger the cover and reveal transition
  const transitionTo = (path) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // Ensure the loader container is visible
    gsap.set(loaderRef.current, { display: "flex" });

    const tl = gsap.timeline({
      onComplete: () => {
        // Navigate to the new page once screen is fully covered
        navigate(path);

        // Allow a tiny delay for React to mount the new route behind the cover
        setTimeout(() => {
          // Prepare the new page wrapper scale before reveal
          gsap.set(pageRef.current, { scale: 1.15 });

          const revealTl = gsap.timeline({
            onComplete: () => {
              // Hide the loader container after animation finishes
              gsap.set(loaderRef.current, { display: "none" });
              setIsTransitioning(false);
            },
          });

          // Animate the stairs going down (yPercent: 0 -> 100)
          revealTl.to(".stair", {
            yPercent: 100,
            duration: 0.8,
            ease: "power3.inOut",
            stagger: {
              amount: 0.3,
            },
          });

          // Scale the new page down to normal scale (1.15 -> 1)
          revealTl.to(
            pageRef.current,
            {
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
            },
            "-=0.6" // start slightly before stairs finish moving down
          );
        }, 50);
      },
    });

    // Animate the stairs going up from the bottom (yPercent: 100 -> 0)
    tl.set(".stair", { yPercent: 100 });
    tl.to(".stair", {
      yPercent: 0,
      duration: 0.8,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  // Play an initial entry animation on first load (e.g. going to Home page)
  useGSAP(() => {
    gsap.set(loaderRef.current, { display: "flex" });
    gsap.set(".stair", { yPercent: 0 }); // start covered
    gsap.set(pageRef.current, { scale: 1.15 });

    const entryTl = gsap.timeline({
      onComplete: () => {
        gsap.set(loaderRef.current, { display: "none" });
      },
    });

    entryTl.to(".stair", {
      yPercent: 100,
      duration: 0.8,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });

    entryTl.to(
      pageRef.current,
      {
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.6"
    );
  }, []);

  return (
    <TransitionContext.Provider value={{ transitionTo, isTransitioning }}>
      <div className="overflow-hidden min-h-screen relative w-full">
        {/* Stairs Overlay (stays mounted globally) */}
        <div
          ref={loaderRef}
          className="flex h-screen w-full fixed inset-0 z-50 pointer-events-none"
          style={{ display: "none" }}
        >
          <div className="stair h-screen w-1/5 bg-[#111]"></div>
          <div className="stair h-screen w-1/5 bg-[#111]"></div>
          <div className="stair h-screen w-1/5 bg-[#111]"></div>
          <div className="stair h-screen w-1/5 bg-[#111]"></div>
          <div className="stair h-screen w-1/5 bg-[#111]"></div>
        </div>

        {/* Page Container */}
        <div ref={pageRef} className="w-full min-h-screen origin-center">
          {children}
        </div>
      </div>
    </TransitionContext.Provider>
  );
};

export default Loading;
