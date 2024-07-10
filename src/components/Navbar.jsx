import React from "react";
import { FaBell, FaCaretDown } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 pl-[75px] w-screen h-[80px] z-11  flex justify-between px-10 items-center">
      <div>
        <img src="/assets/images/logo-main.png" alt="" className="sr-only" />
      </div>
      <div className="flex gap-4">
        <div className="w-11 h-11 rounded-full border border-[#EDF1FA] flex justify-center items-center gray-shadow">
          <i className="text-white text-xl"><FaBell/></i>
        </div>
        <div className="w-40 h-11 bg-[#010101] text-white flex justify-between items-center font-poppins border cursor-pointer border-[#EDF1FA] gray-shadow rounded-full pr-3">
          <div className="rounded-full w-11 h-full flex justify-center items-center border border-[#EDF1FA] bg-[#161616]"><i className="text-4xl"><RxAvatar/></i></div>
          <span>Adam S.</span>
          <i><FaCaretDown /></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;