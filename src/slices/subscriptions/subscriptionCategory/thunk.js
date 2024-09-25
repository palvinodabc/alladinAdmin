import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCategoryData } from "../../../helpers/fakebackend_helper";

export const getCategorySubcription = createAsyncThunk("getCategorySubcription", async (_, { rejectWithValue }) => {
  try {
    console.log("getCategorySubcription is called");
    const response = await getCategoryData();
    console.log("getCategorySubcription-->", response);
    toast.success("Subscription deleted successfully");
    return response;
  } catch (error) {
    toast.error("Something went wrong");
    return rejectWithValue(error.response?.data || error.message);
  }
});
