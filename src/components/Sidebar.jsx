import React from "react";

function Sidebar() {
  return (
    <div className="h-screen w-16 fixed left-0 top-0 bg-[#010101CC] pt-12 p-4 flex flex-col justify-between items-center transition-width duration-300 ease-in-out group hover:w-72 hover:border-r-2 sidebar-shadow hover:border-r-[#01E375]">
      <div className="flex flex-col items-start">
        <div>
          <img
            className="h-7 my-4"
            src="/assets/icons/profile.png"
            alt="profile-icon"
          />
        </div>
        <div>
          <img
            className="h-7 my-4"
            src="/assets/icons/log-data.png"
            alt="profile-icon"
          />
        </div>
        <div>
          <img
            className="h-7 my-4"
            src="/assets/icons/podium.png"
            alt="profile-icon"
          />
        </div>
        <div>
          <img
            className="h-7 my-4"
            src="/assets/icons/friends.png"
            alt="profile-icon"
          />
        </div>
        <div>
          <img
            className="h-7 my-4"
            src="/assets/icons/battle.png"
            alt="profile-icon"
          />
        </div>
        <div>
          <img
            className="h-7 my-4"
            src="/assets/icons/invitations.png"
            alt="profile-icon"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <img
            className="h-7 my-4"
            src="/assets/icons/info.png"
            alt="profile-icon"
          />
        </div>
        <div>
          <img
            className="h-7 my-4"
            src="/assets/icons/sound-on.png"
            alt="profile-icon"
          />
        </div>
      </div>
    </div>
    
  );
}

export default Sidebar;
