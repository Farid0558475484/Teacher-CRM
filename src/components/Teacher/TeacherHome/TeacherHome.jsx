import { memo, useState } from "react";
import { Card } from "react-bootstrap";
import { useInstructorAllCoursesQuery } from "./../../../api/coursesApi";
import { useStartLessonMutation } from "./../../../api/tutorApi";
import s from "./../Lessons/LessonList/LessonList.module.scss";

const TeacherHome = memo(() => {
  const { data } = useInstructorAllCoursesQuery();
  const [startLesson] = useStartLessonMutation();
  const [lessonsStatus, setLessonsStatus] = useState({});

  const startLessonAttend = async (lessonId) => {
    try {
      console.log("Starting lesson with ID:", lessonId);
      await startLesson(lessonId).unwrap();
      console.log("Lesson started successfully");

      setLessonsStatus((prevStatus) => ({
        ...prevStatus,
        [lessonId]: "started",
      }));
    } catch (error) {
      console.error("Failed to start the lesson:", error);
    }
  };

  return (
    <section className={s.lessonSection}>
      <div className="container">
        <div className="row">
          <div className={s.lessons}>
            <h2 className={s.title}>
              <div className={s.lessonHeader}>
                <div>{`Courses`}</div>
              </div>
            </h2>
            <div className={s.lessonsList}>
              {data?.courses?.map((course, index) => (
                <div key={index} className="mb-3 col-md-12">
                  <Card className={s.card}>
                    <Card.Body className={s.cardBody}>
                      <div className={s.leftContent}>
                        <Card.Title>Category: {course?.category}</Card.Title>
                        <Card.Text>Course Name: {course?.title}</Card.Text>
                        <Card.Text>
                          Course Desc: {course?.description}
                        </Card.Text>
                      </div>
                    </Card.Body>
                    <Card.Body>
                      <Card>
                        {course?.lesson?.map((lesson, lessonIndex) => {
                          const currentStatus =
                            lessonsStatus[lesson._id] || lesson?.status;

                          return (
                            <Card.Body className={s.cardBody} key={lessonIndex}>
                              <Card.Title>Lesson: {lesson?.title}</Card.Title>
                              <Card.Text>Slug: {lesson?.slug}</Card.Text>
                              <Card.Text>
                                CreditsSpent: {lesson?.creditsSpent}
                              </Card.Text>
                              <Card.Text>
                                Duration: {lesson?.duration}
                              </Card.Text>
                              {currentStatus === "waiting" && (
                                <button
                                  className="btn btn-success"
                                  onClick={() => startLessonAttend(lesson._id)}
                                >
                                  Start Lesson
                                </button>
                              )}
                              {currentStatus === "started" && (
                                <button className="btn btn-danger">
                                  Lesson Ended
                                </button>
                              )}
                            </Card.Body>
                          );
                        })}
                      </Card>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default TeacherHome;
