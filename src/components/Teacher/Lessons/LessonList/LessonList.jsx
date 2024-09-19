import { memo } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useInstructorAllCoursesQuery } from "./../../../../api/coursesApi";
import s from "./LessonList.module.scss";

const LessonList = memo(({ AddLessons, AddCourses, DeleteLesson,StartLesson }) => {
  const { data, isLoading, refetch } = useInstructorAllCoursesQuery();

  return (
    <section className={s.lessonSection}>
      <div className="container">
        <div className="row">
          <div className={s.lessons}>
            <h2 className={s.title}>
              <div className={s.lessonHeader}>
                <div>{`Courses`}</div>
                {AddCourses && <AddCourses />}
              </div>
            </h2>
            <div className={s.lessonsList}>
              {data?.courses?.map((course, index) => (
                <Col key={index} md={12} className="mb-3">
                  <Card className={s.card}>
                    <Card.Body className={s.cardBody}>
                      <div className={s.leftContent}>
                        <Card.Title>Category: {course?.category}</Card.Title>
                        <Card.Text>Course Name: {course?.title}</Card.Text>
                        <Card.Text>
                          Course Desc: {course?.description}
                        </Card.Text>
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
                            {DeleteLesson && (
                              <DeleteLesson
                                courseId={course._id}
                                lessonId={lesson._id}
                                refetch={refetch}
                              />
                            )}
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
        </div>
      </div>
    </section>
  );
});

export default LessonList;
