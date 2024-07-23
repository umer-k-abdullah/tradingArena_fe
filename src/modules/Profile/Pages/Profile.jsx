import React from "react";

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

  return (
    <div className="h-full w-full pt-20 pl-32 gap-7 flex flex-col overflow-y-scroll">
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
        {/* <div className="bg-purple-400 w-full h-[400px]">
          <div>
            <div>
              <select name="StatType" id="StatType" className="h-8 bg-themeBlack">
                <option value="Profit and losses">Profit and losses</option>
              </select>
            </div>
            <div>

            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Profile;
