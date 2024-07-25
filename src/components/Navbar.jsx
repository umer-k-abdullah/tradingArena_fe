import React, { useState, useEffect } from "react";
import { FaBell, FaCaretDown } from "react-icons/fa";
import axiosInstance from "../utils/axios"; // Add import for axiosInstance
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [memberSince, setMemberSince] = useState();
  const handleAccountSettingsClick = () => {
    navigate("/account-settings", { state: { from: location.pathname } });
    setIsOpen(!isOpen);
  };

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
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="absolute top-0 left-0 pl-[75px] w-screen h-[80px] z-11 flex justify-between px-10 items-center">
      <div>
        <img src="/assets/images/logo-main.png" alt="" className="sr-only" />
      </div>
      <div className="flex gap-4">
        <div className="w-11 h-11 rounded-full border border-[#EDF1FA] flex justify-center items-center gray-shadow">
          <i className="text-white text-xl">
            <FaBell />
          </i>
        </div>

        <div
          className="w-40 h-11 bg-[#010101] text-white flex justify-between items-center font-poppins border cursor-pointer border-[#EDF1FA] gray-shadow rounded-full pr-3 relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="rounded-full w-11 h-full flex justify-center items-center border border-[#EDF1FA] bg-[#161616]">
            <img
              src={` ${
                userProfile
                  ? userProfile.profileImage
                  : "assets/images/avatar1.png"
              }`}
              alt="User Avatar"
              className="h-[42px] rounded-full"
            />
          </div>
          <span>
            {userProfile
              ? `${userProfile.firstName} ${userProfile.lastName[0]}.`
              : "Loading..."}
          </span>
          <i>
            <FaCaretDown />
          </i>
          {isOpen && (
            <div className="absolute top-11 overflow-hidden right-0 w-60 bg-[#010101] text-white border mt-1 border-[#EDF1FA] rounded-md shadow-lg z-10">
              <div className="py-2 px-2 cursor-pointer flex items-center gap-2">
                <img
                  src={` ${
                    userProfile
                      ? userProfile.profileImage
                      : "assets/images/avatar1.png"
                  }`}
                  alt="User Avatar"
                  className="h-10 rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <span>
                    {userProfile
                      ? userProfile.firstName + " " + userProfile.lastName
                      : "Loading..."}
                  </span>
                  <span className="text-xs text-[#edf1faB3]">
                    {userProfile ? `Member Since ${memberSince}` : "Loading..."}
                  </span>
                </div>
              </div>
              <hr className="w-[98%] border border-[#edf1faB3] mx-auto" />
              <div
                className="py-2 px-2 hover:bg-[#161616] cursor-pointer flex items-center gap-2"
                onClick={handleAccountSettingsClick}
              >
                <img
                  src="assets/icons/user-settings.png"
                  alt="User Settings"
                  className="h-10"
                />
                <span>Account Settings</span>
              </div>
              <div className="py-2 px-4 hover:bg-[#161616] cursor-pointer flex items-center gap-2">
                <img
                  src="assets/icons/notification-settings.png"
                  alt="User Settings"
                  className="h-7"
                />
                <span>Notification Settings</span>
              </div>
              <hr className="w-[98%] border border-[#edf1faB3] mx-auto" />
              <div className="py-3 px-4 hover:bg-[#161616] cursor-pointer text-red-500 flex items-center gap-2">
                <img
                  src="assets/icons/sign-out.png"
                  alt="Sign Out"
                  className="h-7"
                />
                <span>Sign Out</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
