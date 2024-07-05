import React from "react";
import { useSelector } from "react-redux";

const Slider = () => {
  const showSlider = useSelector((state) => state.slider.showSlider);
  console.log(showSlider);

  // return (
  //   <div
  //     className={` absolute right-0 top-0 w-[33%] h-screen z-10 backdrop-blur-md bg-[#010101B3] auth-screen ${
  //       showSlider ? "" : "translate-x-[105%]"
  //     } slider-transition`}
  //   ></div>
  // );
  return (
    <div
      className={`absolute right-0 top-0 flex justify-normal items-start w-screen h-screen slider-overlay-transition ${
        showSlider ? "" : "translate-x-[105%]"
      }`}
    >
      <div className={`w-full h-full bg-[#01010180] `}></div>
      {/* <div className={`h-full bg-[#010101B2] shadow-xl w-[1px] auth-screen ${
          showSlider ? "" : "translate-y-[105%]"
        } sidebar-transition`}></div> */}
      <div
        className={`w-[33%] h-full bg-[#010101B2] backdrop-blur-md auth-screen ${
          showSlider ? "" : "translate-y-[105%]"
        } sidebar-transition`}
      ></div>
    </div>
  );
};

export default Slider;
