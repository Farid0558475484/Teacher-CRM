import { baseQuery } from "./api";
const token = localStorage.getItem("token");

export const coursesApi = baseQuery.injectEndpoints({
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
        invalidatesTags: ["Courses"],
      }),
    }),

    allCourses: builder.query({
      query: () => `/api/courses/all`,
      method: "POST",
      providesTags: ["Courses"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useInstructorAllCoursesQuery,
  useCreateCourseMutation,
  useAllCoursesQuery,
} = coursesApi;
