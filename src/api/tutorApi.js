import { baseQuery } from "./api";
const token = sessionStorage.getItem("token");

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
          Authorization: `Bearer ${token}`,
        },
        body: id,
        providesTags: ["User"],
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useTutorAttendLessonMutation } = tutorApi;
