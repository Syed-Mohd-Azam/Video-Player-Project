import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name: "country",
  initialState: {
    countryToken: "IN",
  },
  reducers: {
    countryCode: (state, action) => {
      state.countryToken = action?.payload;
    },
  },
});
export const { countryCode } = countrySlice.actions;
export default countrySlice.reducer;
