import React, { useState, useEffect } from "react";
import Card from "./Card";
import axiosInstance from "../../../utils/axios";

const Player = () => {
  const [userData, setUserData] = useState({});
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.get("/getUserData", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(response.data.userDetails);
      console.log(response.data.userDetails.username);
      // console.log()
    } catch (error) {}
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const cardsArray = [
    {
      icon: "/assets/icons/win-streak.png",
      label: "Skill Score",
      value: 0,
      inc_dec: "+23%",
    },
    {
      icon: "/assets/icons/win-rate.png",
      label: "Battle Win Rate",
      value: 0,
      inc_dec: "+23%",
    },
    {
      icon: "/assets/icons/stats.png",
      label: "Total Profit",
      value: 0,
      inc_dec: "+23%",
    },
  ];
  return (
    <div className="font-poppins flex flex-col justify-center items-center gap-5">
      <div>
        <img
          src="/assets/images/avatar1.png"
          className="w-[200px] h-[200px] rounded-full"
          alt=""
        />
      </div>
      <p className="font-medium text-[30px] leading-[45px] ">
        @{userData ? <span>-----</span> : <span>{userData.username}</span>}
      </p>
      <div className="flex justify-between items-center gap-2">
        {cardsArray.map((ele, index) => (
          <Card
            key={index}
            icon={ele.icon}
            label={ele.label}
            value={ele.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Player;
