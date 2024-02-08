import { baseQuery } from "./api";
const token = sessionStorage.getItem("token");

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

    currentUser: builder.query({
      query: () => ({
        url: `/api/users/get/current-user`,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        providesTags: ["User"],
      }),
    }),
    // updateUser: builder.mutation({
    //   query: () => ({
    //     //////////
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify({
    //       name: name,
    //     }),
    //     providesTags: ["User"],
    //   }),
    // }),
  }),

  overrideExisting: false,
});

export const {
  useUserIdQuery,
  useUsersAllQuery,
  useCurrentUserQuery,
  useUpdateUserMutation,
} = autApi;
