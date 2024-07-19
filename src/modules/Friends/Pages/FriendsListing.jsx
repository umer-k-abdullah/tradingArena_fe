import React, { useEffect } from "react";
import FriendsSearch from "../Components/FriendsSearch";
import InviteFriend from "../Components/InviteFriend";
import axiosInstance from "../../../utils/axios";

const FriendsListing = () => {
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.get("/friendRequestsList", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFriends();
  }, []);

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
