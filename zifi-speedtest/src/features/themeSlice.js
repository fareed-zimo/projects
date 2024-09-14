import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    id: 0,
    color: "#000000",
    secondary: "black",
    text: "white",
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
