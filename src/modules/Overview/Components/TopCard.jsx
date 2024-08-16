import React from "react";

function TopCard({ icon, label, value, inc_dec }) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#0D0D0D] border-[#EDF1FA] border card-shadow rounded-xl md:w-full w-64 gap-2 h-44">
      <img src={icon} alt="NA" className="h-7" />
      <span className="text-[#EDF1FAB2] text-sm">{label}</span>
      <span className="text-[#EDF1FA] text-base">{value}</span>
      <span className="text-themeGreen text-xs">{inc_dec}</span>
    </div>
  );
}

export default TopCard;
