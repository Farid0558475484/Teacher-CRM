import { baseQuery } from "./api";
const token = sessionStorage.getItem("token");

export const autApi = baseQuery.injectEndpoints({
  tagTypes: ["Courses"],
  endpoints: (builder) => ({
    instructorAllCourses: builder.query({
      query: () => ({
        url: "/api/courses/instructor/all-courses",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        providesTags: ["Courses"],
      }),
    }),

    createCourse: builder.mutation({
      query: () => ({
        url: "/api/courses/create-course",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        providesTags: ["Courses"],
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useInstructorAllCoursesQuery, useCreateCourseMutation } = autApi;
