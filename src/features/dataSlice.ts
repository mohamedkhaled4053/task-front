import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAnnouncement, IExam } from "../types/types";
import { api } from "../utils/axios";

export interface dataState {
  exams: IExam[] | null;
  announcements: IAnnouncement[] | null;
  examsLoading: boolean;
  announcementsLoading: boolean;
}

const initialState: dataState = {
  exams: null,
  announcements: null,
  examsLoading: true,
  announcementsLoading: true,
};

export const getExams = createAsyncThunk("getExams", async (_, thunkAPI) => {
  try {
    let exams = await api.get("/exams").then((res) => res.data);
    return exams;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getAnnouncements = createAsyncThunk(
  "getAnnouncements",
  async (_, thunkAPI) => {
    try {
      let announcements = await api
        .get("/announcements")
        .then((res) => res.data);
      return announcements;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExams.pending, (state) => {
        state.examsLoading = true;
      })
      .addCase(getExams.fulfilled, (state, { payload }) => {
        state.exams = payload;
        state.examsLoading = false;
      })
      .addCase(getExams.rejected, (state, { payload }) => {
        state.examsLoading = false;
        console.log(payload);
      })
      .addCase(getAnnouncements.pending, (state) => {
        state.announcementsLoading = true;
      })
      .addCase(getAnnouncements.fulfilled, (state, { payload }) => {
        state.announcements = payload;
        state.announcementsLoading = false;
      })
      .addCase(getAnnouncements.rejected, (state, { payload }) => {
        state.announcementsLoading = false;
        console.log(payload);
      });
  },
});

export default dataSlice.reducer;
