import React from "react";
import StatsCard from "../../Overview/Components/StatsCard";

function HistoryLog() {
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
    <div className="h-screen w-full pt-20 pl-32 gap-3 flex flex-col">
      <div className="mx-auto w-[75%]">
        <h1 className="font-zen-dots text-white text-xl">HISTORY LOG</h1>
      </div>
      <div className="h-full flex flex-col gap-2 mx-auto w-[75%] my-3 font-poppins">
        
        <div className="grid grid-cols-6 justify-between">
          {statsLabels.map((elem) => (
            <div className="flex justify-center">
              <span className="text-[#EDF1FAB2] text-sm">{elem}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 h-[80%] p-2 overflow-y-auto custom-scrollbar">
          {match1Stats.map((ele) => (
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

export default HistoryLog;
