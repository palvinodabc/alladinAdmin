import { createSlice } from "@reduxjs/toolkit";
import { createSubcription, deleteSubcription, getAllSubcriptions, updateSubcription } from "./thunk";

export const initialState = {
  allSubscription: [],
  error: null,
  isSubscriptionCreated: false,
  isSubscriptionSuccess: false,
};

const allSubscriptionsSlice = createSlice({
  name: "allSubscriptions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSubcriptions.fulfilled, (state, action) => {
      state.allSubscription = action?.payload;
      state.isSubscriptionCreated = false;
      state.isSubscriptionSuccess = true;
    });
    builder.addCase(getAllSubcriptions.rejected, (state, action) => {
      state.error = action.payload?.error || action.error || null;
      state.isSubscriptionCreated = false;
      state.isSubscriptionSuccess = false;
    });

    builder.addCase(createSubcription.fulfilled, (state, action) => {
      state.allSubscription = action.payload;
      state.isSubscriptionCreated = true;
    });
    builder.addCase(createSubcription.rejected, (state, action) => {
      // state.error = action.payload.error || null;
      state.error = action.payload && action.payload.error ? action.payload.error : action.error?.message || "Unknown error";
    });
    builder.addCase(updateSubcription.fulfilled, (state, action) => {
      // Ensure allSubscription is an array before calling .map()
      state.allSubscription = Array.isArray(state.allSubscription)
        ? state.allSubscription.map((subData) =>
            subData.sub_id.toString() === action.payload.data.sub_id.toString() ? { ...subData, ...action.payload.data } : subData
          )
        : [];

      // Alternatively, log if allSubscription is not an array
      if (!Array.isArray(state.allSubscription)) {
        console.error("state.allSubscription is not an array", state.allSubscription);
        state.allSubscription = [];
      }
    });
    builder.addCase(updateSubcription.rejected, (state, action) => {
      // state.error = action.payload.error || null;
      state.error = action.payload && action.payload.error ? action.payload.error : action.error?.message || "Unknown error";
    });

    // builder.addCase(deleteSubcription.fulfilled, (state, action) => {
    //   state.allSubscription = state.allSubscription?.filter((subData) => subData?.id.toString() !== action.payload.data.toString());
    // });
    builder.addCase(deleteSubcription.fulfilled, (state, action) => {
      if (Array.isArray(state.allSubscription)) {
        state.allSubscription = state.allSubscription?.filter((subData) => subData.id.toString() !== action.payload.data.toString());
      } else {
        state.allSubscription = [];
      }
    });

    builder.addCase(deleteSubcription.rejected, (state, action) => {
      // state.error = action.payload.error || null;
      state.error = action.payload && action.payload.error ? action.payload.error : action.error?.message || "Unknown error";
    });
  },
});
export default allSubscriptionsSlice.reducer;
