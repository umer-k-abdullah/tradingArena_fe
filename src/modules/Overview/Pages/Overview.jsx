import React from "react";
import TopCard from "../Components/TopCard";
import StatsCard from "../Components/StatsCard";
import { useNavigate } from "react-router-dom";


function Overview() {

  const navigate = useNavigate()
  const statsLabels = [
    "Opponent",
    "Time Stamp",
    "Match Status",
    "Battle Time",
    "Skill Score",
    "Total Profit",
  ];
  const match1Stats = [
    {
      timeStamp: {
        time: "4 Jul, 24",
        date: "17:35",
      },
      matchStatus: "Won",
      battleTime: "14m 17s",
      skillScore: {
        inc_dec: "+789",
        score: "6545",
      },
      totalProfit: {
        inc_dec: "+100K",
        profit: "188M",
      },
    },
  ];

  const match2Stats = [
    {
      timeStamp: {
        time: "4 Jul, 24",
        date: "17:35",
      },
      matchStatus: "Lost",
      battleTime: "14m 17s",
      skillScore: {
        inc_dec: "-289",
        score: "6545",
      },
      totalProfit: {
        inc_dec: "-100K",
        profit: "188M",
      },
    },
  ];

  return (
    <div className="h-full w-full pt-20 pl-32 gap-3 flex flex-col">
      <div className="mx-auto w-[75%]">
        <h1 className="font-zen-dots text-white text-3xl">DASHBOARD</h1>
        <h3 className="text-white text-lg mt-5">Profile Stats</h3>
      </div>
      <div className="mx-auto font-poppins flex w-[75%] gap-6 h-1/3">
        <TopCard
          icon={"/assets/icons/win-streak.png"}
          label={"Skill Score"}
          value={6545}
          inc_dec={"+23%"}
        />
        <TopCard
          icon={"/assets/icons/stats.png"}
          label={"Win Streaks"}
          inc_dec={"+5"}
        />
        <TopCard
          icon={"/assets/icons/win-rate.png"}
          label={"Win Rate"}
          value={"88%"}
          inc_dec={"+12%"}
        />
      </div>
      <div className="flex flex-col gap-2 mx-auto w-[75%] my-3 h-1/2 font-poppins">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-lg">Previous Matches</h3>
          <div className="text-themeGreen cursor-pointer hover:underline" onClick={()=>{navigate("/history-log")}}>View All</div>
        </div>
        <div className="flex w-full justify-between pl-20">
          {statsLabels.map((elem) => (
            <span className="text-[#EDF1FAB2] text-base">{elem}</span>
          ))}
        </div>
        <div className="flex flex-col gap-3 overflow-y-auto h-full custom-scrollbar">
          {match1Stats.map((ele) => (
            <StatsCard
              timeStamp={ele.timeStamp}
              matchStatus={ele.matchStatus}
              battleTime={ele.battleTime}
              skillScore={ele.skillScore}
              totalProfit={ele.totalProfit}
            />
          ))}
          {match2Stats.map((ele) => (
            <StatsCard
              timeStamp={ele.timeStamp}
              matchStatus={ele.matchStatus}
              battleTime={ele.battleTime}
              skillScore={ele.skillScore}
              totalProfit={ele.totalProfit}
            />
          ))}
          {match1Stats.map((ele) => (
            <StatsCard
              timeStamp={ele.timeStamp}
              matchStatus={ele.matchStatus}
              battleTime={ele.battleTime}
              skillScore={ele.skillScore}
              totalProfit={ele.totalProfit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overview;
