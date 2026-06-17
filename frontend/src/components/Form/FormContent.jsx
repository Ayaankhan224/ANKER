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
    <form className="w-full max-w-[650px] space-y-1 flex flex-col gap-">
      {/* Job Title */}
      <div>
        <label className="block text-sm mb-2 uppercase tracking-wider text-neutral-500 font-[poppins] font-bold">
          Job Title
        </label>
        <input
          type="text"
          placeholder="Frontend Developer"
          className="w-full border-b border-[#d7d1c5] bg-transparent pb-4 text-2xl outline-none placeholder:text-neutral-400"
        />
      </div>

      {/* Job Description */}
      <div>
        <label className="font-[poppins] font-bold *:block text-sm mb-2 uppercase tracking-wider text-neutral-500">
          Job Description
        </label>
        <textarea
          rows={3}
          placeholder="Paste the complete job description here..."
          className="w-full resize-none border-b border-[#d7d1c5] bg-transparent pb-4 text-lg outline-none placeholder:text-neutral-400"
        />
      </div>

      {/* Upload Resumes */}
      <div>
        <label className="block text-sm mb-4 uppercase tracking-wider text-neutral-500">
          Upload Resumes
        </label>

        <label className="flex items-center justify-center h-40 border-2 border-dashed border-[#d7d1c5] rounded-3xl cursor-pointer hover:border-[#E67A3C] transition-all">
          <div className="text-center">
            <p className="text-lg font-medium">Upload PDF / DOCX /CSV Files</p>
            <p className="text-sm text-neutral-500 mt-1">
              Multiple files supported
            </p>
          </div>

          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx"
            className="hidden"
          />
        </label>
      </div>

      {/* Experience */}
      <div>
        <h3 className="mb-4 text-xl font-medium">Required Experience</h3>

        <div className="flex flex-wrap gap-3">
          {["0-2 Years", "2-5 Years", "5+ Years"].map((item) => (
            <label key={item} className="cursor-pointer">
              <input type="radio" name="experience" className="hidden peer" />

              <div className="rounded-full border border-[#d7d1c5] px-6 py-3 transition-all duration-300 peer-checked:bg-black peer-checked:text-white">
                {item}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Top Candidates */}
      <div>
        <h3 className="mb-4 text-xl font-medium">Candidates to Shortlist</h3>

        <div className="flex gap-3">
          {[5, 10, 15, 20, 50].map((item) => (
            <label key={item} className="cursor-pointer">
              <input
                type="radio"
                name="topCandidates"
                className="hidden peer"
              />

              <div className="font-[poppins] rounded-full border border-[#d7d1c5] px-6 py-3 transition-all duration-300 peer-checked:bg-black peer-checked:text-white">
                Top {item}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="relative overflow-hidden mt-6 bg-[#111] text-white px-10 py-5 text-lg rounded-full cursor-pointer hover:scale-105 duration-150"
      >
        <span className="font-[poppins] font-bold relative z-10">GENERATE SHORTLIST →</span>

        <div
          ref={fillRef}
          className="absolute inset-0 bg-[#E67A3C] origin-bottom scale-y-0"
        />
      </button>
    </form>
  );
};

export default FormContent;
