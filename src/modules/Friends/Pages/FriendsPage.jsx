import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FriendsListing from "./FriendsListing";
import FriendRequest from "./FriendRequest";
import { switchFriends, switchRequests } from "../FriendsSlice";

const FriendsPage = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.friends.mode);

  return (
    <div className="h-full w-full pt-20 text-white pl-36 gap-[30px] flex flex-col font-poppins">
      <div className="mx-auto w-[75%]">
        <h1 className="font-zen-dots text-white text-3xl">SOCIAL</h1>
      </div>
      <div className="mx-auto flex justify-normal items-center border-2 border-themeGreen rounded-[10px]">
        <button
          className={`w-[275px] h-[70px] rounded-[5px] text-[30px] leading-[45px] flex justify-center items-center ${
            mode == "friends"
              ? "bg-themeGreen text-black"
              : "bg-transparent text-[#EDF1FA]"
          }`}
          onClick={() => dispatch(switchFriends())}
        >
          Friends
        </button>
        <button
          className={`w-[275px] h-[70px] rounded-[5px] text-[30px] leading-[45px] flex justify-center items-center ${
            mode == "requests"
              ? "bg-themeGreen text-black "
              : "bg-transparent text-[#EDF1FA]"
          }`}
          onClick={() => dispatch(switchRequests())}
        >
          Requests
        </button>
      </div>
      <div className="mx-auto">
        {mode == "friends" ? <FriendsListing /> : <FriendRequest />}
      </div>
    </div>
  );
};

export default FriendsPage;
