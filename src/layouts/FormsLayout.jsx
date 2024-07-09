import React from "react";
import { Outlet } from "react-router-dom";
import Slider from "../components/Slider";

const FormsLayout = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden flex justify-normal items-start bg-black">
      <div className="w-[57.48%] h-full flex flex-col justify-center items-center">
        <img
          src="/assets/images/logo-formlayout.png"
          className="w-[577px] h-[270px]"
          alt=""
        />
        <p className="font-poppins text-white text-[16px] leading-[64px] -mt-32 ">
          Practice your strategy, Prove your dominance.
        </p>
      </div>
      <Slider />
    </div>
  );
};

export default FormsLayout;
