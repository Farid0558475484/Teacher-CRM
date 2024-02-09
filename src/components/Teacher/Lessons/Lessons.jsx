import { Container, Row, Col } from "react-bootstrap";
import { useInstructorAllCoursesQuery } from "./../../../api/coursesApi";
import s from "./Lesson.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Lessons() {
  const { data, isLoading } = useInstructorAllCoursesQuery();

  return (
    <section>
      <Container>
        <Row>
          <div className={s.lessons}>
            <h2>
              {isLoading ? (
                <Skeleton width={200} height={30} />
              ) : (
                <>{`Lessons`}</>
              )}
            </h2>
            <div className={s.lessonsList}>
              {isLoading ? (
                <>
                  <Col md={10}>
                    <p className={s.lessonTitle}>
                      <Skeleton count={4} width={200} />
                    </p>
                  </Col>
                  <Col md={2}>
                    <div className={s.cad}>
                      <p className={s.time}>
                        <Skeleton width={130} />
                      </p>
                      <p className={s.price}>
                        <Skeleton width={130} />
                      </p>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={10}>
                    <p className={s.lessonTitle}>
                      Category: {data.courses.category}
                    </p>
                    <p className={s.lessonTitle}>
                      Lesson Name: {data.courses.title}
                    </p>
                    <p>Lesson Desc: {data.courses.description}</p>
                    <p>Start Time: {data.courses.startTime.substring(0, 10)}</p>
                  </Col>
                  <Col md={2}>
                    <div className={s.cad}>
                      <p className={s.time}>
                        Time: {data.courses.startTime.substring(11, 16)}
                      </p>
                      <p className={s.price}>USD {data.courses.price}</p>
                    </div>
                  </Col>
                </>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Lessons;
