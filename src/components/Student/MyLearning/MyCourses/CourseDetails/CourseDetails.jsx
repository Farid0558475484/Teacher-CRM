import React, { useMemo, useCallback } from "react";
import { useAllLessonsOfCourseQuery } from "./../../../../../api/coursesApi";
import { useParams } from "react-router-dom";
import "./CourseDetails.scss";

const LessonCard = ({ lesson }) => {
  const { title, date, duration, status, videoLink } = lesson;

  const formattedDate = useMemo(
    () => new Date(date).toLocaleDateString(),
    [date]
  );

  return (
    <div className="lesson-card">
      <h3>{title}</h3>
      <p>Start date: {formattedDate}</p>
      <p>Duration: {duration} hours</p>
      <p>Status: {status || "N/A"}</p>
      <a
        href={videoLink}
        className={`view-details-btn ${videoLink ? "" : "disabled"}`}
      >
        {videoLink ? "Start Lesson" : "Disabled"}
      </a>
    </div>
  );
};

function CourseDetails() {
  const { courseId } = useParams();
  const { data, isLoading } = useAllLessonsOfCourseQuery(courseId);

  const renderLessons = useCallback(() => {
    return data?.lessons.map((lesson) => (
      <LessonCard key={lesson._id} lesson={lesson} />
    ));
  }, [data?.lessons]);

  if (isLoading || !data) {
    return <div>Loading lessons...</div>;
  }

  const { courseDetails } = data;

  return (
    <section className="course-details">
      <div className="container">
        <div className="row">
          <div className="course-header">
            <h1>{courseDetails.title}</h1>
            <p className="course-description">{courseDetails.description}</p>
            <div className=" row course-meta">
              <div className="col-3">
                <span>Category: {courseDetails.category}</span>
              </div>
              <div className="col-3">
                <span>Duration: {courseDetails.duration} hours</span>
              </div>
              <div className="col-3">
                <span>Enrolls: {courseDetails.enrolls}</span>
              </div>
              <div className="col-3">
                <span>Price: ${courseDetails.price}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lessons-grid">{renderLessons()}</div>
      </div>
    </section>
  );
}

export default CourseDetails;
