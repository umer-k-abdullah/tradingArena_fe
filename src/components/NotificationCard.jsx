import React from "react";
import { IoClose } from "react-icons/io5";

function NotificationCard({time, title, message}) {
  return (
    <div className="relative w-full gap-2 bg-themeBlack border border-themeGray rounded-md p-2 flex justify-between items-center">
      <i className="text-2xl absolute text-[#FFFFFFCC] top-1 right-1 cursor-pointer">
        <IoClose />
      </i>
      <div className="ml-2">
        <img src="assets/icons/1stPlace.png" alt="" className="h-12"/>
      </div>
      <div className="ml-3 flex-1 flex flex-col">
        <span className="text-[#EDF1FA80] text-xs">{time}</span>
        <span className="text-themeGray text-sm">{title}</span>
        <span className="text-sm">{message}</span>
      </div>
    </div>
  );
}

export default NotificationCard;
