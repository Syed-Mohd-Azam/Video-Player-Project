import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
  name: "darkSlice",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleMode } = darkSlice.actions;
export default darkSlice.reducer;
