import React, { useEffect, useState } from "react";
import FriendsSearch from "../Components/FriendsSearch";
import InviteFriend from "../Components/InviteFriend";
import axiosInstance from "../../../utils/axios";

const FriendsListing = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.get("/getFriendsList", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFriends(response.data);
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
        {/* <InviteFriend />
        <InviteFriend />
        <InviteFriend />
        <InviteFriend /> */}
        {friends.map((friend, index) => (
          <InviteFriend
            key={index}
            firstName={friend.firstName}
            lastName={friend.lastName}
            username={friend.username}
            profileImage={friend.profileImage}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsListing;
