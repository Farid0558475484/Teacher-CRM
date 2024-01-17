import { baseQuery } from "./api";
export const autApi = baseQuery.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    userId: builder.query({
      query: (userId) => `/api/users/${userId}`,
      headers: {
        authorization: `${sessionStorage.getItem("token")}`,
      },
    }),
    usersAll: builder.query({
      query: () => `/api/users`,
      providesTags: ["User"],
    }),

    userUpdate: builder.mutation({
      query: () => `/api/users/update-user`,
      method: "PATCH",
      body: (body) => body,
      headers: {
        authorization: `${sessionStorage.getItem("token")}`,
      },
      providesTags: ["User"],
    }),
  }),

  overrideExisting: false,
});

export const { useUserIdQuery, useUsersAllQuery, useUserUpdateMutation } =
  autApi;
