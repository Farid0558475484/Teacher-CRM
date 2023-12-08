import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiCourse } from "../api/apiCourse";
import { apiCategory } from "../api/apiCategory";
import { apiCourseSection } from "../api/apiCourseSection";
import { autApi } from "../api/authApi";
import authSlice from "./features/auth/authSlice";

export const middlewares = [apiCategory, apiCourse, apiCourseSection, autApi];

export const store = configureStore({
  reducer: {
    [apiCourse.reducerPath]: apiCourse.reducer,
    [apiCategory.reducerPath]: apiCategory.reducer,
    [apiCourseSection.reducerPath]: apiCourseSection.reducer,
    [autApi.reducerPath]: autApi.reducer,
    auth: authSlice,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([
      apiCourse.middleware,
      apiCategory.middleware,
      apiCourseSection.middleware,
      autApi.middleware,
    ]),
  devTools: process.env.NODE_ENV !== "production",
});
setupListeners(store.dispatch);

console.log(store.getState());
