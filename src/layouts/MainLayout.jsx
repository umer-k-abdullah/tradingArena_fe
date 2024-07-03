import React from "react";
import LandingPage from "../modules/LandingPage/Pages/LandingPage";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  return (
    <>
      <div className="relative w-full h-screen flex ">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
        >
          <source
            // src="../assets/videos/banner-background-video.mp4"
            src="https://res.cloudinary.com/dseyjydkj/video/upload/v1720006702/Banner-Background-Video2_f0osfd.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#01E37580] via-[#010101b7] to-[#010101] opacity-100"></div>
        {/* <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <Navbar/>
          <Sidebar/>
          <LandingPage />
        </div> */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <div className="w-full max-w-screen-lg mx-auto">
            <Navbar />
          </div>
          <Sidebar />
          <LandingPage />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
