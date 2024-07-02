import React from "react";
import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";

function LandingPage() {
  return (
    <div className='flex '>
        <div className='flex font-bold cursor-pointer text-4xl justify-center items-center w-[420px] h-[120px] bg-[#01E375] rounded-2xl game-btn-shadow'>
          LETS BATTLE!
        </div>
    </div>
    // <div className="flex">
    //   <Sidebar />
    //   <div className="flex flex-col w-full">
    //     <Navbar />
    //     <div className="flex font-bold cursor-pointer text-4xl justify-center items-center w-[420px] h-[120px] bg-[#01E375] rounded-2xl game-btn-shadow mx-auto mt-20">
    //       LET'S BATTLE!
    //     </div>
    //   </div>
    // </div>
  );
}

export default LandingPage;
