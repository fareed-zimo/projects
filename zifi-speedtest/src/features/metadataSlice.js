import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoPlaying: false,
  solidBg: false,
  imageBg: false,
  sequenceRepeat: false,
  inInfo: false,
  mobileScreen: false,
};

export const metadataSlice = createSlice({
  name: "metadata",
  initialState,
  reducers: {
    videoStatusChange: (state, action) => {
      state.videoPlaying = action.payload;
    },
    imageStatusChange: (state, action) => {
      state.imageBg = action.payload;
    },
    solidStatusChange: (state, action) => {
      state.solidBg = action.payload;
    },
    sequenceRepeatFn: (state, action) => {
      state.sequenceRepeat = action.payload;
    },
    infoTabOpen: (state, action) => {
      state.inInfo = action.payload;
    },
    isMobileScreen: (state, action) => {
      state.mobileScreen = action.payload;
    },
  },
});

export const {
  videoStatusChange,
  imageStatusChange,
  solidStatusChange,
  sequenceRepeatFn,
  infoTabOpen,
  isMobileScreen,
} = metadataSlice.actions;

export default metadataSlice.reducer;
