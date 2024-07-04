import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    showSlider: false,
  },
  reducers: {
    handleSlider: (state) => {
      state.showSlider = true;
    },
    handleOnCloseSlider: (state) => {
      state.showSlider = false;
    },
  },
});

export const { handleSlider, handleOnCloseSlider } = sliderSlice.actions;
export default sliderSlice.reducer;
