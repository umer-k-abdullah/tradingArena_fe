import React, { useEffect, useState } from "react";
import FriendRequestCard from "../Components/FriendRequestCard";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";

const FriendRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.get("/friendRequestsList", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRequests(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchFriendRequests();
  }, []);

  return (
    <div className="text-white mt-[15px] mx-auto w-[75%] flex flex-col justify-normal items-start gap-[15px]">
      {/* <FriendRequestCard />
      <FriendRequestCard />
      <FriendRequestCard />
      <FriendRequestCard />
      <FriendRequestCard /> */}
      {requests.map((request, index) => (
        <FriendRequestCard
          key={index}
          firstName={request.User.firstName}
          lastName={request.User.lastName}
          username={request.User.username}
          userId={request.UserId}
          senderId={request.User.id}
          profileImage={request.User.profileImage}
        />
      ))}
    </div>
  );
};

export default FriendRequest;
