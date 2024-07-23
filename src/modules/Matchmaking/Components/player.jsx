import React from "react";
import Card from "./Card";

const Player = () => {
  const cardsArray = [
    {
      icon: "/assets/icons/win-streak.png",
      label: "Skill Score",
      value: 6545,
      inc_dec: "+23%",
    },
    {
      icon: "/assets/icons/win-rate.png",
      label: "Skill Score",
      value: 6545,
      inc_dec: "+23%",
    },
    {
      icon: "/assets/icons/stats.png",
      label: "Skill Score",
      value: 6545,
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
      <p className="font-medium text-[30px] leading-[45px] ">@username</p>
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
