import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IconContext } from "react-icons";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-between">
      <h1 className="font-[oran] text-4xl font-semibold leading-9">
        99
        <br />
        Little
        <br />
        Bugs
      </h1>
      <div className="flex items-start gap-2">
        <IconContext.Provider value={{ color:"white", size: "1.5em" }}>
          <div onClick={()=>{setOpen(true)}} className="bg-black rounded-full p-2 cursor-pointer hover:scale-110 duration-100 ease-in">
            <IoIosMenu />
          </div>
        </IconContext.Provider>
        <h3 className="text-white font-[poppins] bg-[#E56E3A] py-2 px-5 rounded-full tracking-wider cursor-pointer hover:scale-110 duration-100 ease-in">SOURCE</h3>
      </div>

      <div className={`h-screen w-2/5 fixed right-0 top-0 backdrop-blur-2xl bg-[#0000006a] transition-transform duration-300 ease-in ${
      open ? "translate-x-0" : "translate-x-full"
      }`}>
        <IconContext.Provider value={{ color:"white", size: "2.5em" }}>
          <div onClick={()=>{setOpen(false)}} className="bg-transparent rounded-full p-2 cursor-pointer fixed right-0 p-10">
            <RxCross2 />
          </div>
        </IconContext.Provider>
        <div className="text-white font-[poppins] h-full w-full pl-15 flex flex-col justify-center gap-24 text-4xl shadow-[-20px_0_40px_rgba(0,0,0,0.4)]">
          <h2 className="cursor-pointer">ABOUT</h2>
          <h2 className="cursor-pointer">HOW IT WORKS</h2>
          <h2 className="cursor-pointer">FEEDBACK</h2>
          <h2 className="cursor-pointer">CONTACT</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
