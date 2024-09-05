import { memo } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useInstructorAllCoursesQuery, useDeleteLessonMutation } from "./../../../../api/coursesApi";
import "react-loading-skeleton/dist/skeleton.css";
import s from "./LessonList.module.scss";

const LessonList = memo(({ AddLessons, AddCourses }) => {
  const { data, isLoading } = useInstructorAllCoursesQuery();
  const [deleteLesson] = useDeleteLessonMutation();

  const handleDelete = async (courseId, lessonId) => {
    const confirmed = window.confirm("Are you sure you want to delete this lesson?");
    if (confirmed) {
      try {
        const response = await deleteLesson({ courseId, lessonId }).unwrap();
        if (response.success) {
          alert("Lesson deleted successfully!");
        }
      } catch (error) {
        alert("Failed to delete the lesson. Please try again.");
      }
    }
  };

  return (
    <section className={s.lessonSection}>
      <Container>
        <Row>
          <div className={s.lessons} >
            <h2 className={s.title}>
              <div className={s.lessonHeader}>
                <div>{`Courses`}</div> <>{AddCourses && <AddCourses />}</>
              </div>
            </h2>
            <div className={s.lessonsList}>
              {data?.courses?.map((course, index) => (
                <Col key={index} md={12} className="mb-3">
                  <Card className={s.card}>
                    <Card.Body className={s.cardBody}>
                      <div className={s.leftContent}>
                        <div>
                          <Card.Title>Category: {course?.category}</Card.Title>
                          <Card.Text>Course Name: {course?.title}</Card.Text>
                          <Card.Text>Course Desc: {course?.description}</Card.Text>
                        </div>
                      </div>
                      <div className={s.rightContent}>
                        <Card.Text className={s.time}>
                          Duration: {course?.duration} min
                        </Card.Text>
                        <Card.Text className={s.price}>
                          USD {course?.creditsSpent}
                        </Card.Text>
                      </div>
                    </Card.Body>
                    <Card.Body>
                      <Card>
                        {course?.lesson?.map((lesson, lessonIndex) => (
                          <Card.Body className={s.cardBody} key={lessonIndex}>
                            <Card.Title>Lesson: {lesson?.title}</Card.Title>
                            <Card.Text>Slug: {lesson?.slug}</Card.Text>
                            <Card.Text>
                              CreditsSpent: {lesson?.creditsSpent}
                            </Card.Text>
                            <Card.Text>Duration: {lesson?.duration}</Card.Text>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(course._id, lesson._id)}
                            >
                              Delete
                            </button>
                          </Card.Body>
                        ))}
                        {AddLessons && <AddLessons courseId={course._id} />}
                      </Card>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
});

export default LessonList;
