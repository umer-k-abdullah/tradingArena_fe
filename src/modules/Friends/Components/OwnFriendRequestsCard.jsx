import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";
import axios from "axios";

const OwnFriendRequestsCard = ({
  firstName,
  lastName,
  username,
  profileImage,
  id,
  removeOwnRequest,
  country,
  countries,
}) => {
  const [countryFlag, setCountryFlag] = useState("");
  useEffect(() => {
    if (countries.length > 0) {
      const countryData = countries.find((ele) => ele.name == country);
      console.log(countryData);
      setCountryFlag(countryData?.href?.flag);
    }
  }, [countries]);

  const cancelRequest = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.delete(
        `/api/friend/cancelRequest/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      removeOwnRequest(id);
      toast.success("Friend Request deleted successfuly");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex w-full text-white items-center p-3 justify-between h-[28%] border-2 bg-themeBlack border-themeGreen rounded-md stats-card-win-shadow font-poppins">
      <div className="grid grid-cols-6 justify-center items-center gap-10 w-[50%]">
        <div className="flex items-center gap-4 col-span-3">
          <div className="rounded-full bg-white h-16 w-16">
            <img src={profileImage} className="w-16 h-16 rounded-full" alt="" />
          </div>
          <div className="flex flex-col">
            <span>{firstName + " " + lastName}</span>
            <span>{"@" + username}</span>
          </div>
        </div>
        {countryFlag && (
          <div className="flex justify-center col-span-1">
            <img src={countryFlag} alt="Flag" className="h-[25px] w-[35px]" />
          </div>
        )}
        <div className="flex justify-center items-center gap-1 col-span-2">
          <img src="/assets/icons/win-streak.png" className="h-[20px]" alt="" />
          <p className="text-[#EDF1FA] text-[13px]">0000</p>
        </div>
      </div>
      <div className="flex justify-normal items-center gap-[10px]">
        <FaRegTrashAlt
          className=" text-red-700 text-3xl mr-5 cursor-pointer"
          onClick={cancelRequest}
        />
      </div>
    </div>
  );
};

export default OwnFriendRequestsCard;
