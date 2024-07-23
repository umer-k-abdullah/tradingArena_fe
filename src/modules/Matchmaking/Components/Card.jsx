import React from "react";

const Card = ({ icon, label, value }) => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#0D0D0D] border-[#EDF1FA] border card-shadow rounded-xl w-[130px] h-[140px] gap-1'>
        <img src={icon} alt="NA" className='h-9'/>
        <span className='text-[#EDF1FAB2] text-base'>{label}</span>
        <span className='text-[#EDF1FA] text-lg'>{value}</span>
    </div>
  );
};

export default Card;
