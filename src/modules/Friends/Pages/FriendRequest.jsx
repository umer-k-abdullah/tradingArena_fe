import React from "react";
import FriendRequestCard from "../Components/FriendRequestCard";

const FriendRequest = () => {
  return (
    <div className="text-white mt-[15px] mx-auto w-[75%] flex flex-col justify-normal items-start gap-[15px]">
      <FriendRequestCard />
      <FriendRequestCard />
      <FriendRequestCard />
      <FriendRequestCard />
      <FriendRequestCard />
    </div>
  );
};

export default FriendRequest;
