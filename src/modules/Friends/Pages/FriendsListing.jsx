import React from "react";
import FriendsSearch from "../Components/FriendsSearch";
import InviteFriend from "../Components/InviteFriend";

const FriendsListing = () => {
  return (
    <div className="text-white mt-[9px]">
      <FriendsSearch />
      <div className="mt-[15px] mx-auto w-[75%] flex flex-col justify-normal items-start gap-[15px]">
        <InviteFriend />
        <InviteFriend />
        <InviteFriend />
        <InviteFriend />
      </div>
    </div>
  );
};

export default FriendsListing;
