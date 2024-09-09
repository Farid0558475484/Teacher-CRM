import { baseQuery } from "./api";

export const tutorApi = baseQuery.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    tutorAttendLesson: builder.mutation({
      query: (id) => ({
        url: `/api/tutors/start-lesson/${id}`,
        method: "POST",
        id,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: id,
        invalidatesTags: ["User"],
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useTutorAttendLessonMutation } = tutorApi;
