import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: "",
  currentImage: "",
};

export const bgSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    changeBackgroundImage: (state, action) => {
      state.currentImage = action.payload;
    },
    changeBackgroundVideo: (state, action) => {
      state.currentVideo = action.payload;
    },
    removeBackground: (state) => {
      state.currentVideo = "";
      state.currentImage = "";
    },
  },
});

export const {
  changeBackgroundImage,
  changeBackgroundVideo,
  removeBackground,
} = bgSlice.actions;

export default bgSlice.reducer;
