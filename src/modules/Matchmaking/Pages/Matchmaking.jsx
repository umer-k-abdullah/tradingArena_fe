import React, { useEffect, useState } from "react";
import Player from "../Components/player";
import axiosInstance from "../../../utils/axios";
import Spinner from "../../../components/Spinner";
const Matchmaking = () => {
  const [userData, setUserData] = useState(null);
  const [oponentData, setOponentData] = useState(null)
  
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.get("/getUserData", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(response.data.userDetails);
      console.log(response.data.userDetails);
      // console.log()
    } catch (error) {}
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="h-full w-full text-white pl-36 gap-[20px] flex flex-col font-poppins">
      <p className="font-poppins fonr-semibold text-[30px] leading-[45px] pt-20 pl-36 ">
        Looking for your opponent...
      </p>
      <div className="mx-auto w-[80%] mt-36 flex justify-center items-center gap-16 ">
        {userData ? (
          <Player
            profileImage={userData.profileImage}
            battleWon={userData.battleWon}
            skillScore={userData.skillScore}
          />
        ) : (
          <Spinner />
        )}
        <img
          src="/assets/icons/vs.png"
          className="w-[170px] h-[157px] -mt-20"
          alt=""
        />
        <Player />
      </div>
    </div>
  );
};

export default Matchmaking;
