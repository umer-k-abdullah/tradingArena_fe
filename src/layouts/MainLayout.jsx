import React, { useSyncExternalStore } from "react";
import LandingPage from "../modules/LandingPage/Pages/LandingPage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SignUp from "../modules/Auth/Pages/SignUp";
import Sigin from "../modules/Auth/Pages/Signin";
import { Outlet } from "react-router-dom";
import Slider from "../components/Slider";
import { useSelector } from "react-redux";
import Signin from "../modules/Auth/Pages/Signin";

function MainLayout() {
  const showSlider = useSelector((state) => state.slider.showSlider);
  console.log(showSlider);

  return (
    <>
      <div className="relative w-full h-screen flex overflow-hidden ">
        {/* <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
        >
          <source
            src="https://res.cloudinary.com/dseyjydkj/video/upload/v1720006702/Banner-Background-Video2_f0osfd.mp4"
            type="video/mp4"
          />
        </video> */}
        <div className=""></div> {/* styles for previous main layout page: absolute inset-0 bg-gradient-to-t from-[#01E37580] via-[#010101b7] to-[#010101] opacity-100 */}
        <div className="bg-themeBlack relative z-10 flex flex-col items-center justify-center w-full h-full">
          <div className="w-full max-w-screen-lg mx-auto">
            <Navbar />
          </div>
          <Sidebar />
          <Outlet />
          {/* <Slider /> */}
        </div>
      </div>
    </>
  );
}

export default MainLayout;
