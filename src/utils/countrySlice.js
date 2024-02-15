import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name: "country",
  initialState: {
    countryCode: "IN",
  },
  countryCode: (state, action) => {
    state.countryCode = action.payload;
  },
});
export const { countryCode } = countrySlice.actions;
export default countrySlice.reducer;
