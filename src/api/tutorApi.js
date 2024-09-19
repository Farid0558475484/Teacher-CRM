import { baseQuery } from "./api";

export const tutorApi = baseQuery.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    startLesson: builder.mutation({
      query: (id) => ({
        url: `/api/tutors/start-lesson/${id}`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const { useStartLessonMutation } = tutorApi;