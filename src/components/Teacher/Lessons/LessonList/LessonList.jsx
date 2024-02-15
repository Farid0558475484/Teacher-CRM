import { Container, Row, Col, Card } from "react-bootstrap";
import { useInstructorAllCoursesQuery } from "./../../../../api/coursesApi";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import s from "./LessonList.module.scss";

function LessonList() {
  const { data, isLoading } = useInstructorAllCoursesQuery();

  console.log("@LessonList render");

  const renderCourses = () => {
    if (isLoading) {
      return (
        <>
          <div className={s.cardBody}>
            <Col md={10}>
              <p className={s.courseTitle}>
                <Skeleton count={3} width={200} />
              </p>
            </Col>
            <Col md={2}>
              <div className={s.rightContent}>
                <p className={s.times}>
                  <Skeleton width={200} />
                </p>
                <p className={s.prices}>
                  <Skeleton width={200} />
                </p>
              </div>
            </Col>
          </div>
        </>
      );
    } else if (data && data.courses) {
      return data.courses.map((course,index) => (
        <Col key={index} md={12} className="mb-3">
          <Card className={s.card}>
            <Card.Body className={s.cardBody}>
              <div className={s.leftContent}>
                <div>
                  <Card.Title>Category: {course.category}</Card.Title>
                  <Card.Text>Course Name: {course.title}</Card.Text>
                  <Card.Text>Course Desc: {course.description}</Card.Text>
                </div>
              </div>
              <div className={s.rightContent}>
                <Card.Text className={s.time}>
                  Time: {course.startTime}
                </Card.Text>
                <Card.Text className={s.price}>USD {course.price}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ));
    }
    return null;
  };

  return (
    <section className={s.lessonSection}>
      <Container>
        <Row>
          <div className={s.lessons}>
            <h2 className={s.title}>
              {isLoading ? (
                <Skeleton width={200} height={30} />
              ) : (
                <>{`Courses`}</>
              )}
            </h2>
            <div className={s.lessonsList}>{renderCourses()}</div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default LessonList;
