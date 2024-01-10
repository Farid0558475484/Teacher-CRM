import { baseQuery } from "./api";

export const autApi = baseQuery.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    signInStudent: builder.mutation({
      query: (user) => ({
        url: "/api/students/login-student",
        user,
        method: "POST",
        body: user,
        providesTags: ["User"],
      }),
    }),
    signInTeacher: builder.mutation({
      query: (user) => ({
        url: "/api/tutors/login-tutor",
        user,
        method: "POST",
        body: user,
        providesTags: ["User"],
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSignInStudentMutation, useSignInTeacherMutation } = autApi;
