import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axiosInstance from "../../../utils/axios";
import axios from "axios";

function Profile() {
  const [userProfile, setUserProfile] = useState(null); // Initialize with null
  const [memberSince, setMemberSince] = useState("");
  const [countryFlag, setCountryFlag] = useState("");
  const [userStats, setUserStats] = useState({});
  const [skeletonStatus, setSkeletonStatus] = useState(true);
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.get("/getProfile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserProfile(response.data);
      const createdAt = response?.data?.createdAt;
      const date = new Date(createdAt);
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();

      const formattedDate = `${month}/${year}`;
      setMemberSince(formattedDate);
      setSkeletonStatus(false)
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

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
      const countryData = response.data.data.find(
        (ele) => ele.name === country
      );
      setCountryFlag(countryData?.href?.flag || "");
    } catch (error) {
      console.error("Error fetching countries data", error);
    }
  };

  // const fetchUserStats = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await axiosInstance.get("/getUserStats", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     setUserStats(response?.data?.UserStats);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   fetchUserStats();
  // }, []);

  useEffect(() => {
    fetchUserData();
    // fetchCountries();
  }, []);

  useEffect(() => {
    if (userProfile) {
      fetchCountries(userProfile.country);
    }
  }, [userProfile]);

  const MiniStatCard = ({ label, value }) => (
    <div className="input-shadow bg-[#0D0D0D] rounded-lg border border-themeGray h-28 flex flex-col justify-center items-center">
      <span className="text-sm text-[#EDF1FAB2] text-center">{label}</span>
      <span className="text-xl text-themeGray">{value}</span>
    </div>
  );

  const ProfileSkeleton = () => (
    <div className="h-full w-full mt-20 pt-2 pl-32 gap-7 flex flex-col overflow-y-scroll custom-scrollbar">
      <div className="mx-auto w-[75%] flex justify-between items-center">
        <div className="h-7 w-48 rounded-xl bg-[#1a1a1a]"></div>
        <button className="bg-themeGreen font-poppins h-9 w-20 rounded-md font-medium form-btn-shadow">
        </button>
      </div>
      <div className="mx-auto font-poppins flex flex-col w-[75%] gap-6 h-full">
        <div className="bg-[#0d0d0d] w-full flex h-48 items-start p-8 gap-8 rounded-xl ">
          <div className="h-32 w-32 rounded-full bg-[#1a1a1a]"></div>
          <div className=" flex-1 h-36 flex flex-col justify-start gap-3">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 h-4 rounded-full w-28 bg-[#1a1a1a]"></div>
              <div className="h-4 rounded-full w-24 bg-[#1a1a1a]"></div>
            </div>
            <div className="h-5 rounded-full w-24 bg-[#1a1a1a]"></div>
            <div className="h-32 rounded-xl w-full bg-[#1a1a1a]"></div>
          </div>
        </div>
        <div className="grid grid-cols-5 w-full gap-5">
          {miniStatsCardData.map(() => (
            <div className="bg-[#0D0D0D] rounded-lg  h-28 flex flex-col justify-center items-center gap-3">
              <div className="h-5 w-32 rounded-xl bg-[#1a1a1a]"></div>
              <div className="h-5 w-10 rounded-xl bg-[#1a1a1a]"></div>
            </div>
          ))}
        </div>
        <div className="bg-[#0D0D0D] w-full h-[400px] p-6 rounded-xl mb-4 flex flex-col gap-3">
          <div className="flex">
            <div className="flex-1">
              
              <div className="h-10 w-44 rounded-xl bg-[#1a1a1a]"></div>
            </div>
            <div className="flex flex-1 justify-between">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 bg-[#1a1a1a] rounded-full"></div>
                <div className="h-4 w-16 rounded-full bg-[#1a1a1a]"></div>
                <div className="h-2 w-2 bg-[#1a1a1a] rounded-full"></div>
                <div className="h-4 w-16 rounded-full bg-[#1a1a1a]"></div>
              </div>
              <div>
                <div className="w-24 h-10 bg-[#1a1a1a] rounded-xl"></div>
              </div>
            </div>
          </div>
          <div className="h-[290px] w-full bg-[#1a1a1a] rounded-xl">
            
          </div>
        </div>
        <div className="w-full h-[70px]">
          <p>.</p>
        </div>
      </div>
    </div>
  );

  const defaultProfile = {
    profileImage: "assets/images/avatar1.png",
    firstName: "Adam",
    lastName: "Saddiq",
    country: "assets/icons/flag.png",
    username: "adam_554",
    bio: "Lorem ipsum dolor sit amet consectetur. Pretium aliquam iaculis nunc feugiat ullamcorper tellus erat sem. Viverra pellentesque blandit porttitor pellentesque. Sed volutpat libero enim.",
  };

  const profile = userProfile || defaultProfile;

  const miniStatsCardData = [
    {
      label: "Win/Loss Record",
      value: `${userStats.battlesWon}W - ${userStats.battlesLost}L`,
    },
    { label: "Drawn Battles Record", value: `${userStats.battlesDraw}` },
    { label: "Highest Win Streak", value: `${userStats.winStreak}` },
    { label: "Current Skill Rating", value: `${userStats.playerXp}` },
    {
      label: "Current Virtual Currency",
      value: `$${userStats.virtualCurrency}`,
    },
    {
      label: "Highest Profit Earned",
      value: `$${userStats.higherProfitEarned}`,
    },
    {
      label: "Average Profit Earned",
      value: `$${
        (userStats.higherProfitEarned + userStats.lowestProfitEarned) / 2
      }`,
    },
    {
      label: "Lowest Profit Earned",
      value: `$${userStats.lowestProfitEarned}`,
    },
    { label: "Battle Win Rate", value: "___" },
    { label: "Global Ranking", value: "___" },
  ];

  const data = [
    { month: "Jan", profit: 400, loss: 200 },
    { month: "Feb", profit: 800, loss: 80 },
    { month: "Mar", profit: 40, loss: 250 },
    { month: "Apr", profit: 200, loss: 90 },
    { month: "May", profit: 500, loss: 100 },
    { month: "Jun", profit: 400, loss: 200 },
    { month: "Jul", profit: 220, loss: 320 },
    { month: "Aug", profit: 80, loss: 850 },
    { month: "Sep", profit: 260, loss: 60 },
    { month: "Oct", profit: 1000, loss: 500 },
    { month: "Nov", profit: 60, loss: 500 },
    { month: "Dec", profit: 400, loss: 800 },
  ];

  const series = [
    {
      name: "Profit",
      data: data.map((item) => item.profit),
      color: "#22c55e",
    },
    {
      name: "Loss",
      data: data.map((item) => item.loss),
      color: "#ef4444",
    },
  ];

  const categories = data.map((item) => item.month);

  const options = {
    chart: {
      type: "line",
      zoomEnabled: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: "#EDF1FA",
          fontSize: "12px",
          fontFamily: "Poppins",
        },
      },
    },
    yaxis: {
      title: {
        text: "Price",
        style: {
          color: "#EDF1FA",
          fontSize: "14px",
          fontWeight: "normal",
          fontFamily: "Poppins",
        },
      },
      labels: {
        style: {
          colors: "#EDF1FA",
          fontSize: "12px",
          fontFamily: "Poppins",
        },
      },
    },
    legend: {
      show: false,
    },
  };
  // Configure the Skeleton here for API calls
  if (skeletonStatus) {
    return <ProfileSkeleton />;
  }
  return (
    <div className="h-full w-full mt-20 pt-2 pl-32 gap-7 flex flex-col overflow-y-scroll custom-scrollbar">
      <div className="mx-auto w-[75%] flex justify-between">
        <h1 className="font-zen-dots text-white text-3xl">PROFILE</h1>
        <button className="bg-themeGreen font-poppins h-9 w-20 rounded-md font-medium form-btn-shadow">
          Edit
        </button>
      </div>
      <div className="mx-auto font-poppins flex flex-col w-[75%] gap-6 h-full">
        <div className="bg-[#0d0d0d] w-full flex h-48 items-start p-8 gap-8 rounded-xl border border-themeGray input-shadow">
          <img
            src={profile.profileImage}
            alt="Avatar"
            className="h-32 rounded-full border border-themeGray"
          />
          <div className=" w-full h-36 flex flex-col justify-start gap-1">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <p className="text-xl text-white">
                  {profile.firstName + " " + profile.lastName}
                </p>
                {countryFlag && (
                  <img
                    src={countryFlag}
                    alt="Flag"
                    className="h-[25px] w-[35px]"
                  />
                )}
              </div>
              <div>
                <span className="text-sm text-[#edf1faB3]">
                  Member since {memberSince}
                </span>
              </div>
            </div>
            <span className="text-sm text-[#FFFFFF80]">
              {"@" + profile.username}
            </span>
            <p className="text-base text-themeGray">{profile.bio}</p>
          </div>
        </div>
        <div className="grid grid-cols-5 w-full gap-5">
          {miniStatsCardData.map((ele, index) => (
            <MiniStatCard
              key={index}
              label={ele.label}
              value={
                userStats && userStats[ele.value] ? userStats[ele.value] : 0
              }
            />
          ))}
        </div>
        <div className="bg-[#0D0D0D] w-full h-[400px] p-6 rounded-xl border border-themeGray input-shadow mb-4">
          <div className="flex">
            <div className="flex-1">
              <select
                name="StatType"
                id="StatType"
                className="h-10 w-44 bg-[#0D0D0D] text-themeGray border border-themeGray rounded-md text-center cursor-pointer custom-select"
              >
                <option value="Profit and losses" className="">
                  Profit and losses
                </option>
                <option value="Profit and losses" className="">
                  Option 2
                </option>
              </select>
            </div>
            <div className="flex flex-1 justify-between">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-[#EDF1FAB2]">Profits</span>
                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                <span className="text-[#EDF1FAB2]">Losses</span>
              </div>
              <div>
                <select
                  name="StatType"
                  id="StatType"
                  className="h-10 w-24 bg-[#0D0D0D] text-[#EDF1FAB2] border border-themeGray rounded-md text-center cursor-pointer custom-select"
                >
                  <option value="Monthly" className="">
                    Monthly
                  </option>
                  <option value="Profit and losses" className="">
                    Weekly
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <Chart options={options} series={series} type="line" height={300} />
          </div>
        </div>
        <div className="w-full h-[70px]">
          <p>.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
