import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./slider";
import friendsReducer from "../modules/Friends/FriendsSlice";
const store = configureStore({
  reducer: {
    slider: sliderReducer,
    friends: friendsReducer,
  },
});

export default store;
