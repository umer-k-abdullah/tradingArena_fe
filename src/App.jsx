import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./modules/LandingPage/Pages/LandingPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Overview from "./modules/Overview/Pages/Overview";
import FormsLayout from "./layouts/FormsLayout";
import SignUp from "./modules/Auth/Pages/SignUp";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <ToastContainer />
      <Routes>
        <Route element={<FormsLayout />} path=""></Route>
        <Route element={<MainLayout />} path="">
          <Route path="overview" element={<Overview />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
