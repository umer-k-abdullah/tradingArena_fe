import React, { useEffect, useState } from "react";
import FriendRequestCard from "../Components/FriendRequestCard";
import SendFriendRequest from "../Components/SendFriendRequest";
import { FaAngleDown } from "react-icons/fa6";
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
    <div className="text-white mt-[9px]">
      <SendFriendRequest />
      <div className="text-white mt-[15px] mx-auto w-[75%] flex flex-col justify-normal items-start gap-[15px]">
        <div className=" w-full h-10">
          <div className="bg-[#0d0d0d] p-4 flex justify-between items-center">
            <h6 className="">Friend requests sent(0)</h6>
            <FaAngleDown />
          </div>
        </div>
        {/* {requests && requests.length > 0 ? (
          requests.map((request, index) => (
            <FriendRequestCard
              key={index}
              firstName={request.User.firstName}
              lastName={request.User.lastName}
              username={request.User.username}
              userId={request.UserId}
              senderId={request.User.id}
              profileImage={request.User.profileImage}
            />
          ))
        ) : (
          <div className="w-full h-[250px] flex justify-center items-center ">
            <p className="text-[40px] font-zen-dots opacity-20">
              You have No Friend Request
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default FriendRequest;
