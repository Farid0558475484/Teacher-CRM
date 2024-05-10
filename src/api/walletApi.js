import { baseQuery } from "./api";

export const walletApi = baseQuery.injectEndpoints({
  endpoints: (builder) => ({
    userBalance: builder.query({
      query: (studentId) => ({
        url: `/api/wallets/${studentId}`,
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }),
    }),
  }),

  overrideExisting: false,
});

export const { useUserBalanceQuery } = walletApi;
