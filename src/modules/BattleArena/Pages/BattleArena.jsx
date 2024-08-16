import React, { useEffect, useState } from "react";
import TopCard from "../Components/TopCard";
import InviteCard from "../Components/InviteCard";
import axiosInstance from "../../../utils/axios";
import axios from "axios";

const BattleArena = () => {
  const [challengeRequests, setChallengeRequest] = useState();
  const [countries, setCountries] = useState("");

  useEffect(() => {
    const getChallengeRequests = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.get(
          "/api/challenge/displayChallengeRequestsReceived",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setChallengeRequest(response.data);
      } catch (error) {}
    };
    getChallengeRequests();
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
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
        setCountries(response.data.data);
      } catch (error) {
        console.error("Error fetching countries data", error);
      }
    };
    fetchCountries();
  }, []);
  const topCards = [
    {
      name: "Quick Match",
      icons: "/assets/icons/fast-delivery.png",
      path: "/matchmaking",
    },
    {
      name: "Invite Friends",
      icons: "/assets/icons/high-five.png",
      path: "/social",
    },
    {
      name: "Invite Manually",
      icons: "/assets/icons/invitation.png",
      path: "/social",
    },
  ];

  const removeRequest = (id) => {
    setChallengeRequest((prevRequests) =>
      prevRequests.filter((request) => request.id !== id)
    );
  };

  return (
    <div className="h-full w-full pt-20 text-white pl-36 gap-[20px] flex flex-col font-poppins">
      <div className="mx-auto w-[75%]">
        <h1 className="font-zen-dots text-white text-xl">BATTLE ARENA</h1>
      </div>
      <div className="mx-auto font-poppins w-[75%] flex justify-between items-center gap-6 h-1/3">
        {topCards.map((ele, index) => (
          <TopCard
            key={index}
            name={ele.name}
            icon={ele.icons}
            path={ele.path}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 mx-auto w-[75%] my-3  font-poppins">
        <h3 className="text-[17px] leading-[30px] font-light">Match Invites</h3>
        {challengeRequests && challengeRequests.length > 0 ? (
          <div className="flex flex-col justify-start items-start gap-4">
            {challengeRequests.map((ele, index) => (
              <InviteCard
                key={index}
                id={ele.id}
                senderId={ele.senderId}
                recieverId={ele.recieverId}
                userId={ele.Sender.id}
                firstName={ele.Sender.firstName}
                lastName={ele.Sender.lastName}
                profileImage={ele.Sender.profileImage}
                username={ele.Sender.username}
                countries={countries}
                country={ele.Sender.country}
                removeRequest={removeRequest}
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto rounded-[10px] flex justify-center items-center w-full h-[75px] mt-20">
            <p className="text-[25px] leading-[30px] text-center text-white opacity-50 font-zen-dots">
              No Invites at the moment
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BattleArena;
