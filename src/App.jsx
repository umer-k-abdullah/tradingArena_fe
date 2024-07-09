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
        <Route element={<MainLayout />} path="">
          {/* <Route path="" element={<LandingPage />} /> */}
          <Route path="overview" element={<Overview />} />
        </Route>
        {/* <Route element={<MainLayout />} path="">
          <Route path="" element={<LandingPage />} />
        </Route> */}
        <Route element={<FormsLayout />} path=""></Route>
      </Routes>
    </div>
  );
};

export default App;
