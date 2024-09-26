import React, { useState } from "react";
import {
  useArchiveCoursesQuery,
  useUnArchiveCourseMutation,
} from "./../../../../api/coursesApi";
import { FaTrashAlt, FaEllipsisV } from "react-icons/fa";

import "./Archived.scss";

function Archived() {
  const { data: courses, isLoading, refetch } = useArchiveCoursesQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const [unArchiveCourse] = useUnArchiveCourseMutation();

  const [openMenuId, setOpenMenuId] = useState(null);

  const handleCourseClick = (course) => {
    console.log("Course clicked:", course);
  };

  const handleUnArchive = async (courseId) => {
    try {
      // Выполнение мутации для разархивации курса
      await unArchiveCourse(courseId).unwrap();
      console.log("Course unarchived:", courseId);
      
      // Повторное получение данных для обновления списка
      refetch();
    } catch (error) {
      console.error("Failed to unarchive course:", error);
    }
  };

  const toggleMenu = (courseId) => {
    setOpenMenuId(openMenuId === courseId ? null : courseId);
  };

  if (isLoading) return <div>Loading...</div>;

  if (!courses || courses.length === 0) return <div>No courses available</div>;

  return (
    <section className="archived">
      <div className="container">
        <div className="row">
          {courses.map((course, indx) => (
            <div key={indx} className="col-md-3">
              <div
                className="course-card mt-2"
                onClick={() => handleCourseClick(course)}
              >
                <div className="card-img">
                  <img
                    className="img-fluid"
                    src={
                      course.img ||
                      "https://img-c.udemycdn.com/course/480x270/4883600_1ee4.jpg"
                    }
                    alt={course.title}
                  />
                </div>
                <div className="course-info">
                  <h3 className="courseName">{course.title}</h3>
                  <p className="tutorName">{course.description}</p>
                </div>
                <div className="menu" onClick={(e) => e.stopPropagation()}>
                  <button
                    className="menu-btn"
                    onClick={() => toggleMenu(course._id)}
                  >
                    <FaEllipsisV />
                  </button>
                  {openMenuId === course._id && (
                    <div className="menu-dropdown">
                      <div className="menu-item">
                        <FaTrashAlt className="icon" />
                        <span onClick={() => handleUnArchive(course._id)}>
                          Unarchive
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Archived;