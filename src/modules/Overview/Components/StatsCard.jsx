import React, { useState } from "react";

function StatsCard({
  timeStamp,
  matchStatus,
  battleTime,
  skillScore,
  totalProfit,
}) {
  // var [matchStatus, SetMatchStatus] = useState();
  return (
    <div
      className={`grid grid-cols-6 w-full text-white items-center p-3 justify-between h-24 bg-themeBlack border rounded-md ${
        matchStatus == "Won"
          ? "border-themeGreen stats-card-win-shadow"
          : "border-red-700 stats-card-lose-shadow"
      } cursor-pointer`}
    >
      {/* Opponent */}

      <div className="flex justify-center items-center gap-2">
        <div className="rounded-full bg-white h-10 w-10">
          {/* <img src="" alt="" /> */}
        </div>
        <div className="flex flex-col text-sm">
          <span>Name</span>
          <span>@username</span>
        </div>
      </div>
      {/* Time Stamp */}
      <div className="flex items-center flex-col text-sm">
        <span>{timeStamp.date}</span>
        <span>{timeStamp.time}</span>
      </div>
      {/* Match Status */}
      <div className="flex justify-center">
        <span
          className={`${
            matchStatus == "Won" ? "text-themeGreen" : "text-[#FF4D42]"
          } text-sm`}
        >
          {matchStatus}
        </span>
      </div>

      {/* Battle Time */}
      <div className="flex justify-center">
      <span className="text-sm">{battleTime}</span>
      </div>
      
      {/* Skill Score */}
      <div className="flex items-center flex-col text-sm">
        <span
          className={`${
            matchStatus == "Won" ? "text-themeGreen" : "text-[#FF4D42]"
          }`}
        >
          {skillScore.inc_dec}
        </span>
        <span>{skillScore.score}</span>
      </div>
      {/* Total Profit */}
      <div className="flex items-center pl-3 flex-col text-sm">
        <span
          className={`${
            matchStatus == "Won" ? "text-themeGreen" : "text-[#FF4D42]"
          }`}
        >
          {totalProfit.inc_dec}
        </span>
        <span>{totalProfit.profit}</span>
      </div>
    </div>
  );
}

export default StatsCard;
