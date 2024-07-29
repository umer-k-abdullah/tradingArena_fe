import React from "react";

const InviteCard = () => {
  return (
    <div className="flex w-full text-white items-center p-3 justify-between  border-2 h-[77px]  bg-themeBlack border-themeGreen rounded-md stats-card-win-shadow font-poppins">
      <div className="flex justify-normal items-center gap-10">
        {/* profile info */}
        <div className="flex items-center gap-4">
          {/* later on will replace with image */}
          <div className="rounded-full bg-white h-12 w-12"></div>
          <div className="flex flex-col">
            <span>Name</span>
            <span>@username</span>
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
        Battle Now
      </button>
    </div>
  );
};

export default InviteCard;
