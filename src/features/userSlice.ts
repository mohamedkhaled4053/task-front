import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/types";
import { api } from "../utils/axios";

export interface userState {
  user: IUser | null;
  loading: boolean;
}

const initialState: userState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
  loading: false,
};

export const userLogin = createAsyncThunk(
  "userLogin",
  async (
    { userName, password }: { userName: string; password: string },
    thunkAPI
  ) => {
    try {
      let token = await api
        .post("/auth/login", { userName, password })
        .then((res) => res.data);
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
        localStorage.setItem("user", JSON.stringify(payload));
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        console.log(payload);
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
