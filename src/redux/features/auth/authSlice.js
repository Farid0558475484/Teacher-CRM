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
      const { success, message, token, user } = action.payload;
      state.success = success;
      state.message = message;
      state.token = token;
      state.user = user;
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
