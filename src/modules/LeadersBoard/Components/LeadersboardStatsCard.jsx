import React from "react";

function LeadersboardStatsCard({ rank, flag, skillScore, totalProfit, win }) {
  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <img src="/assets/icons/1stPlace.png" alt="First Place" className="h-9"/>;
      case 2:
        return <img src="/assets/icons/2ndPlace.png" alt="Second Place" className="h-9"/>;
      case 3:
        return <img src="/assets/icons/3rdPlace.png" alt="Third Place" className="h-9"/>;
      default:
        return <span className="">{`#${rank}`}</span>; // For ranks other than 1, 2, or 3, just display the rank number
    }
  };
  const incORdecSkillScore = (skillScore)=> {

  }
  return (
    <div
      className={`grid grid-cols-6 w-full text-white items-center p-3 h-[28%] bg-[#0D0D0D] border gray-shadow border-themeGray rounded-md cursor-pointer px-10`}
    >
      {/* Rank */}
      <div className=" flex justify-center">
        {getRankIcon(rank)}
        </div>
      {/* Player */}
      <div className="flex justify-center items-center gap-2">
        <div className="rounded-full bg-white h-10 w-10">
          {/* <img src="" alt="" /> */}
        </div>
        <div className="flex flex-col">
          <span>Name</span>
          <span className="text-[#EDF1FAB2]">@username</span>
        </div>
      </div>
      {/* Country */}
      <div className="flex justify-center">
      <img src={flag} alt="" className="h-8"/>
      </div>
      
      {/* Skill Score */}
      <div className="flex justify-center items-center gap-2">
        <img src='/assets/icons/increase.png' alt="" className="h-8"/>
        <span>{skillScore.score}</span>
      </div>
      {/* Total Profits */}
      <div className="flex justify-center">
        <span>{totalProfit.profit}</span>
      </div>
      {/* Total Profit */}
      <div className="flex flex-col text-themeGray items-center">
        <span>{win.percentage}</span>
        <span>{win.winLossRatio}</span>
      </div>
    </div>
  );
}

export default LeadersboardStatsCard;
