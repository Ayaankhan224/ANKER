import React, { useRef } from "react";
import gsap from "gsap";

const FormContent = () => {
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
    <div className="w-[57%]">
      <div className="w-full max-w-4xl mx-auto h-full flex items-center justify-start ">
        <form className="w-full max-w-[740px] space-y-8">
          <div>
            <input
              type="text"
              placeholder="Job Title *"
              className="w-full border-b border-[#d7d1c5] bg-transparent pb-5 text-lg outline-none placeholder:text-neutral-500"/>
          </div>
          <div>
            <textarea
              rows={3}
              placeholder="Paste the Job Description *"
              className=" w-full resize-none border-b border-[#d7d1c5] bg-transparent pb-5 text-lg outline-none placeholder:text-neutral-500 "/>
          </div>
          <div>
            <h3 className="mb-5 text-2xl font-medium">Required Experience</h3>
            <div className="flex flex-wrap gap-3">
              {["0-2 Years", "2-5 Years", "5+ Years"].map((item) => (
                <label key={item} className="cursor-pointer">
                  <input
                    type="radio"
                    name="experience"
                    className="hidden peer"
                  />
                  <div className="rounded-full border border-[#d7d1c5] px-7 py-4 text-lg transition-all duration-300 peer-checked:bg-[#111] peer-checked:text-white peer-checked:border-[#111]">
                    {item}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-2xl font-medium">Work Mode</h3>
            <div className="flex flex-wrap gap-3">
              {["Remote", "Hybrid", "Onsite"].map((item) => (
                <label key={item} className="cursor-pointer">
                  <input type="radio" name="workmode" className="hidden peer" />
                  <div
                    className="rounded-full border border-[#d7d1c5] px-7 py-4 text-lg transition-all duration-300 peer-checked:bg-[#111] peer-checked:text-white peer-checked:border-[#111]">
                    {item}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="relative overflow-hidden mt-4 bg-[#111] text-white px-10 py-5 text-lg rounded-4xl cursor-pointer hover:scale-105 duration-100 ease-in">
            <span className="relative z-10">GENERATE SHORTLIST →</span>
            <div
              ref={fillRef}
              className="absolute inset-0 bg-[#E67A3C] origin-bottom scale-y-0"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContent;
