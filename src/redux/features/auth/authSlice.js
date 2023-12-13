import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    userName: null,
    role: null,
  },
  reducers: {
    setAuth: (state, action) => {
      const { isAuthenticated, userName, role } = action.payload;
      state.isAuthenticated = isAuthenticated;
      state.userName = userName;
      state.role = role;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userName = null;
      state.role = null;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;

export default authSlice.reducer;
