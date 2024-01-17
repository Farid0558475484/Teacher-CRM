import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    success: false,
    message: "",
    token: null,
    user: null,
  },
  reducers: {
    setAuth: (state, action) => {
      state.success = action.payload.success;
      state.message = action.payload.message;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.success = false;
      state.message = "";
      state.token = null;
      state.user = null;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
