import { createSlice } from "@reduxjs/toolkit";
import { getallUser } from "./thunk";

const allUserSlice = createSlice({
  name: "allUserSlice",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },

  reducers: {
    searchUser: (state, action) => {
      console.log(action.payload);
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getallUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getallUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getallUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});
export default allUserSlice.reducer;
export const { searchUser } = allUserSlice.actions;
