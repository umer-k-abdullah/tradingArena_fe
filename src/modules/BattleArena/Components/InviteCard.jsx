import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";

const InviteCard = ({
  id,
  firstName,
  lastName,
  username,
  countries,
  country,
  profileImage,
}) => {
  const [countryFlag, setCountryFlag] = useState("");
  useEffect(() => {
    if (countries.length > 0) {
      console.log(countries);
      const countryData = countries.find((ele) => ele.name == country);
      console.log(countryData);
      console.log(countryData?.href?.flag);
      setCountryFlag(countryData?.href?.flag);
    }
  }, [countries]);

  const handleAcceptChallenge = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.get(
        `/api/challenge/acceptChallenge/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Challenge accepted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeclineChallenge = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.get(
        `/api/challenge/declineChallenge/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("challenge declined");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex w-full text-white items-center p-3 justify-between h-[77px] border-2 px-6 bg-themeBlack border-themeGreen rounded-md stats-card-win-shadow font-poppins">
      <div className="grid grid-cols-6 justify-center items-center gap-10 w-[50%]">
        {/* profile info */}
        <div className="flex items-center gap-4 col-span-3">
          {/* later on will replace with image */}
          <div className="rounded-full bg-white h-12 w-12">
            <img src={profileImage} className="w-12 h-12 rounded-full" alt="" />
          </div>
          <div className="flex flex-col">
            <span>{firstName + " " + lastName}</span>
            <span>@{username}</span>
          </div>
        </div>
        {/* flag */}
        {countryFlag && (
          <div className="flex justify-center col-span-1 ">
            <img src={countryFlag} alt="Flag" className="h-[25px] w-[35px]" />
          </div>
        )}
        {/* skill score */}
        <div className="flex justify-center items-center gap-1 col-span-2">
          <img src="/assets/icons/win-streak.png" className="h-[20px]" alt="" />
          <p className="text-[#EDF1FA] text-[13px]">7830</p>
        </div>
      </div>
      <div className="flex justify-normal items-center gap-[10px]">
        <button
          className="bg-themeBlack text-red-700 px-3 p-2 rounded-[5px] flex justify-center items-center text-[18px] leading-[27px] font-poppins font-medium border-[1px] border-red-700 w-[130px]"
          onClick={handleDeclineChallenge}
        >
          Reject
        </button>
        <button
          className="bg-themeGreen text-themeBlack px-3 p-2 rounded-[5px] flex justify-center items-center text-[18px] leading-[27px] font-poppins font-medium w-[130px]"
          onClick={handleAcceptChallenge}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default InviteCard;
