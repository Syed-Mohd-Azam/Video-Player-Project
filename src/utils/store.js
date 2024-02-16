import { configureStore } from "@reduxjs/toolkit";
import darkReducer from "./darkSlice";
import countryReducer from "./countrySlice";
import videosReducer from "./videosSlice";
const store = configureStore({
  reducer: {
    dark: darkReducer,
    country: countryReducer,
    videos: videosReducer,
  },
});
export default store;
