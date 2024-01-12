import { Col, Container, Row } from "react-bootstrap";
import photo from "./../../../assets/img/face-man.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import s from "./TeacherHome.module.scss";

function TeacherHome() {
  return (
    <section>
      <Container>
        <Row>
          <Col md={8}>
            <div className={s.info}>
              <Col md={2}>
                <div className={s.teacherPhoto}>
                  <img src={photo} alt="teacher photo" />
                </div>
                <div className={s.visitedInfo}>
                  <p>Visited 3 minutes ago</p>
                </div>
              </Col>
              <Col md={8}>
                <div className={s.teacherInfo}>
                  <h1>John Doe</h1>
                  <p>English Teacher</p>
                  <p>Joined 3 months ago</p>
                  <p>From United States</p>
                  <p>Speaks English</p>
                </div>
              </Col>
              <Col md={2}>
                <div className={s.teacherRating}>
                  <FontAwesomeIcon icon={faEllipsis} />
                  <p>Raiting x x x x x</p>
                  <p>2872 Lessons</p>
                  <p>363 Students</p>
                </div>
              </Col>
            </div>

            <div className={s.about}>
              <div className={s.aboutHeader}>
                <h2>About</h2>
                <p>Barattson teacher since Oct 8, 2023</p>
              </div>
              <div className={s.desc}>
                <p>
                  Hello ! <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  <br /> Eius nemo delectus dolor. Adipisci tempora, qui fugit
                  quod expedita quisquam cupiditate magni beatae fuga, eos quo
                  officia incidunt dicta ea repellat!
                  <br />
                  <br /> Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Eius nemo delectus dolor. Adipisci tempora, qui fugit
                  quod expedita quisquam cupiditate magni beatae fuga, eos quo
                  officia incidunt dicta ea repellat!
                </p>
              </div>
            </div>

            <div className={s.lessons}>
              <h2> Lessons</h2>

              <div className={s.lessonsList}>
                <Col md={10}>
                  <p className={s.lessonTitle}>
                    General: English Reading, Writing, Speaking and Listening
                    (20 - Lesson Course)
                    <br />
                    ...
                    <br />
                  </p>
                  <p>General 541 lessons</p>
                </Col>
                <Col md={2}>
                  <div className={s.cad}>
                    <p className={s.red}>100%</p>
                    <p className={s.pink}>USD 24.92 +</p>
                  </div>
                </Col>
              </div>

              <div className={s.lessonsList}>
                <Col md={10}>
                  <p className={s.lessonTitle}>
                    General: English Reading, Writing, Speaking and Listening
                    (20 - Lesson Course)
                    <br />
                    ...
                    <br />
                  </p>
                  <p>General 541 lessons</p>
                </Col>
                <Col md={2}>
                  <div className={s.cad}>
                    <p className={s.red}>100%</p>
                    <p className={s.pink}>AZN 24.92 +</p>
                  </div>
                </Col>
              </div>

              <div className={s.lessonsList}>
                <Col md={10}>
                  <p className={s.lessonTitle}>
                    General: English Reading, Writing, Speaking and Listening
                    (20 - Lesson Course)
                    <br />
                    ...
                    <br />
                  </p>
                  <p>General 541 lessons</p>
                </Col>
                <Col md={2}>
                  <div className={s.cad}>
                    <p className={s.red}>100%</p>
                    <p className={s.pink}>AED 24.92 +</p>
                  </div>
                </Col>
              </div>

              <div className={s.lessonsList}>
                <Col md={10}>
                  <p className={s.lessonTitle}>
                    General: English Reading, Writing, Speaking and Listening
                    (20 - Lesson Course)
                    <br />
                    ...
                    <br />
                  </p>
                  <p>General 541 lessons</p>
                </Col>
                <Col md={2}>
                  <div className={s.cad}>
                    <p className={s.red}>100%</p>
                    <p className={s.pink}>CAD 24.92 +</p>
                  </div>
                </Col>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className={s.lessonUSD}>
              <div className={s.lessonUSDHeader}>
                <h2>Lessons</h2>
                <p>USD 12.45</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TeacherHome;
