import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";
import axios from "axios";

const FriendRequestCard = ({
  firstName,
  lastName,
  username,
  country,
  profileImage,
  skillScore,
  userId,
  senderId,
  removeRequest,
}) => {
  const [countryFlag, setCountryFlag] = useState("");

  const fetchCountries = async (country) => {
    try {
      const response = await axios.get(
        "https://restfulcountries.com/api/v1/countries",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 1318|1DrmOUYos9sujlHAysZn64oe8jkGH0RbpZ76dWdI",
          },
        }
      );
      console.log(response.data.data);
      const countryData = response.data.data.find(
        (ele) => ele.name === country
      );
      console.log(countryData);
      setCountryFlag(countryData?.href?.flag || "");
    } catch (error) {
      console.error("Error fetching countries data", error);
    }
  };

  useEffect(() => {
    fetchCountries(country);
  }, []);

  const handleAcceptRequest = async () => {
    try {
      const token = localStorage.getItem("token");
      await axiosInstance.post(
        `/acceptFriendRequest/${userId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Friend request accepted");
      removeRequest(userId); // Remove the request from the list
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleRejectRequest = async () => {
    try {
      const token = localStorage.getItem("token");
      await axiosInstance.post(
        `/declineFriendRequest/${senderId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Friend request declined");
      removeRequest(userId); // Remove the request from the list
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex w-full text-white items-center p-3 justify-between h-[28%] border-2 bg-themeBlack border-themeGreen rounded-md stats-card-win-shadow font-poppins">
      <div className="grid grid-cols-3 justify-normal items-center gap-10">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-white h-16 w-16">
            <img src={profileImage} className="w-16 h-16 rounded-full" alt="" />
          </div>
          <div className="flex flex-col">
            <span>{firstName + " " + lastName}</span>
            <span>{"@" + username}</span>
          </div>
        </div>
        {/* <img src="/assets/icons/flag.png" alt="" /> */}
        {countryFlag && (
          <div className="flex justify-center items-center">
            <img src={countryFlag} alt="Flag" className="h-[25px] w-[35px]" />
          </div>
        )}
        <div className="flex justify-center items-center gap-1">
          <img src="/assets/icons/win-streak.png" className="h-[20px]" alt="" />
          <p className="text-[#EDF1FA] text-[13px]">7830</p>
        </div>
      </div>
      <div className="flex justify-normal items-center gap-[10px]">
        <button
          className="bg-themeBlack text-red-700 px-3 p-2 rounded-[5px] flex justify-center items-center text-[18px] leading-[27px] font-poppins font-medium border-[1px] border-red-700 w-[130px]"
          onClick={handleRejectRequest}
        >
          Reject
        </button>
        <button
          className="bg-themeGreen text-themeBlack px-3 p-2 rounded-[5px] flex justify-center items-center text-[18px] leading-[27px] font-poppins font-medium w-[130px]"
          onClick={handleAcceptRequest}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default FriendRequestCard;
