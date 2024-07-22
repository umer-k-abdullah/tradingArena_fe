import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Overview from "./modules/Overview/Pages/Overview";
import FormsLayout from "./layouts/FormsLayout";
import SignUp from "./modules/Auth/Pages/SignUp";
import FriendsPage from "./modules/Friends/Pages/FriendsPage";
import ForgotPassword from "./modules/Auth/Pages/ForgotPassword";
import Signin from "./modules/Auth/Pages/Signin";
import ResetPassword from "./modules/Auth/Pages/ResetPassword";
import HistoryLog from "./modules/HistoryLog/Pages/HistoryLog";
import FriendsListing from "./modules/Friends/Pages/FriendsListing";
import FriendRequest from "./modules/Friends/Pages/FriendRequest";
import BattleArena from "./modules/BattleArena/Pages/BattleArena";
import LeadersBoard from "./modules/LeadersBoard/Pages/LeadersBoard";
import AccountSettings from "./modules/Profile/Pages/AccountSettings";
import Profile from "./modules/Profile/Pages/Profile";
import CreateProfile from "./modules/CreateProfile/Pages/CreateProfile";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <ToastContainer />
      <Routes>
        <Route element={<FormsLayout />} path="">
          <Route element={<Signin />} path="" />
          <Route element={<SignUp />} path="signup" />
          <Route element={<ForgotPassword />} path="forgot_password" />
          <Route
            element={<ResetPassword />}
            path="resetPasswordForm/:id/:token"
          />
        </Route>
        <Route element={<CreateProfile />} path="create-profile/:userId" />
        <Route element={<MainLayout />} path="">
          <Route path="history-log" element={<HistoryLog />} />
          <Route element={<Overview />} path="dashboard" />
          <Route element={<LeadersBoard />} path="/leadersboard" />
          <Route element={<FriendsPage />} path="social">
            <Route element={<FriendsListing />} path="" />
            <Route element={<FriendRequest />} path="friend-requests" />
          </Route>
          <Route element={<BattleArena />} path="battle" />
          <Route element={<Profile />} path="profile" />
          <Route element={<AccountSettings />} path="account-settings" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
