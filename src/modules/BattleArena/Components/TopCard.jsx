import React from "react";

const TopCard = ({ name, icon }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#0D0D0D] border-[#EDF1FA] border card-shadow rounded-xl w-full gap-1 h-full">
      <img src={icon} className="h-12" alt="" />
      <p className="text-[#EDF1FA] text-base">{name}</p>
    </div>
  );
};

export default TopCard;
