import React, { useEffect, useState } from "react";
import FriendRequestCard from "../Components/FriendRequestCard";
import SendFriendRequest from "../Components/SendFriendRequest";
import { FaAngleDown } from "react-icons/fa6";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";
import OwnFriendRequestsCard from "../Components/OwnFriendRequestsCard";
import Spinner from "../../../components/Spinner";

const FriendRequest = () => {
  const [requests, setRequests] = useState([]);
  const [ownRequests, setOwnRequests] = useState([]);
  const [toggleSendFriendRequest, setToggleSendFriendRequest] = useState(false);
  const [recievedFriendRequests, setRecievedFrinedReuests] = useState(false);
  const [isFriendRequestLoading, setIsFriendRequestLoading] = useState(false);
  const [isOwnFriendLoading, setIsOwnFriendLoading] = useState(false);

  const fetchFriendRequests = async () => {
    try {
      setIsFriendRequestLoading(true);
      const token = localStorage.getItem("token");
      const response = await axiosInstance.get("/friendRequestsList", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRequests(response.data);
      setIsFriendRequestLoading(false);
    } catch (error) {
      setIsFriendRequestLoading(false);
      toast.error(error.message);
    }
  };

  const fetchOwnRequests = async () => {
    try {
      setIsOwnFriendLoading(true);
      const token = localStorage.getItem("token");
      const response = await axiosInstance.get("/ownrequestsList", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOwnRequests(response?.data);
      setIsOwnFriendLoading(false);
    } catch (error) {
      console.log(error);
      setIsOwnFriendLoading(false);
    }
  };

  useEffect(() => {
    fetchFriendRequests();
  }, []);

  useEffect(() => {
    fetchOwnRequests();
  }, []);

  const removeRequest = (userId) => {
    setRequests((prevRequests) =>
      prevRequests.filter((request) => request.UserId !== userId)
    );
  };

  const removeOwnRequest = (id) => {
    setOwnRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== id)
    );
  };

  const refreshRequests = async () => {
    await fetchOwnRequests();
  };

  return (
    <div className="text-white mt-[9px]">
      <SendFriendRequest refreshRequests={refreshRequests} />
      <div className="text-white mt-[15px] mx-auto w-[75%] flex flex-col justify-normal items-start gap-[5px]">
        <div className="w-full">
          <div className="bg-[#0d0d0d] p-4 flex justify-between items-center mt-5">
            <h6 className="font-medium text-[20px] leading-[30px] text-[#EDF1FA]">
              Friend requests sent({ownRequests.length})
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
            {ownRequests &&
              ownRequests.length > 0 &&
              ownRequests.map((requests, index) => (
                <OwnFriendRequestsCard
                  key={index}
                  firstName={requests.firstName}
                  lastName={requests.lastName}
                  username={requests.username}
                  country={requests.country}
                  profileImage={requests.profileImage}
                  id={requests.id}
                  removeOwnRequest={removeOwnRequest}
                />
              ))}
          </div>
        </div>
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
            {isFriendRequestLoading ? (
              <Spinner />
            ) : (
              requests &&
              requests.length > 0 &&
              requests.map((request, index) => (
                <FriendRequestCard
                  key={index}
                  firstName={request.User.firstName}
                  country={request.User.country}
                  lastName={request.User.lastName}
                  username={request.User.username}
                  userId={request.UserId}
                  senderId={request.User.id}
                  profileImage={request.User.profileImage}
                  removeRequest={removeRequest}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendRequest;
