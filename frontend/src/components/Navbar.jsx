import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IconContext } from "react-icons";
import _CustomBounce from "gsap/CustomBounce";

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

      <div className={`h-screen w-2/5 fixed right-0 top-0 bg-black transition-transform duration-300 ease-in ${
      open ? "translate-x-0" : "translate-x-full"
      }`}>
        <button onClick={()=>{setOpen(false)}} className='bg-[#fff]'>hellloooo</button>
      </div>
    </div>
  );
};

export default Navbar;
