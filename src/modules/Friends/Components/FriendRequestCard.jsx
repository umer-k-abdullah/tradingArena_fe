import React from "react";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";

const FriendRequestCard = ({
  firstName,
  lastName,
  username,
  profileImage,
  skillScore,
  userId,
  senderId,
}) => {
  const handleAcceptRequest = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.post(
        `/acceptFriendRequest/${userId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("friend request accepted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleRejectRequest = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.post(
        `/declineFriendRequest/${senderId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("friend request declined");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex w-full text-white items-center p-3 justify-between h-[28%] border-2  bg-themeBlack border-themeGreen rounded-md stats-card-win-shadow font-poppins">
      <div className="flex justify-normal items-center gap-10">
        {/* profile info */}
        <div className="flex items-center gap-4">
          {/* later on will replace with image */}
          <div className="rounded-full bg-white h-16 w-16">
            <img src={profileImage} className="w-16 h-16 rounded-full" alt="" />
          </div>
          <div className="flex flex-col">
            <span>{firstName + " " + lastName}</span>
            <span>{"@" + username}</span>
          </div>
        </div>
        {/* flag */}
        <img src="/assets/icons/flag.png" alt="" />
        {/* skill score */}
        <div className="flex justify-center items-center gap-1">
          <img src="/assets/icons/win-streak.png" className="h-[20px]" alt="" />
          <p className="text-[#EDF1FA] text-[13px]">7830</p>
        </div>
      </div>
      <div className="flex justify-normal items-center gap-[10px]">
        <button
          className="bg-themeBlack text-red-700 px-3 p-2 rounded-[5px] flex justify-center items-center text-[18px] leading-[27px]  font-poppins font-medium border-[1px] border-red-700 w-[130px]"
          onClick={handleRejectRequest}
        >
          Reject
        </button>

        <button
          className="bg-themeGreen text-themeBlack px-3 p-2 rounded-[5px] flex justify-center items-center text-[18px] leading-[27px]  font-poppins font-medium w-[130px]"
          onClick={handleAcceptRequest}
        >
          Accept{" "}
        </button>
      </div>
    </div>
  );
};

export default FriendRequestCard;
