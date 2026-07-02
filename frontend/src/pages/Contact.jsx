import React, { useRef } from "react";
import Info from "../components/Contact/Info";
import gsap from "gsap";
import { GoArrowDownLeft } from "react-icons/go";

const Contact = () => {
  const btn = useRef(null);

  const handleEnter = () => {
    gsap.to(".btn", {
      x: 60,
      scale: 4,
      duration: 0.8,
      backgroundColor: "#111",
      rotate: 180,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(".btn", {
      x: 0,
      scale: 1,
      duration: 0.8,
      backgroundColor: "#fff",
      rotate: -180,
      ease: "power3.out",
    });
  };

  const handleClick = () => {
    gsap.timeline({
      repeat: 5,
      onComplete: () =>{
        gsap.to
      }
    })
    .to(".letter", {
      y: -20,
      stagger: {
        each: 0.05,
      },
      duration: 0.25,
      ease: "sine.out",
    })
    .to(
      ".letter",
      {
        y: 0,
        stagger: {
          each: 0.05,
        },
        duration: 0.25,
        ease: "sine.in",
      },
      0.1
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-[poppins] bg-[#F9F2E0]">
      <Info />
      <div className="w-full flex flex-col md:flex-row flex-grow">
        <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-[60%] p-6 sm:p-10 md:p-12 lg:p-16 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start self-center">
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-sm sm:text-base text-neutral-800 uppercase tracking-wider">Name</label>
            <input
              className="bg-neutral-200/80 p-3.5 px-5 rounded-full outline-none focus:ring-2 focus:ring-[#E56E3A] transition-all text-sm sm:text-base"
              type="text"
              placeholder="Your full name"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-sm sm:text-base text-neutral-800 uppercase tracking-wider">Email</label>
            <input
              className="bg-neutral-200/80 p-3.5 px-5 rounded-full outline-none focus:ring-2 focus:ring-[#E56E3A] transition-all text-sm sm:text-base"
              type="text"
              placeholder="you@example.com"
            />
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-sm sm:text-base text-neutral-800 uppercase tracking-wider">Phone Number</label>
            <input
              className="bg-neutral-200/80 p-3.5 px-5 rounded-full outline-none focus:ring-2 focus:ring-[#E56E3A] transition-all text-sm sm:text-base"
              type="text"
              placeholder="+91 8281978161"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-semibold text-sm sm:text-base text-neutral-800 uppercase tracking-wider">Preferred Date</label>
            <input
              className="bg-neutral-200/80 p-3.5 px-5 rounded-full outline-none focus:ring-2 focus:ring-[#E56E3A] transition-all text-sm sm:text-base"
              type="text"
              placeholder="dd/mm/yyyy"
            />
          </div>
          
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label className="font-semibold text-sm sm:text-base text-neutral-800 uppercase tracking-wider">How to contact you?</label>
            <select
              className="font-semibold bg-neutral-200/80 p-3.5 px-5 rounded-full outline-none focus:ring-2 focus:ring-[#E56E3A] transition-all text-sm sm:text-base"
              name="contact"
            >
              <option>Email</option>
              <option>Call</option>
            </select>
          </div>
          
          <div className="sm:col-span-2 mt-4">
            <div
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              onClick={handleClick}
              className="rounded-full flex items-center gap-7 bg-black text-white w-fit py-3.5 px-6 cursor-pointer text-xl sm:text-2xl font-[poppins] hover:scale-102 duration-150 transition-transform"
            >
              <div className="btnText">
                {"Submit".split("").map((char, i) => (
                  <span key={i} className="letter inline-block">
                    {char}
                  </span>
                ))}
              </div>
              <div className="btn bg-white h-4 w-4 rounded-full overflow-hidden flex justify-center items-center">
                <GoArrowDownLeft className="text-black text-xs" />
              </div>
            </div>
          </div>
        </form>
        
        <div className="w-full md:w-[40%] p-6 sm:p-10 md:p-12 lg:p-16 flex justify-center items-center shrink-0 min-h-[300px] md:min-h-0">
          <div className="h-[250px] md:h-full w-full bg-[url(/contact-img.jpg)] bg-cover bg-center rounded-3xl shadow-lg border border-neutral-900/10"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
