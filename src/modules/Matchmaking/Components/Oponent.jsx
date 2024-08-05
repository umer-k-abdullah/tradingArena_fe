import React, { useState, useEffect } from "react";
import Card from "./Card";

const Oponent = ({ profileImage, oponentUsername, playerXp, batllesWon }) => {
  // useEffect(() => {
  //   console.log(opio)
  // }
  // , [oponnentData])

  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("/assets/images/avatar1.png");
  const [stats, setStats] = useState([
    {
      icon: "/assets/icons/win-streak.png",
      label: "Skill Score",
      value: 0,
      inc_dec: "+0%",
    },
    {
      icon: "/assets/icons/win-rate.png",
      label: "Battle Win Rate",
      value: 0,
      inc_dec: "+0%",
    },
    {
      icon: "/assets/icons/stats.png",
      label: "Total Profit",
      value: 0,
      inc_dec: "+0%",
    },
  ]);
  const images = [
    "/assets/images/avatar1.png",
    "/assets/images/avatar2.png",
    "/assets/images/avatar3.png",
    "/assets/images/avatar4.png",
    "/assets/images/avatar5.png",
    "/assets/images/avatar6.png",
    "/assets/images/avatar1.png",
    "/assets/images/avatar2.png",
    "/assets/images/avatar3.png",
    "/assets/images/avatar4.png",
    "/assets/images/avatar5.png",
    "/assets/images/avatar6.png",
    "/assets/images/avatar1.png",
    "/assets/images/avatar2.png",
    "/assets/images/avatar3.png",
    "/assets/images/avatar4.png",
    "/assets/images/avatar5.png",
    "/assets/images/avatar6.png",
  ];
  const avatars = [
    "/assets/images/avatar1.png",
    "/assets/images/avatar2.png",
    "/assets/images/avatar3.png",
  ]; // Add more avatar paths as needed

  useEffect(() => {
    const avatarInterval = setInterval(() => {
      setAvatar(avatars[Math.floor(Math.random() * avatars.length)]);
    }, 1500);

    return () => {
      clearInterval(avatarInterval);
    };
  }, [avatars]);

  return (
    <div className="font-poppins flex flex-col justify-center items-center gap-5">
      <div className="w-[200px] max-h-[200px] rounded-full border-2 overflow-hidden">
        {/* For the animator to work properly, the height of the 'animate scroll' div should be one image's height less than total images */}
        <div className="animate-scroll h-[1000px]">
          {images.map((ele, index) => (
            <img
              key={index}
              src={ele}
              className="w-[200px] h-[200px] rounded-full"
              alt="avatar"
            />
          ))}
        </div>
      </div>
      <p className="font-medium text-[30px] leading-[45px] ">---</p>
      <div className="flex justify-between items-center gap-2">
        {stats.map((ele, index) => (
          <Card
            key={index}
            icon={ele.icon}
            label={ele.label}
            value={"--"}
            inc_dec={ele.inc_dec}
          />
        ))}
      </div>
    </div>
  );
};

export default Oponent;
