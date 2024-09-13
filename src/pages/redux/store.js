import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../api/authApi";
import { usersApi } from "../api/usersApi";
import { coursesApi } from "../api/coursesApi";
import { studentApi } from "../api/studentApi";
import { tutorApi } from "../api/tutorApi";
import authReducer from "./features/auth/authSlice";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [tutorApi.reducerPath]: tutorApi.reducer,

    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});

setupListeners(store.dispatch);
export default store;
