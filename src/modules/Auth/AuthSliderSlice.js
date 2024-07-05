import { createSlice } from "@reduxjs/toolkit";

const authSliderSlice = createSlice({
  name: "authSliderSlice",
  initialState: {
    showModel: false,
    mode: "signup",
  },
  reducers: {
    // handleOnClose: (state) => {
    //   state.showModel = false;
    // },
    // handleAuthModel: (state) => {
    //   state.showModel = true;
    // },
    switchSingnin: (state) => {
      state.mode = "signin";
    },
    switchSignup: (state) => {
      state.mode = "signup";
    },
  },
});

export const { switchSingnin, switchSignup } = authSliderSlice.actions;
export default authSliderSlice.reducer;
