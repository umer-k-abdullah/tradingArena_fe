import React, { useState } from "react";
import { FaBell, FaCaretDown } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import AccountSettings from "../modules/Profile/Pages/AccountSettings";
import { useLocation, useNavigate } from "react-router-dom";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleAccountSettingsClick = () => {
    navigate("/account-settings", { state: { from: location.pathname } });
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-0 left-0 pl-[75px] w-screen h-[80px] z-11  flex justify-between px-10 items-center">
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
              src="assets/images/avatar1.png"
              alt="User Avatar"
              className="h-[42px] rounded-full"
            />
          </div>
          <span>Adam S.</span>
          <i>
            <FaCaretDown />
          </i>
          {isOpen && (
            <div className="absolute top-11 overflow-hidden right-0 w-60 bg-[#010101] text-white border border-[#EDF1FA] rounded-md shadow-lg z-10">
              <div className="py-2 px-2 cursor-pointer flex items-center gap-2">
                <img
                  src="assets/images/avatar1.png"
                  alt="User Avatar"
                  className="h-10 rounded-full"
                />
                <div className="flex flex-col gap-1">
                <span>Adam Siddiq</span>
                <span className="text-xs text-[#edf1faB3]">Member Since 07/2024</span>
                </div>
              </div>
              <hr className="w-[98%] border border-[#edf1faB3] mx-auto" />
              <div className="py-2 px-2 hover:bg-[#161616] cursor-pointer flex items-center gap-2" onClick={handleAccountSettingsClick}>
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
