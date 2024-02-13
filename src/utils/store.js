import { configureStore } from "@reduxjs/toolkit";
import darkReducer from "./darkSlice";
const store = configureStore({
  reducer: {
    dark: darkReducer,
  },
});
export default store;
