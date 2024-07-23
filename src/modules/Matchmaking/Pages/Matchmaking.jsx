import React from "react";
import Player from "../Components/player";

const Matchmaking = () => {
  return (
    <div className="text-white">
      <p className="font-poppins fonr-semibold text-[30px] leading-[45px] pt-20 pl-36 ">
        Looking for your opponent...
      </p>
      <div className="mx-auto w-[80%] mt-36 flex justify-center items-center gap-16 ">
        <Player />
        <img src="/assets/icons/vs.png" className="w-[170px] h-[157px] -mt-20" alt="" />
        <Player />
      </div>
    </div>
  );
};

export default Matchmaking;
