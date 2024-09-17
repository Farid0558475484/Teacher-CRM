import { baseQuery } from "./api";

export const coursesApi = baseQuery.injectEndpoints({
  tagTypes: ["Courses"],
  endpoints: (builder) => ({
    instructorAllCourses: builder.query({
      query: () => ({
        url: "/api/courses/instructor/all-courses",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        providesTags: ["Courses"],
      }),
    }),
    createCourse: builder.mutation({
      query: () => ({
        url: "/api/courses/create-course",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        invalidatesTags: ["Courses"],
      }),
    }),
    allCourses: builder.query({
      query: () => `/api/courses/all`,
      method: "POST",
      invalidatesTags: ["Courses"],
    }),
    studentAllLessons: builder.query({
      query: () => ({
        url: `/api/students/lessons`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        providesTags: ["Courses"],
      }),
    }),
    studentAllCourses: builder.query({
      query: () => ({
        url: `/api/students/courses`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        providesTags: ["Courses"],
      }),
    }),
    courseDetails: builder.query({
      query: (id) => `/api/courses/${id}/details`,
      headers: {
        Accept: "application/json",
      },
      providesTags: ["Courses"],
    }),
    addLesson: builder.mutation({
      query: ({ courseId, lessonData }) => ({
        url: `/api/courses/lesson/${courseId}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: lessonData,
      }),
      invalidatesTags: ["Courses"],
    }),
    deleteLesson: builder.mutation({
      query: ({ courseId, lessonId }) => ({
        url: `/api/courses/lesson/${courseId}/${lessonId}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: ["Courses"],
    }),
    allLessonsOfCourse: builder.query({
      query: (courseId) => `/api/courses/lesson/all-lessons/${courseId}`,
      headers: {
        Accept: "application/json",
      },
      providesTags: ["Courses"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useInstructorAllCoursesQuery,
  useCreateCourseMutation,
  useAllCoursesQuery,
  useStudentAllLessonsQuery,
  useStudentAllCoursesQuery,
  useCourseDetailsQuery,
  useAddLessonMutation,
  useDeleteLessonMutation,
  useAllLessonsOfCourseQuery,
} = coursesApi;
