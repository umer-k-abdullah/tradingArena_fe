import React, { useEffect, useState } from "react";
import Player from "../Components/player";
import axiosInstance from "../../../utils/axios";
import Spinner from "../../../components/Spinner";
import Oponent from "../Components/Oponent";
const Matchmaking = () => {
  const [oponentData, setOponentData] = useState(null);

  return (
    <div className="h-full w-full text-white pl-36 gap-[20px] flex flex-col font-poppins">
      <p className="font-poppins fonr-semibold text-[30px] leading-[45px] pt-20 pl-36 ">
        Looking for your opponent...
      </p>
      <div className="mx-auto w-[80%] mt-24 flex justify-center items-center gap-16 ">
        <Player />
        <img
          src="/assets/icons/vs.png"
          className="w-[170px] h-[157px] -mt-20"
          alt=""
        />
        <Oponent />
      </div>
    </div>
  );
};

export default Matchmaking;
