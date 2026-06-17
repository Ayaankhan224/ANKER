import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IconContext } from "react-icons";
import { TransitionLink } from "../../pages/Loading";

const Back = () => {
  return (
    <TransitionLink to='/'>
      <div className="flex items-center gap-2">
        <IconContext.Provider value={{ color: "black" }}>
          <div>
            <FaArrowLeft />
          </div>
        </IconContext.Provider>
        <span className="text-black text-2xl font-[poppins]">Back</span>
      </div>
    </TransitionLink>
  );
};

export default Back;
