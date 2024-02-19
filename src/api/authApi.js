import { baseQuery } from "./api";

export const authApi = baseQuery.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    signInStudent: builder.mutation({
      query: (user) => ({
        url: "/api/students/login-student",
        user,
        method: "POST",
        body: user,
        invalidatesTags: ["User"],
      }),
    }),
    signInTeacher: builder.mutation({
      query: (user) => ({
        url: "/api/tutors/login-tutor",
        user,
        method: "POST",
        body: user,
        invalidatesTags: ["User"],
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSignInStudentMutation, useSignInTeacherMutation } = authApi;
