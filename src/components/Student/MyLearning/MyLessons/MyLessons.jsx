import React, { memo } from "react";
import { useStudentAllLessonsQuery } from "./../../../../api/coursesApi";
import Loading from "../../../Loading/Loading";
import "./MyLessons.scss";

const Filters = memo(() => (
  <div className="filters">
    <button>Sort by: Recently Accessed</button>
    <button>Filter by: Categories</button>
    <button>Progress</button>
    <button>Instructor</button>
    <button>Reset</button>
    <input type="search" placeholder="Search my lessons" />
  </div>
));

const CourseCard = memo(({ course }) => (
  <div className="lesson-card">
    <img
      src={
        course.img ||
        "https://img-c.udemycdn.com/course/480x270/4883600_1ee4.jpg"
      }
      alt={course.title}
    />
    <div className="lesson-info">
      <h3 className="lessonName">{course.title}</h3>
      <p className="tutorName">{course.description}</p>
      <p className="status">Status: {course.status}</p>
      <p className="startName">
        Start time: {new Date(course.date).toLocaleDateString()}
      </p>
      <p className="rating">
        {"★".repeat(Math.floor(course.rating || 5)) +
          "☆".repeat(5 - Math.floor(course.rating))}
      </p>
    </div>
  </div>
));

const MyLessons = () => {
  const { data, isLoading } = useStudentAllLessonsQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="MyLessons">
      <div className="container">
        <div className="row">
          <Filters />
        </div>
        <div className="row">
          <div className="lesson-list">
            {data?.lessons.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(MyLessons);
