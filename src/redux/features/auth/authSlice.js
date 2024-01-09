import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    success: false,
    message: "",
  },
  reducers: {
    setAuth: (state, action) => {
      const { success } = action.payload;
      state.success = success;
      state.message = action.payload.message;
    },
    logout: (state) => {
      state.success = false;
      state.message = "";
    },
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
