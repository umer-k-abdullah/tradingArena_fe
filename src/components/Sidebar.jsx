import React, { useState } from "react";

function Sidebar() {
  const [isMute, setIsMute] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleSound = () => {
    setIsMute(!isMute);
  };

  const sidebarTopLinks = [
    { name: "Profile", link: "/assets/icons/profile.png" },
    { name: "History Log", link: "/assets/icons/log-data.png" },
    { name: "Leaderboard", link: "/assets/icons/podium.png" },
    { name: "Friends", link: "/assets/icons/friends.png" },
    { name: "Battle Arena", link: "/assets/icons/battle.png" },
    { name: "Invitations", link: "/assets/icons/invitations.png" },
  ];

  return (
    <div
      className="h-screen fixed top-0 left-0 flex justify-normal items-start"
      onPointerEnter={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}
    >
      {/* sidebar icons */}
      <div className="w-[71px] bg-[#010101CC] h-full flex flex-col justify-between items-center z-10 backdrop-blur-lg ">
        <div className="flex flex-col justify-normal items-start">
          <div className="h-[65px]"></div>
          <div className="flex flex-col items-start gap-[30px] mt-5">
            {sidebarTopLinks.map((ele, index) => (
              <div key={index} className="flex justify-normal items-center">
                <img
                  className="h-7 cursor-pointer"
                  src={ele.link}
                  alt="profile-icon"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-[30px] mb-10">
          <div>
            <img
              className="h-7 cursor-pointer"
              src="/assets/icons/info.png"
              alt="profile-icon"
            />
          </div>
          <div>
            <img
              className="h-7 cursor-pointer"
              src={`${
                !isMute
                  ? "/assets/icons/sound-on.png"
                  : "/assets/icons/enable-sound.png"
              }`}
              alt="profile-icon"
              onClick={handleSound}
            />
          </div>
        </div>
      </div>
      {/* sidebar content */}
      <div
        className={`${
          isHover ? "" : "-translate-x-[500px] w-[0.1px]"
        } w-[224px] transit bg-[#01010199] h-full backdrop-blur-md flex flex-col justify-between sidebar-transition shadow-xl sidebar-shadow`}
      >
        <div>
          <div className="mt-[20px] h-[50px] ml-1">
            <img src="/assets/images/logo-main.png" alt="" />
          </div>
          <div className="flex flex-col gap-[30px] mt-5">
            {sidebarTopLinks.map((ele, index) => (
              <div key={index} className="h-7 flex items-center -mt-[1px] ml-4">
                <p className="font-bold text-white leading-[32.02px] text-[20px] cursor-pointer">
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
