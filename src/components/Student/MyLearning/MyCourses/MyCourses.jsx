import React, { memo, useState } from "react";
import { useStudentAllCoursesQuery } from "./../../../../api/coursesApi";
import { FaTrashAlt, FaHeart, FaEllipsisV } from "react-icons/fa";
import "./MyCourses.scss";

const Filters = memo(() => (
  <div className="filters">
    <button>Sort by: Recently Accessed</button>
    <button>Filter by: Categories</button>
    <button>Progress</button>
    <button>Instructor</button>
    <button>Reset</button>
    <input type="search" placeholder="Search my courses" />
  </div>
));

const CourseCard = memo(({ course }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="course-card">
      <img
        src={course.img || "https://img-c.udemycdn.com/course/480x270/4883600_1ee4.jpg"}
        alt={course.title}
      />
      <div className="course-info">
        <h3 className="courseName">{course.title}</h3>
        <p className="tutorName">{course.description}</p>
        <p className="startName">
          Start time: {new Date(course.startTime).toLocaleDateString()}
        </p>
        <p className="rating">
          {"★".repeat(Math.floor(course.rating || 5)) + "☆".repeat(5 - Math.floor(course.rating))}
        </p>
      </div>

      <div className="menu">
        <button className="menu-btn" onClick={toggleMenu}>
          <FaEllipsisV />
        </button>
        {menuOpen && (
          <div className="menu-dropdown">
            <div className="menu-item">
              <FaTrashAlt className="icon" />
              <span>Delete course</span>
            </div>
            <div className="menu-item">
              <FaHeart className="icon" />
              <span>Favorite</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

const MyCourses = () => {
  const { data, isLoading } = useStudentAllCoursesQuery();

  if (isLoading) {
    return <div>Loading courses...</div>;
  }

  return (
    <section className="MyCourses">
      <div className="container">
        <div className="row">
          <Filters />
        </div>
        <div className="row">
          <div className="course-list">
            {data?.courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(MyCourses);
