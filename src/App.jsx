import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LandingPage from "./modules/LandingPage/Pages/LandingPage";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" component={<LandingPage />} />
          {/* <Route path="/another" component={AnotherPage} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
