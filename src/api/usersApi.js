import { baseQuery } from "./api";

export const autApi = baseQuery.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    userId: builder.query({
      query: (id) => ({
        url: `/api/users/${id}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useUserIdQuery } = autApi;
