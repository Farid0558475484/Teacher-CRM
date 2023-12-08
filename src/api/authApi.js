import { baseQuery } from "./api";

export const autApi = baseQuery.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (user) => ({
        url: "/User/register",
        user,
        method: "POST",
        body: user,
        providesTags: ["User"],
      }),
    }),
    signIn: builder.mutation({
      query: (user) => ({
        url: "/User/token",
        user,
        method: "POST",
        body: user,
        providesTags: ["User"],
      }),
    }),
    refreshToken: builder.mutation({
      query: () => ({
        url: `/User/refresh-token`,
        body: {},
        providesTags: ["User"],
      }),
    }),
    forgetPassword: builder.mutation({
      query: (email) => ({
        url: `/User/forgot-password`,
        email,
        method: "POST",
        body: email,
        providesTags: ["User"],
      }),
    }),
    resetPassword: builder.mutation({
      query: (email) => ({
        url: `/User/reset-password` + email,
        body: email,
        providesTags: ["User"],
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useRefreshTokenMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
} = autApi;
