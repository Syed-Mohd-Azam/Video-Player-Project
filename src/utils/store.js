import { configureStore } from "@reduxjs/toolkit";
import darkReducer from "./darkSlice";
const store = configureStore({
  reducers: {
    dark: darkReducer,
  },
});
export default store;
