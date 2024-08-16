import React from "react";
import { useNavigate } from "react-router-dom";

const TopCard = ({ name, icon, path }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col justify-center items-center bg-[#0D0D0D] border-[#EDF1FA] border card-shadow rounded-xl w-full gap-1 h-full cursor-pointer"
      onClick={() => navigate(path)}
    >
      <img src={icon} className="h-9" alt="" />
      <p className="text-[#EDF1FA] text-sm">{name}</p>
    </div>
  );
};

export default TopCard;
