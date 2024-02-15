import { configureStore } from "@reduxjs/toolkit";
import darkReducer from "./darkSlice";
import countryReducer from "./countrySlice";
const store = configureStore({
  reducer: {
    dark: darkReducer,
    country: countryReducer,
  },
});
export default store;
