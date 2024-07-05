import React from "react";
import { useDispatch } from "react-redux";
import { switchSignup, switchSingnin } from "../modules/Auth/AuthSliderSlice";
import { handleSlider } from "../app/slider";
function Navbar() {
  const dispatch = useDispatch();
  const handleClick = (mode) => {
    dispatch(handleSlider());
    switch (mode) {
      case "signup":
        dispatch(switchSignup());
        break;
      case "signin":
        dispatch(switchSingnin());
        break;
      default:
        break;
    }
  };
  return (
    <div className="absolute top-0 left-0 pl-[75px] w-screen h-[80px] z-11  flex justify-between px-10 items-center">
      <div>
        <img src="/assets/images/logo-main.png" alt="" />
      </div>
      <div className="flex gap-4">
        <div
          className="w-[120px] h-[45px] rounded-lg bg-[#01E375] flex justify-center items-center font-bold game-btn-shadow cursor-pointer"
          onClick={() => handleClick("signin")}
        >
          Sign In
        </div>
        <div
          className="w-[120px] h-[45px] rounded-lg bg-[#010101] text-white flex justify-center items-center font-bold game-btn-shadow cursor-pointer border-2 border-[#01E375]"
          onClick={() => handleClick("signup")}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
}

export default Navbar;
