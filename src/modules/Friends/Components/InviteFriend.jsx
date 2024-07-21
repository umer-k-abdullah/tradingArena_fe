import React from "react";

const InviteFriend = ({ firstName, lastName, username, profileImage }) => {
  return (
    <div className="flex w-full text-white items-center p-3 justify-between h-[28%] border-2  bg-themeBlack border-themeGreen rounded-md stats-card-win-shadow font-poppins">
      <div className="flex justify-normal items-center gap-10">
        {/* profile info */}
        <div className="flex items-center gap-4">
          {/* later on will replace with image */}
          <div className="rounded-full bg-white h-12 w-12">
            <img src={profileImage} className="w-12 h-12 rounded-full" alt="" />
          </div>
          <div className="flex flex-col">
            <span>{firstName + " " + lastName}</span>
            <span>@{username}</span>
          </div>
        </div>
        {/* flag */}
        <img src="/assets/icons/flag.png" alt="" />
        {/* skill score */}
        <div className="flex justify-center items-center gap-1">
          <img src="/assets/icons/win-streak.png" className="h-[20px]" alt="" />
          <p className="text-[#EDF1FA] text-[13px]">7830</p>
        </div>
      </div>
      <button className="bg-themeGreen text-themeBlack p-3 rounded-[5px] flex justify-center items-center text-[18px] leading-[27px]  font-poppins font-medium">
        Challenge Friend
      </button>
    </div>
  );
};

export default InviteFriend;
