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

const App = () => {
  return (
    <div className="w-screen h-screen">
      <ToastContainer />
      <Routes>
        <Route element={<FormsLayout />} path="auth">
          <Route element={<Signin />} path="signin" />
          <Route element={<SignUp />} path="signup" />
          <Route element={<ForgotPassword />} path="forgot_password" />
          <Route element={<ResetPassword />} path="reset_password" />
        </Route>
        <Route element={<MainLayout />} path="">
          <Route path="dashboard" element={<Overview />} />
          <Route path="social" element={<FriendsPage />} />

        </Route>
      </Routes>
    </div>
  );
};

export default App;