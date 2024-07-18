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
import { LuPin, LuPinOff } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const [isMute, setIsMute] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pin, setIsPin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (index, path) => {
    setActiveIndex(index);
    navigate(path);
  };
  const handleSound = () => {
    setIsMute(!isMute);
  };
  const handlePinClick = () => {
    setIsPin(!pin);
  };

  const sidebarTopLinks = [
    {
      name: "Dashboard",
      icon: "/assets/icons/dashboard_light.png",
      activeIcon: "/assets/icons/dashboard_highlight.png",
      // icon: <TbLayoutDashboardFilled />,
      path: "/dashboard",
    },
    {
      name: "Battle Arena",
      icon: "/assets/icons/stock-market_light.png",
      activeIcon: "/assets/icons/stock-market_highlight.png",
      // icon: <RiSwordFill />,
      path: "/battle",
    },
    {
      name: "Profile",
      icon: "/assets/icons/profile_light.png",
      activeIcon: "/assets/icons/profile_highlight.png",
      // icon: <RiSwordFill />,
      path: "/profile",
    },
    {
      name: "History",
      icon: "/assets/icons/log-data_light.png",
      activeIcon: "/assets/icons/log-data_highlight.png",
      // icon: <FaHistory />,
      path: "/history-log",
    },
    {
      name: "Leaderboard",
icon: "/assets/icons/podium_light.png",
      activeIcon: "/assets/icons/podium_highlight.png",
      // icon: <FaRankingStar />,
      path: "/leaderboard",
      
    },
    {
      name: "Social",
      icon: "/assets/icons/friends_light.png",
      activeIcon: "/assets/icons/friends_hightlight.png",
      // icon: <FaUserFriends />,
      path: "/social",
    },
  ];

  return (
    <div
      className="h-screen fixed top-0 left-0 flex justify-normal items-start"
      onPointerLeave={() => setIsHover(false)}
    >
      {/* sidebar icons */}
      <div
        className="w-[71px] bg-[#0d0d0d] h-full flex flex-col justify-between items-center z-10 backdrop-blur-lg "
        onPointerEnter={() => setIsHover(true)}
      >
        <div className="flex flex-col justify-normal items-start">
          <div className="h-[65px]"></div>
          <div className="flex flex-col items-start gap-[37px] mt-7">
            <img
              src="/assets/icons/logo-icon.png"
              alt=""
              className="top-0 left-0 absolute"
            />
            {sidebarTopLinks.map((ele, index) => (
              <div key={index} className="flex justify-normal items-center">
                <span
                  className={`${
                    location.pathname.startsWith(ele.path)
                      ? "text-themeGreen"
                      : "text-white"
                  } text-xl cursor-pointer`}
                  onClick={() => handleClick(index, ele.path)}
                >
                  {/* {ele.icon} */}
                  {location.pathname.startsWith(ele.path) ? (
                    <img src={ele.activeIcon} className="" />
                  ) : (
                    <img src={ele.icon} className="" />
                  )}
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
          isHover || pin ? "" : "-translate-x-[500px]"
        } w-[200px] transit bg-[#0d0d0d] h-full flex flex-col justify-between sidebar-transition `}
      >
        {/* Pin Button */}
        <div
          className="flex justify-center items-center cursor-pointer absolute -right-8 bg-[#0d0d0d] w-8 h-10 rounded-r-lg text-white text-xl"
          onClick={handlePinClick}
        >
          <i>{pin ? <LuPin /> : <LuPinOff />}</i>
        </div>
        <div>
          <div className="mt-[6px] mb-[35px] h-[50px] ml-1">
            <img
              src="/assets/icons/logo-text.png"
              alt=""
              className="h-[72px]"
            />
          </div>
          <div className="flex flex-col gap-[33.5px] mt-5">
            {sidebarTopLinks.map((ele, index) => (
              <div key={index} className="h-7 flex items-center  -mt-[ 1px] ml-4">
                <p
                  className={`font-poppins ${
                    location.pathname.startsWith(ele.path)
                      ? "text-themeGreen"
                      : "text-white"
                  }  leading-[32.02px] text-[20px] cursor-pointer`}
                  onClick={() => handleClick(index, ele.path)}
                >
                  {ele.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[30px] mb-10 font-poppins">
          <div className="h-7 flex items-center -mt-[1px] ml-4">
            <p className=" text-white leading-[32.02px] text-[20px] cursor-pointer">
              Help
            </p>
          </div>
          <div className="h-7 flex items-center -mt-[1px] ml-4">
            <p className=" text-white leading-[32.02px] text-[20px] cursor-pointer">
              Sound
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
