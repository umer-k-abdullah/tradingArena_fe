import React, { useState } from "react";

function Sidebar() {
  const [isMute, setIsMute] = useState(false);
  const handleSound = () => {
    setIsMute(!isMute);
  };

  const sidebarTopLinks = [
    { name: "Profile", link: "/assets/icons/profile.png" },
    {
      name: "History Log",
      link: "/assets/icons/log-data.png",
    },
    {
      name: "Leaderboard",
      link: "/assets/icons/podium.png",
    },
    {
      name: "Friends",
      link: "/assets/icons/friends.png",
    },
    {
      name: "Battle Arena",
      link: "/assets/icons/battle.png",
    },
    {
      name: "Invitations",
      link: "/assets/icons/invitations.png",
    },
  ];

  // return (
  //   // <div className="h-screen w-16 fixed left-0 top-0 bg-[#010101CC] pt-12 p-4 flex flex-col justify-between items-center transition-width duration-300 ease-in-out group hover:w-72 hover:border-r-2 sidebar-shadow hover:border-r-[#01E375]">
  //   <div className="fixed left-0 top-0 hover:border-r-2 sidebar-shadow hover:border-r-[#01E375]">
  //     <div className="bg-[#010101CC] w-[71px] mx-auto">
  //       <div className="h-screen flex flex-col justify-between items-center">
  //         <div className="flex flex-col items-start">
  //           {sidebarTopLinks.map((ele, index) => (
  //             <div key={index}>
  //               <img
  //                 className="h-7 my-4 cursor-pointer"
  //                 src={ele}
  //                 alt="profile-icon"
  //               />
  //             </div>
  //           ))}
  //         </div>
  //         <div className="flex flex-col items-center">
  //           <div>
  //             <img
  //               className="h-7 my-4 cursor-pointer"
  //               src="/assets/icons/info.png"
  //               alt="profile-icon"
  //             />
  //           </div>
  //           <div>
  //             <img
  //               className="h-[25.16px] my-4 cursor-pointer"
  //               src={`${
  //                 !isMute
  //                   ? "/assets/icons/sound-on.png"
  //                   : "/assets/icons/enable-sound.png"
  //               }`}
  //               alt="profile-icon"
  //               onClick={handleSound}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     {/* <div className="flex flex-col items-start">
  //       {sidebarTopLinks.map((ele, index) => (
  //         <div key={index}>
  //           <img
  //             className="h-7 my-4 cursor-pointer"
  //             src={ele}
  //             alt="profile-icon"
  //           />
  //         </div>
  //       ))}
  //     </div>
  //     <div className="flex flex-col items-center">
  //       <div>
  //         <img
  //           className="h-7 my-4 cursor-pointer"
  //           src="/assets/icons/info.png"
  //           alt="profile-icon"
  //         />
  //       </div>
  //       <div>
  //         <img
  //           className="h-[25.16px] my-4 cursor-pointer"
  //           src={`${
  //             !isMute
  //               ? "/assets/icons/sound-on.png"
  //               : "/assets/icons/enable-sound.png"
  //           }`}
  //           alt="profile-icon"
  //           onClick={handleSound}
  //         />
  //       </div>
  //     </div> */}
  //   </div>
  // );
  return (
    <div className="h-screen fixed top-0 left-0 flex justify-normal items-start sidebar-shadow ">
      {/* sidebar icons */}
      <div className="w-[71px] bg-[#010101CC] h-full flex flex-col justify-between items-center z-10 backdrop-blur-lg ">
        <div className="flex flex-col justify-normal items-start">
          <div className="h-[50px]"></div>
          <div className="flex flex-col items-start gap-[5px]">
            {sidebarTopLinks.map((ele, index) => (
              <div key={index}>
                <img
                  className="h-7 my-4 cursor-pointer"
                  src={ele.link}
                  alt="profile-icon"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img
              className="h-7 my-4 cursor-pointer"
              src="/assets/icons/info.png"
              alt="profile-icon"
            />
          </div>
          <div>
            <img
              className="h-[25.16px] my-4 cursor-pointer"
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
      {/* <div className="w-[224px] bg-[#01010199] h-full backdrop-blur-lg">
        <div>
          <div className="mt-[20px] h-[50px]">
            <img src="/assets/images/logo-main.png" alt="" />
          </div>
          <div></div>
        </div>
        <div></div>
      </div> */}
    </div>
  );
}

export default Sidebar;
