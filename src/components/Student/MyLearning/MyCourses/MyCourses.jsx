import React, { memo, useState } from "react";
import { useStudentAllCoursesQuery, useAddArchiveCourseMutation } from "./../../../../api/coursesApi";
import { FaTrashAlt, FaHeart, FaEllipsisV } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loading from "../../../Loading/Loading";
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

const CourseCard = memo(({ course, onArchive, openMenuId, setOpenMenuId }) => {

  const [archiveCourse] = useAddArchiveCourseMutation();
  const navigate = useNavigate();

  const toggleMenu = (e) => {
    e.stopPropagation();
    setOpenMenuId(openMenuId === course._id ? null : course._id);
  };

  const handleCourseClick = (course) => {
    navigate(`${course._id}/lessons`); 
  };

  const handleArchive = async (courseId) => {
    onArchive(courseId);
    await archiveCourse(courseId).unwrap();
  };

  return (
    <div className="course-card" onClick={() => handleCourseClick(course)}>
      <img
        src={
          course.img ||
          "https://img-c.udemycdn.com/course/480x270/4883600_1ee4.jpg"
        }
        alt={course.title}
      />
      <div className="course-info">
        <h3 className="courseName">{course.title}</h3>
        <p className="tutorName">{course.description}</p>
        <p className="startName">
          Start time: {new Date(course.startTime).toLocaleDateString()}
        </p>
        <p className="rating">
          {"★".repeat(Math.floor(course.rating || 5)) +
            "☆".repeat(5 - Math.floor(course.rating))}
        </p>
      </div>

      <div className="menu" onClick={(e) => e.stopPropagation()}>
        <button className="menu-btn" onClick={toggleMenu}>
          <FaEllipsisV />
        </button>
        {openMenuId === course._id && (
          <div className="menu-dropdown">
            <div className="menu-item">
              <FaTrashAlt className="icon" />
              <span onClick={() => handleArchive(course._id)}>Archived</span>
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
  const [courses, setCourses] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null); // Состояние для хранения ID открытого меню

  React.useEffect(() => {
    if (data) {
      setCourses(data.courses);
    }
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  const handleArchive = (courseId) => {
    setCourses(prevCourses => prevCourses.filter(course => course._id !== courseId));
  };

  return (
    <section className="MyCourses">
      <div className="container">
        <div className="row">
          <Filters />
        </div>
        <div className="row">
          <div className="course-list">
            {courses.map((course, index) => (
              <CourseCard 
                key={index} 
                course={course} 
                onArchive={handleArchive} 
                openMenuId={openMenuId} 
                setOpenMenuId={setOpenMenuId}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(MyCourses);