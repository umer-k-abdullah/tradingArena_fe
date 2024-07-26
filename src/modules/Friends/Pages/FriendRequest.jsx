import React, { useEffect, useState } from "react";
import FriendRequestCard from "../Components/FriendRequestCard";
import SendFriendRequest from "../Components/SendFriendRequest";
import { FaAngleDown } from "react-icons/fa6";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";

const FriendRequest = () => {
  const [requests, setRequests] = useState([]);
  const [ownRequests, setOwnRequests] = useState([]);
  const [toggleSendFriendRequest, setToggleSendFriendRequest] = useState(false);
  const [recievedFriendRequests, setRecievedFrinedReuests] = useState(false);

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axiosInstance.get("/friendRequestsList", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRequests(response.data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchFriendRequests();
  }, []);

  useEffect(() => {
    const fetchOwnRequests = async () => {
      try {
        
      } catch (error) {
        
      }
    };
  }, []);

  const removeRequest = (userId) => {
    setRequests((prevRequests) =>
      prevRequests.filter((request) => request.UserId !== userId)
    );
  };

  return (
    <div className="text-white mt-[9px]">
      <SendFriendRequest />
      <div className="text-white mt-[15px] mx-auto w-[75%] flex flex-col justify-normal items-start gap-[5px]">
        <div className="w-full">
          <div className="bg-[#0d0d0d] p-4 flex justify-between items-center mt-5">
            <h6 className="font-medium text-[20px] leading-[30px] text-[#EDF1FA]">
              Friend requests sent(0)
            </h6>
            <FaAngleDown
              className={`cursor-pointer transition-transform duration-300 ${
                toggleSendFriendRequest ? "rotate-180" : "rotate-0"
              }`}
              onClick={() =>
                setToggleSendFriendRequest(!toggleSendFriendRequest)
              }
            />
          </div>
          <div
            className={`overflow-hidden transition-all -mt-1 space-y-5 duration-500 ease-in-out ${
              toggleSendFriendRequest ? "max-h-[210px] opacity-100" : "max-h-0"
            }`}
          >
            {[1, 2, 3, 4].map((_, index) => (
              <FriendRequestCard
                key={index}
                firstName={"Umer"}
                lastName={"Abdullah"}
                username={"BeastFerret"}
                userId={1}
                senderId={2}
                profileImage={"/assets/images/avatar1.png"}
              />
            ))}
          </div>
        </div>{" "}
        <div className="w-full">
          <div className="bg-[#0d0d0d] p-4 flex justify-between items-center mt-5">
            <h6 className="font-medium text-[20px] leading-[30px] text-[#EDF1FA]">
              Friend requests Recieved({requests.length})
            </h6>
            <FaAngleDown
              className={`cursor-pointer transition-transform duration-300 ${
                recievedFriendRequests ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setRecievedFrinedReuests(!recievedFriendRequests)}
            />
          </div>
          <div
            className={`overflow-hidden transition-all -mt-1 space-y-5 duration-500 ease-in-out ${
              recievedFriendRequests ? "max-h-[210px] opacity-100" : "max-h-0"
            }`}
          >
            {requests &&
              requests.length > 0 &&
              requests.map((request, index) => (
                <FriendRequestCard
                  key={index}
                  firstName={request.User.firstName}
                  lastName={request.User.lastName}
                  username={request.User.username}
                  userId={request.UserId}
                  senderId={request.User.id}
                  profileImage={request.User.profileImage}
                  removeRequest={removeRequest}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
