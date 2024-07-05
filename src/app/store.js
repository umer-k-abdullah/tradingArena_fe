import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./slider";
import authSliderSlice from "../modules/Auth/AuthSliderSlice";
const store = configureStore({
  reducer: {
    slider: sliderReducer,
    authSlider: authSliderSlice,
  },
});

export default store;
