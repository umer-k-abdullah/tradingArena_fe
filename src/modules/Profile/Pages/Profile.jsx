import React from "react";
import Chart from "react-apexcharts";

function Profile() {
  const MiniStatCard = ({ label, value }) => {
    return (
      <div className="input-shadow bg-[#0D0D0D] rounded-lg border border-themeGray h-28 flex flex-col justify-center items-center">
        <span className="text-sm text-[#EDF1FAB2]">{label}</span>
        <span className="text-xl text-themeGray">{value}</span>
      </div>
    );
  };
  const { profileImage, firstName, lastName, country, username, bio } = {
    profileImage: "assets/images/avatar1.png",
    firstName: "Adam",
    lastName: "Saddiq",
    country: "assets/icons/flag.png",
    username: "adam_554",
    bio: "Lorem ipsum dolor sit amet consectetur. Pretium aliquam iaculis nunc feugiat ullamcorper tellus erat sem. Viverra pellentesque blandit porttitor pellentesque. Sed volutpat libero enim.",
  };

  const miniStatsCardData = [
    { label: "Win/Loss Record", value: "20W - 22L" },
    { label: "Drawn Battles Record", value: "150 x 21" },
    { label: "Highest Win Streak", value: "7" },
    { label: "Current Skill Rating", value: "5843" },
    { label: "Current Virtual Currency", value: "$258K" },
    { label: "Highest Profit Earned", value: "$78K" },
    { label: "Average Profit Earned", value: "$5K" },
    { label: "Lowest Profit Earned", value: "$2K" },
    { label: "Battle Win Rate", value: "88%" },
    { label: "Global Ranking", value: "#256" },
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
    // ... other months
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
      zoomEnabled: false, // Disable zooming for better control
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth", // This is the key to creating a smooth line
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: "#EDF1FA", // Customize x-axis label color
          fontSize: "12px",
          fontFamily: "Poppins",
        },
      },
    },
    yaxis: {
      title: {
        text: "Price",
        style: {
          color: "#EDF1FA", // Customize y-axis title color
          fontSize: "14px",
          fontWeight: "normal",
          fontFamily: "Poppins", // Customize y-axis title font family
        },
      },
      labels: {
        style: {
          colors: "#EDF1FA", // Customize x-axis label color
          fontSize: "12px",
          fontFamily: "Poppins",
        },
      },
    },
    legend: {
      show: false, // Hide the legend
    },
  };

  return (
    <div className="h-full w-full mt-20 pt-2 pl-32 gap-7 flex flex-col overflow-y-scroll custom-scrollbar">
      <div className="mx-auto w-[75%] flex justify-between">
        <h1 className="font-zen-dots text-white text-3xl">PROFILE</h1>
        <button className="bg-themeGreen font-poppins h-9 w-20 rounded-md font-medium form-btn-shadow">
          Edit
        </button>
      </div>
      <div className="mx-auto font-poppins flex flex-col w-[75%] gap-6 h-full">
        <div className="bg-[#0d0d0d] w-full flex h-48 items-center p-8 gap-8 rounded-xl border border-themeGray input-shadow">
          <img
            src={profileImage}
            alt="Avatar"
            className="h-32 rounded-full border border-themeGray"
          />
          <div className=" w-full h-36 flex flex-col justify-center gap-1">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <p className="text-xl text-white">
                  {firstName + " " + lastName}
                </p>
                <img src={country} alt="Flag" className="h-7" />
              </div>
              <div>
                <span className="text-sm text-[#edf1faB3]">
                  Member since 07/2024
                </span>
              </div>
            </div>
            <span className="text-sm text-[#FFFFFF80]">{"@" + username}</span>
            <p className="text-base text-themeGray">{bio}</p>
          </div>
        </div>
        <div className="grid grid-cols-5 w-full gap-5">
          {miniStatsCardData.map((ele, index) => (
            <MiniStatCard key={index} label={ele.label} value={ele.value} />
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
