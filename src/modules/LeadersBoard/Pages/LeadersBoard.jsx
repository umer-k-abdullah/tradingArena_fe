import React, { useEffect, useState } from "react";
import StatsCard from "../../Overview/Components/StatsCard";
import LeadersboardStatsCard from "../Components/LeadersboardStatsCard";

function LeadersBoard() {
  // For active sticky user logic---------------------------
  // const [isStickyTop, setIsStickyTop] = useState(false);
  // const [isStickyBottom, setIsStickyBottom] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const userCardElement = document.getElementById("userCard");
  //     const userCardPosition = userCardElement?.offsetTop;

  //     if (userCardPosition && scrollPosition > userCardPosition) {
  //       setIsStickyTop(true);
  //       setIsStickyBottom(false);
  //     } else {
  //       setIsStickyTop(false);
  //       setIsStickyBottom(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const statsLabels = [
    "Rank",
    "Player",
    "Country",
    "Skill Score",
    "Total Profits",
    "Win %",
  ];

  const user1Stats = [
    {
      rank: 1,
      matchStatus: "Won",
      flag: "/assets/icons/uk-flag.png",
      skillScore: {
        inc_dec: "+789",
        score: "6545",
      },
      totalProfit: {
        inc_dec: "+100K",
        profit: "$188M",
      },
      win: {
        percentage: "50%",
        winLossRatio: "40W-40L",
      },
    },
  ];

  const user2Stats = [
    {
      rank: 2,
      matchStatus: "Lost",
      flag: "/assets/icons/uk-flag.png",
      skillScore: {
        inc_dec: "-289",
        score: "6545",
      },
      totalProfit: {
        inc_dec: "-100K",
        profit: "$188M",
      },
      win: {
        percentage: "50%",
        winLossRatio: "40W-40L",
      },
    },
  ];

  const otherUserStats = [
    {
      rank: 4,
      matchStatus: "Lost",
      flag: "/assets/icons/uk-flag.png",
      skillScore: {
        inc_dec: "-289",
        score: "6545",
      },
      totalProfit: {
        inc_dec: "-100K",
        profit: "$188M",
      },
      win: {
        percentage: "50%",
        winLossRatio: "40W-40L",
      },
    },
  ]


  // For active sticky user logic---------------------------
  // const userStats = [
  //   {
  //     rank: 2,
  //     matchStatus: "Lost",
  //     flag: "/assets/icons/uk-flag.png",
  //     skillScore: {
  //       inc_dec: "-289",
  //       score: "6545",
  //     },
  //     totalProfit: {
  //       inc_dec: "-100K",
  //       profit: "$155M",
  //     },
  //     win: {
  //       percentage: "50%",
  //       winLossRatio: "40W-40L",
  //     },
  //   },
  // ];  

  return (
    <div className="h-full w-full pt-20 pl-32 gap-3 flex flex-col">
      <div className="mx-auto w-[75%]">
        <h1 className="font-zen-dots text-white text-3xl">LEADERSBOARD</h1>
      </div>
      <div className="flex flex-col gap-2 mx-auto w-[75%] my-3 font-poppins">
        <div className="flex w-full justify-between px-14">
          {statsLabels.map((elem) => (
            <span className="text-[#EDF1FAB2] text-base">{elem}</span>
          ))}
        </div>
        <div className="flex flex-col gap-3 overflow-y-auto h-full custom-scrollbar p-2">
          {user1Stats.map((ele) => (
            <LeadersboardStatsCard
              rank={ele.rank}
              flag={ele.flag}
              skillScore={ele.skillScore}
              totalProfit={ele.totalProfit}
              win={ele.win}
            />
          ))}
          {user2Stats.map((ele) => (
            <LeadersboardStatsCard
              rank={ele.rank}
              flag={ele.flag}
              skillScore={ele.skillScore}
              totalProfit={ele.totalProfit}
              win={ele.win}
            />
          ))}
          {/* <div
            id="userCard"
            className={`${
              isStickyTop
                ? "fixed top-0 w-full"
                : isStickyBottom
                ? "sticky bottom-0"
                : ""
            }`}
          >
            <LeadersboardStatsCard
              rank={userStats.rank}
              flag={userStats.flag}
              skillScore={userStats.skillScore}
              totalProfit={userStats.totalProfit}
              win={userStats.win}
            />
          </div> */}

          {otherUserStats.map((ele) => (
            <LeadersboardStatsCard
              rank={ele.rank}
              flag={ele.flag}
              skillScore={ele.skillScore}
              totalProfit={ele.totalProfit}
              win={ele.win}
            />
          ))}
          {otherUserStats.map((ele) => (
            <LeadersboardStatsCard
              rank={ele.rank}
              flag={ele.flag}
              skillScore={ele.skillScore}
              totalProfit={ele.totalProfit}
              win={ele.win}
            />
          ))}
          {otherUserStats.map((ele) => (
            <LeadersboardStatsCard
              rank={ele.rank}
              flag={ele.flag}
              skillScore={ele.skillScore}
              totalProfit={ele.totalProfit}
              win={ele.win}
            />
          ))}
          {otherUserStats.map((ele) => (
            <LeadersboardStatsCard
              rank={ele.rank}
              flag={ele.flag}
              skillScore={ele.skillScore}
              totalProfit={ele.totalProfit}
              win={ele.win}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeadersBoard;
