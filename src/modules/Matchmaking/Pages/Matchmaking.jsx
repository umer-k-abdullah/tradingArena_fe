import React, { useEffect, useState } from "react";
import Player from "../Components/player";
import axiosInstance from "../../../utils/axios";
import Spinner from "../../../components/Spinner";

import io from "socket.io-client";

const socketUrl = "http://localhost:3304"; 

const Matchmaking = () => {
  const [userData, setUserData] = useState(null);
  const [opponentData, setOpponentData] = useState(null);
  const [isSearching, setIsSearching] = useState(true); 

  // Fetch user data
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
      const response = await axiosInstance.get("/getUserData", {
        headers: { Authorization: `Bearer ${token} `},
      });
      setUserData(response.data.userDetails);
      console.log("User Data:", response.data.userDetails);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  useEffect(() => {
    // A new socket instance
    const socket = io(socketUrl, {
      transports: ["websocket"],
      withCredentials: true,
    });

    console.log("Socket connection attempt:", socket);

    socket.on("connect", () => {
      console.log("Connected to socket server with ID:", socket.id);

      // Join lobby to start matchmaking
      const token = localStorage.getItem("token");
      const PairId = 1;

      socket.emit("joinLobby", { token, PairId });

      socket.on("matchFound", (data) => {
        console.log("Received data:", data);
      
        if (data.opponentDetails) {
          setOpponentData(data.opponentDetails);
        } else {
          console.error("Unexpected data structure:", data);
        }
      
        setIsSearching(false);
        console.log("opponentData (State) = ", opponentData);
      });
      

      // Listen for no match found event
      socket.on("noMatchFound", () => {
        setIsSearching(false);
        console.log("No match found. You can try again later.");
      });

      // Listen for error events
      socket.on("error", (error) => {
        console.error("Socket error:", error);
        setIsSearching(false);
      });

      // Listen for connection errors
      socket.on("connect_error", (error) => {
        console.error("Connection error:", error);
      });

      // Listen for socket disconnection
      socket.on("disconnect", (reason) => {
        console.log(`Disconnected: ${reason}`);
      });
    });

    fetchUserData();

    // Cleanup on component unmount
    return () => {
      if (socket) {
      
        socket.off("connect");
        socket.off("matchFound");
        socket.off("noMatchFound");
        socket.off("error");
        socket.disconnect(); 
      }
    };
  }, []);

  return (
    <div className="h-full w-full text-white pl-36 gap-[20px] flex flex-col font-poppins">
      <p className="font-poppins font-semibold text-[30px] leading-[45px] pt-20 pl-36">
        {/* Looking for your opponent... */}
      </p>
      <div className="mx-auto w-[80%] mt-36 flex justify-center items-center gap-16">
        {userData ? (
          <Player
            username={userData.username}
            profileImage={userData.profileImage}
            battleWon={userData.battlesWon}
            skillScore={userData.playerXp}
          />
        ) : (
          <Spinner />
        )}
        <img
          src="/assets/icons/vs.png"
          className="w-[170px] h-[157px] -mt-20"
          alt=""
        />            
        {opponentData ? (
          <Player
            username={opponentData.username}
            profileImage={opponentData.profilePicture}
            battleWon={opponentData.battlesWon}
            skillScore={opponentData.playerXp}
          />
        ) : (
          <Spinner />
        )}

      </div>
    </div>
  );
};

export default Matchmaking;