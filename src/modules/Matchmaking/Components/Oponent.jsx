import React, { useState, useEffect } from "react";
import Card from "./Card";

const Oponent = () => {
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

  const usernames = Array.from({ length: 100 }, (_, i) => `User${i + 1}`);
  const avatars = [
    "/assets/images/avatar1.png",
    "/assets/images/avatar2.png",
    "/assets/images/avatar3.png",
  ]; // Add more avatar paths as needed

  useEffect(() => {
    const usernameInterval = setInterval(() => {
      setUsername(usernames[Math.floor(Math.random() * usernames.length)]);
    }, 1000);

    const avatarInterval = setInterval(() => {
      setAvatar(avatars[Math.floor(Math.random() * avatars.length)]);
    }, 1500);

    const statsInterval = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) => {
          const randomChange = Math.floor(Math.random() * 21) - 10;
          const newValue = stat.value + randomChange;
          const inc_dec = `${randomChange >= 0 ? "+" : ""}${randomChange}%`;
          return { ...stat, value: newValue, inc_dec };
        })
      );
    }, 1500);

    return () => {
      clearInterval(usernameInterval);
      clearInterval(avatarInterval);
      clearInterval(statsInterval);
    };
  }, [usernames, avatars]);

  return (
    <div className="font-poppins flex flex-col justify-center items-center gap-5">
      <div className="w-[200px] max-h-[200px] rounded-full border-2 overflow-hidden">
        {/* For the animator to work properly, the height of the 'animate scroll' div should be one image's height less than total images */}
        <div className="animate-scroll h-[1000px]">
          <img
            src="/assets/images/avatar1.png"
            className="w-[200px] h-[200px] rounded-full"
            alt="avatar"
          />
          <img
            src="/assets/images/avatar2.png"
            className="w-[200px] h-[200px] rounded-full"
            alt="avatar"
          />
          <img
            src="/assets/images/avatar3.png"
            className="w-[200px] h-[200px] rounded-full"
            alt="avatar"
          />
          <img
            src="/assets/images/avatar4.png"
            className="w-[200px] h-[200px] rounded-full"
            alt="avatar"
          />
          <img
            src="/assets/images/avatar5.png"
            className="w-[200px] h-[200px] rounded-full"
            alt="avatar"
          />
          <img
            src="/assets/images/avatar6.png"
            className="w-[200px] h-[200px] rounded-full"
            alt="avatar"
          />
        </div>
      </div>
      <p className="font-medium text-[30px] leading-[45px] ">{username}</p>
      <div className="flex justify-between items-center gap-2">
        {stats.map((ele, index) => (
          <Card
            key={index}
            icon={ele.icon}
            label={ele.label}
            value={ele.value}
            inc_dec={ele.inc_dec}
          />
        ))}
      </div>
    </div>
  );
};

export default Oponent;
