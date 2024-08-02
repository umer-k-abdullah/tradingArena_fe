import React, { useState, useEffect } from "react";
import Card from "./Card";
import axiosInstance from "../../../utils/axios";

const Player = ({ username, profileImage, battlesWon, playerXp }) => {

  const cardsArray = [
    {
      icon: "/assets/icons/win-streak.png",
      label: "Skill Score",
      value: 500,
      inc_dec: "+23%",
    },
    {
      icon: "/assets/icons/win-rate.png",
      label: "Battle Win Rate",
      value: "-",

      inc_dec: "+23%",
    },
    {
      icon: "/assets/icons/stats.png",
      label: "Total Profit",
      value: "-",
      inc_dec: "+23%",
    },
  ];
  return (
    <div className="font-poppins flex flex-col justify-center items-center gap-5">
      <div>
        <img
          src={profileImage}
          className="w-[200px] h-[200px] rounded-full"
          alt=""
        />
      </div>
      <p className="font-medium text-[30px] leading-[45px] ">{username}</p>
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
