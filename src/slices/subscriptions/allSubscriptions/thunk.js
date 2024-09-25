import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createSubcriptionsData,
  deleteSubcriptionsData,
  getAllSubcriptionsData,
  getCategoryData,
  updateSubcriptionsData,
} from "../../../helpers/fakebackend_helper";

export const getAllSubcriptions = createAsyncThunk("getAllSubscriptions", async (_, { rejectWithValue }) => {
  try {
    console.log("getAllSubscriptions called in thunk");
    const response = await getAllSubcriptionsData();
    console.log("getAllSubcriptionsData called");
    toast.success("Getting subscription data successfully");
    return response;
  } catch (error) {
    toast.error("Something went wrong");
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const createSubcription = createAsyncThunk("createSubcription", async (createSubscription, { rejectWithValue }) => {
  try {
    console.log("first", createSubscription);
    const response = await createSubcriptionsData(createSubscription);
    toast.success("Subscription created successfully");
    return response;
  } catch (error) {
    toast.error("Something went wrong");
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const updateSubcription = createAsyncThunk("updateSubcription", async (updateSubcriptionData, { rejectWithValue }) => {
  try {
    console.log("updateSubcription is called", updateSubcriptionData);
    const response = await updateSubcriptionsData(updateSubcriptionData);
    console.log("data------------>>>", response);
    toast.success("Subscription updated successfully");
    return response;
  } catch (error) {
    toast.error("Something went wrong");
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const deleteSubcription = createAsyncThunk("deleteSubcription", async (SubcriptionId, { rejectWithValue }) => {
  try {
    console.log("deleteSubcription is called", SubcriptionId);
    const response = await deleteSubcriptionsData(SubcriptionId);
    console.log("data------------>>>", response);
    toast.success("Subscription deleted successfully");
    return response;
  } catch (error) {
    toast.error("Something went wrong");
    return rejectWithValue(error.response?.data || error.message);
  }
});
