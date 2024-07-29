import axios from "axios";
import React, { useState, useEffect } from "react";

const InviteFriend = ({
  firstName,
  lastName,
  username,
  profileImage,
  country,
}) => {
  const [countryFlag, setCountryFlag] = useState("");
  console.log(country);
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

  return (
    <div className="flex w-full text-white items-center p-3 justify-between h-[28%] border-2 px-6 bg-themeBlack border-themeGreen rounded-md stats-card-win-shadow font-poppins">
      <div className="grid grid-cols-3 justify-normal items-center gap-10">
        {/* profile info */}
        <div className="flex items-center gap-4">
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
         <div className="flex justify-center">
          <img src={countryFlag} alt="Flag" className="h-[25px] w-[35px]" />
         </div>
        )}
        {/* skill score */}
        <div className="flex justify-center items-center gap-1">
          <img src="/assets/icons/win-streak.png" className="h-[20px]" alt="" />
          <p className="text-[#EDF1FA] text-[13px]">7830</p>
        </div>
      </div>
      <button className="bg-themeGreen text-themeBlack p-3 rounded-[5px] flex justify-center items-center text-[18px] leading-[27px]  font-poppins font-medium">
        Challenge Friend
      </button>
    </div>
  );
};

export default InviteFriend;
