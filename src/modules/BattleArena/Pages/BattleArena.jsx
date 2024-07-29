import React from "react";
import TopCard from "../Components/TopCard";
import InviteCard from "../Components/InviteCard";

const BattleArena = () => {
  const topCards = [
    {
      name: "Quick Match",
      icons: "/assets/icons/fast-delivery.png",
      path: "/matchmaking",
    },
    {
      name: "Invite Friends",
      icons: "/assets/icons/high-five.png",
      path: "/social",
    },
    {
      name: "Invite Manually",
      icons: "/assets/icons/invitation.png",
      path: "/social",
    },
  ];
  const invites = [];
  return (
    <div className="h-full w-full pt-20 text-white pl-36 gap-[20px] flex flex-col font-poppins">
      <div className="mx-auto w-[75%]">
        <h1 className="font-zen-dots text-white text-3xl">BATTLE ARENA</h1>
      </div>
      <div className="mx-auto font-poppins w-[75%] flex justify-between items-center gap-6 h-1/3">
        {topCards.map((ele, index) => (
          <TopCard
            key={index}
            name={ele.name}
            icon={ele.icons}
            path={ele.path}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 mx-auto w-[75%] my-3  font-poppins">
        <h3 className="text-[20px] leading-[30px] font-light">Match Invites</h3>
        {invites && !invites.length > 0 ? (
          <div className="flex flex-col justify-start items-start gap-4">
            <InviteCard />
            <InviteCard />
            <InviteCard />
          </div>
        ) : (
          <div className="mx-auto border-[1px] border-[#EDF1FA] rounded-[10px] flex justify-center items-center w-full h-[75px]">
            <p className="text-[20px] leading-[30px] text-center text-[#EDF1FAB2]">
              No Invites at the moment
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BattleArena;
