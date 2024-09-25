import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAlluserData } from "../../../helpers/fakebackend_helper";

export const getallUser = createAsyncThunk("getallUser", async (args, { rejectWithValue }) => {
  try {
    console.log("getAllUser thunk called");
    const response = getAlluserData();
    const result = await response;
    console.log("result--->", result);
    return result;
  } catch (error) {
    return rejectWithValue(error);
  }
});
