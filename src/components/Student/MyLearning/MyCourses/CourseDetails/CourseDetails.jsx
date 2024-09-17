import React, { useMemo, useCallback } from "react";
import { useAllLessonsOfCourseQuery } from "./../../../../../api/coursesApi";
import { useParams } from "react-router-dom";
import "./CourseDetails.scss";
const LessonCard = ({ lesson }) => {
  const { title, date, duration, status, videoLink, _id, slug } = lesson;

  const formattedDate = useMemo(
    () => new Date(date).toLocaleDateString(),
    [date]
  );


  return (
    <div className="row">
      <div className={`lesson-card  d-flex mt-4`}>
        <div className="col-md-4">
          <div className="name">{title}</div>
          <div className="lessonId">Id: {_id}</div>
        </div>
        <div className="col-md-4">
          <div className="lessonName">{slug}</div>
          <div className="duration">Duration: {duration} hours</div>
        </div>
        <div className="col-md-4">
          <div className="status">Status: {status || "N/A"}</div>
          <div className="date">
            <h3>Start date: {formattedDate}</h3>
          </div>
          {videoLink && (
            <a
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="videoLinkBtn mt-2"
            >
              Start lesson
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

function CourseDetails() {
  const { courseId } = useParams();
  const { data, isLoading } = useAllLessonsOfCourseQuery(courseId);
  console.log(data);

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
