import React, { useEffect, useState } from "react";
import FriendsSearch from "../Components/FriendsSearch";
import InviteFriend from "../Components/InviteFriend";
import axiosInstance from "../../../utils/axios";

const FriendsListing = () => {
  const [friends, setFriends] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.get("/getFriendsList", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setFriends(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFriends();
  }, []);

  const filteredFriends = friends.filter(
    (friend) =>
      friend.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      friend.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      friend.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-white mt-[9px]">
      <FriendsSearch setSearchTerm={setSearchTerm} />
      <div className="mt-[15px] mx-auto w-[75%] flex flex-col justify-normal items-start gap-[15px] overflow-y-auto h-[400px] hide-scrollbar">
        {friends && friends.length > 0 ? (
          filteredFriends.map((ele, index) => (
            <InviteFriend
              key={index}
              firstName={ele.firstName}
              lastName={ele.lastName}
              profileImage={ele.profileImage}
              username={ele.username}
              country={ele.country}
            />
          ))
        ) : (
          <div className="w-full h-[250px] flex justify-center items-center ">
            <p className="text-[40px] font-zen-dots opacity-20">
              No Friends Found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsListing;
