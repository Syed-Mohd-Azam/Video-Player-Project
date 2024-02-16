import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    videosList: [],
  },
  reducers: {
    updateVideos: (state, action) => {
      state.videosList = action.payload;
    },
  },
});
export const { updateVideos } = videosSlice.actions;
export default videosSlice.reducer;
