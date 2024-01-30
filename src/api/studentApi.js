import { baseQuery } from "./api";
const token = sessionStorage.getItem("token");

export const studentApi = baseQuery.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    studentAttendLesson: builder.mutation({
      query: (lessonId) => ({
        url: `/api/students/attend-lesson/${lessonId}`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },

        providesTags: ["User"],
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useStudentAttendLessonMutation } = studentApi;
