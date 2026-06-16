import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { IconContext } from "react-icons";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-between">
      <h1 className="font-[oran] text-4xl font-semibold leading-9">
        ANKER
      </h1>
      <div className="flex items-start gap-2">
        <Link to="/signup"><h3 className="text-white font-[poppins] text-[0.8rem] bg-[#E56E3A] py-2 px-5 rounded-full tracking-wider cursor-pointer hover:scale-110 duration-100 ease-in">SignUp</h3></Link>
        <Link to="/login"><h3 className="text-white font-[poppins] text-[0.8rem] bg-[#111] py-2 px-5 rounded-full tracking-wider cursor-pointer hover:scale-110 duration-100 ease-in">LogIn</h3></Link>
      </div>
    </div>
  );
};

export default Navbar;
