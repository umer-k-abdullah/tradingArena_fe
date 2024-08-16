import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const FriendsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  

  return (
    <div className="h-full w-full pt-16 text-white pl-36 gap-[20px] flex flex-col font-poppins">
      <div className="mx-auto w-[75%]">
        <h1 className="font-zen-dots text-white text-2xl">SOCIAL</h1>
      </div>
      <div className="mx-auto flex justify-normal items-center border-2 border-themeGreen rounded-[10px]">
        <button
          className={`w-[250px] h-[50px] rounded-[5px] text-[20px] leading-[45px] flex justify-center items-center ${
            location.pathname == "/social"
              ? "bg-themeGreen text-black"
              : "bg-transparent text-[#EDF1FA]"
          }`}
          onClick={() => navigate("/social")}
        >
          Friends
        </button>
        <button
          className={`w-[250px] h-[50px] rounded-[5px] text-[20px] leading-[45px] flex justify-center items-center ${
            location.pathname == "/social/friend-requests"
              ? "bg-themeGreen text-black "
              : "bg-transparent text-[#EDF1FA]"
          }`}
          onClick={() => navigate("/social/friend-requests")}
        >
          Requests
        </button>
      </div>
      <div className="mx-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default FriendsPage;
