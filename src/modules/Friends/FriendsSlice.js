import { createSlice } from "@reduxjs/toolkit";
import { fromJSON } from "postcss";

const friendSlice = createSlice({
  name: "friendSlice",
  initialState: {
    mode: "friends",
  },
  reducers: {
    switchFriends: (state) => {
      state.mode = "friends";
    },
    switchRequests: (state) => {
      state.mode = "requests";
    },
  },
});
export const { switchFriends, switchRequests } = friendSlice.actions;
export default friendSlice.reducer;
