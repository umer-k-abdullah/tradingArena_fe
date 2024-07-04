import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./slider";

const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});

export default store;
