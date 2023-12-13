import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

export const baseQuery = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://waiting.barattson.com" }),
  endpoints: () => ({}),
  prepareHeaders: (headers) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
