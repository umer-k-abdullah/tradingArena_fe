import React, { useEffect, useState } from "react";
import FriendsSearch from "../Components/FriendsSearch";
import InviteFriend from "../Components/InviteFriend";
import axiosInstance from "../../../utils/axios";
import Spinner from "../../../components/Spinner";
import axios from "axios";

const FriendsListing = () => {
  const [friends, setFriends] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState("");

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

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("token");
        const response = await axiosInstance.get("/api/friend/getFriendsList", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(response.data);
        setFriends(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };

    fetchFriends();
  }, []);

  const filteredFriends = friends.filter(
    (friend) =>
      friend.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      friend.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      friend.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const getChallengerRequestSent = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.get(
          "/api/challenge/displayChallengeRequestsSent",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log("challenge sent", response);
      } catch (error) {}
    };

    getChallengerRequestSent();
  }, []);

  return (
    <div className="text-white mt-[9px]">
      <FriendsSearch setSearchTerm={setSearchTerm} />
      <div className="mt-[15px] mx-auto w-[75%] flex flex-col justify-normal items-start gap-[15px] overflow-y-auto h-[400px] hide-scrollbar">
        {isLoading ? (
          <Spinner />
        ) : friends && friends.length > 0 ? (
          filteredFriends.map((ele, index) => (
            <InviteFriend
              key={index}
              id={ele.id}
              firstName={ele.firstName}
              lastName={ele.lastName}
              profileImage={ele.profileImage}
              username={ele.username}
              countries={countries}
              country={ele.country}
            />
          ))
        ) : (
          <div className="w-full h-[250px] flex justify-center items-center ">
            <p className="text-[40px] font-zen-dots opacity-20">
              No Friends Found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsListing;
