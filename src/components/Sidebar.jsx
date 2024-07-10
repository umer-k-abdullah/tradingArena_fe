import React, { useState } from "react";
import { RiSwordFill } from "react-icons/ri";
import {
  FaUser,
  FaUserFriends,
  FaEnvelopeOpenText,
  FaInfo,
  FaVolumeMute,
  FaVolumeUp,
  FaHistory,
} from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [isMute, setIsMute] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleIconClick = (index) => {
    setActiveIndex(index);
  };
  const handleLinkClick = (index) => {
    setActiveIndex(index);
  };
  const handleSound = () => {
    setIsMute(!isMute);
  };

  const sidebarTopLinks = [
    {
      name: "Dashboard",
      link: "/assets/icons/profile.png",
      icon: <TbLayoutDashboardFilled />,
      path: "/dashboard",
    },
    {
      name: "History Log",
      link: "/assets/icons/log-data.png",
      icon: <FaHistory />,
      // path: "/history_log",
    },
    {
      name: "Leaderboard",
      link: "/assets/icons/podium.png",
      icon: <FaRankingStar />,
      // path: "/leadersboard",
      path: "/dashboard",
    },
    {
      name: "Friends",
      link: "/assets/icons/friends.png",
      icon: <FaUserFriends />,
      path: "/social",
    },
    {
      name: "Battle Arena",
      link: "/assets/icons/battle.png",
      icon: <RiSwordFill />,
      path: "/dashboard",
    },
    {
      name: "Invitations",
      link: "/assets/icons/invitations.png",
      icon: <FaEnvelopeOpenText />,
      path: "/dashboard",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
    navigate(sidebarTopLinks[index].path);
  };

  return (
    <div
      className="h-screen fixed top-0 left-0 flex justify-normal items-start"
      onPointerLeave={() => setIsHover(false)}
    >
      {/* sidebar icons */}
      <div
        className="w-[71px] bg-[#010101CC] h-full flex flex-col justify-between items-center z-10 backdrop-blur-lg "
        onPointerEnter={() => setIsHover(true)}
      >
        <div className="flex flex-col justify-normal items-start">
          <div className="h-[65px]"></div>
          <div className="flex flex-col items-start gap-[37px] mt-7">
            {sidebarTopLinks.map((ele, index) => (
              <div key={index} className="flex justify-normal items-center">
                <span
                  className={`${
                    activeIndex === index ? "text-themeGreen" : "text-white"
                  } text-xl cursor-pointer`}
                  onClick={() => handleClick(index)}
                >
                  {ele.icon}
                </span>
                {/* <img
                  className="h-7 cursor-pointer"
                  src={ele.icon}
                  alt="profile-icon"
                /> */}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-[38px] mb-11">
          <div>
            <span className="text-white text-xl">
              <FaInfo />
            </span>
          </div>
          <div onClick={handleSound}>
            {!isMute ? (
              <span className="text-white text-xl">
                <FaVolumeUp />
              </span>
            ) : (
              <span className="text-white text-xl">
                <FaVolumeMute />
              </span>
            )}
          </div>
        </div>
      </div>
      {/* sidebar content */}
      <div
        className={`${
          isHover ? "" : "-translate-x-[500px]"
        } w-[224px] transit bg-[#01010199] h-full backdrop-blur-md flex flex-col justify-between sidebar-transition shadow-xl sidebar-shadow`}
      >
        <div>
          <div className="mt-[20px] h-[50px] ml-1">
            <img src="/assets/images/logo-main.png" alt="" />
          </div>
          <div className="flex flex-col gap-[30px] mt-5">
            {sidebarTopLinks.map((ele, index) => (
              <div key={index} className="h-7 flex items-center -mt-[1px] ml-4">
                <p
                  className={`font-bold ${
                    activeIndex === index ? "text-themeGreen" : "text-white"
                  }  leading-[32.02px] text-[20px] cursor-pointer`}
                  onClick={() => handleClick(index)}
                >
                  {ele.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[30px] mb-10">
          <div className="h-7 flex items-center -mt-[1px] ml-4">
            <p className="font-bold text-white leading-[32.02px] text-[20px] cursor-pointer">
              Help
            </p>
          </div>
          <div className="h-7 flex items-center -mt-[1px] ml-4">
            <p className="font-bold text-white leading-[32.02px] text-[20px] cursor-pointer">
              Sound
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
