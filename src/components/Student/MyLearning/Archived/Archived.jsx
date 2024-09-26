import React from "react";
import { useArchiveCoursesQuery } from "./../../../../api/coursesApi";
import "./Archived.scss";

function Archived() {
  const { data: courses, isLoading } = useArchiveCoursesQuery(undefined, {
    refetchOnMountOrArgChange: true,  // Обновление данных при каждом монтировании компонента
  });

  const handleCourseClick = (course) => {
    console.log("Course clicked:", course);
  };

  if (isLoading) return <div>Loading...</div>;

  if (!courses || courses.length === 0) return <div>No courses available</div>;

  return (
    <section className="archived">
      <div className="container">
        <div className="row">
          {courses.map((course, index) => (
            <div key={course._id} className="col-md-3">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Archived;