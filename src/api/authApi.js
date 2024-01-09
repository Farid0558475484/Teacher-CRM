import { baseQuery } from "./api";

export const autApi = baseQuery.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (user) => ({
        url: "/api/students/login-student",
        user,
        method: "POST",
        body: user,
        providesTags: ["User"],
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSignInMutation } = autApi;
