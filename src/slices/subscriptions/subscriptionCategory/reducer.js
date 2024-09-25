import { createSlice } from "@reduxjs/toolkit";
import { getCategorySubcription } from "./thunk";

export const initialState = {
  allSubscriptionCategory: [],
  error: null,
  isSubscriptionCreated: false,
  isSubscriptionSuccess: false,
};

const subscriptionsCategorySlice = createSlice({
  name: "subscriptionsCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategorySubcription.fulfilled, (state, action) => {
      state.allSubscriptionCategory = action?.payload;
      state.isSubscriptionCreated = false;
      state.isSubscriptionSuccess = true;
    });
    builder.addCase(getCategorySubcription.rejected, (state, action) => {
      state.error = action.payload?.error || action.error || null;
      state.isSubscriptionCreated = false;
      state.isSubscriptionSuccess = false;
    });
  },
});
export default subscriptionsCategorySlice.reducer;
