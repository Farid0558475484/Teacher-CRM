import { baseQuery } from "./api";

export const autApi = baseQuery.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (user) => ({
        url: "/api/Security/post/auth/user",
        user,
        method: "POST",
        body: user,
        providesTags: ["User"],
      }),
    }),
    getRole: builder.query({
      query: () => `/api/Security/roles/readall`,
      providesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const { useSignInMutation, useGetRoleQuery } = autApi;
