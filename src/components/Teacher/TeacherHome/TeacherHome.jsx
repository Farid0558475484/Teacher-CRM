import { useCurrentUserQuery } from "./../../../api/usersApi";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useTutorAttendLessonMutation } from "./../../../api/tutorApi";
import Lesson from "./../Lessons/Lessons";
import s from "./TeacherHome.module.scss";

function TeacherHome() {
  const { data, isLoading } = useCurrentUserQuery();

  const id = "65943b89c0004e07e9595323";

  const { data: attendLessonData } = useTutorAttendLessonMutation(id);

  console.log("teacher attendLessonData:", attendLessonData);

  return (
    <section>
      <Container>
        <Row>
          <Col md={12}>
            <div className={s.info}>
              <Col md={2}>
                <div className={s.teacherPhoto}>
                  <img
                    src={
                      isLoading
                        ? "...isLoading"
                        : data.userProfile.avatarImageUrl
                    }
                    alt={isLoading ? "Photo" : data.userProfile.avatarImageUrl}
                  />
                </div>
                <div className={s.visitedInfo}>
                  <p>Visited 3 minutes ago</p>
                </div>
              </Col>
              <Col md={8}>
                <div className={s.teacherInfo}>
                  <p>English Teacher</p>
                  <p>
                    Username:
                    {isLoading ? "...isLoading" : data.userProfile.username}
                  </p>
                  <p>
                    Name: {isLoading ? "...isLoading" : data.userProfile.name}
                  </p>
                  <p>
                    Surname:
                    {isLoading ? "...isLoading" : data.userProfile.familyName}
                  </p>
                  <p>
                    Country:
                    {isLoading ? "...isLoading" : data.userProfile.country}
                  </p>
                  <p>
                    Email: {isLoading ? "...isLoading" : data.userProfile.email}
                  </p>
                  <p>
                    Role: {isLoading ? "...isLoading" : data.userProfile.roles}
                  </p>
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
                <p>{isLoading ? "...isLoading" : data.userProfile.aboutUser}</p>
              </div>
            </div>

            <Lesson />

            <div className={s.resume}>
              <h2>Resume</h2>

              <div className={s.resumeInfo}>
                <Col md={4}>
                  <div className={s.experience}>
                    <h5>Experience</h5>
                    <p>Experience</p>
                    <p>5 years</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={s.education}>
                    <h5>Education</h5>
                    <p>Education</p>
                    <p>5 years</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={s.certificates}>
                    <h5>Certificates</h5>
                    <p>Certificates</p>
                  </div>
                </Col>
              </div>
            </div>
          </Col>
          {/* <Col md={4}>
            <div className={s.lessonUSD}>
              <div className={s.lessonUSDHeader}>
                <h2>Lessons</h2>
                <p>USD 12.45</p>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
}

export default TeacherHome;
