import { baseQuery } from "./api";

export const studentApi = baseQuery.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    studentAttendLesson: builder.mutation({
      query: (lessonId) => ({
        url: `/api/students/attend-lesson/${lessonId}`,
        method: "POST",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },

        invalidatesTags: ["User"],
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useStudentAttendLessonMutation } = studentApi;
