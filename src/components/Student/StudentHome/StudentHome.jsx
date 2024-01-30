import { useCurrentUserQuery } from "./../../../api/usersApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Col, Container, Row } from "react-bootstrap";
import s from "./../../Teacher/TeacherHome/TeacherHome.module.scss";

function StudentHome() {
  const { data, isLoading } = useCurrentUserQuery();
  const [attendLessonData, setAttendLessonData] = useState(null);
  console.log("attendLessonData:", attendLessonData);

  const navigate = useNavigate();

  const lessonId = "65943b89c0004e07e9595323";
  const token = sessionStorage.getItem("token");

  const handleAttendLesson = async () => {
    console.log("Attending lesson...");

    try {
      const response = await fetch(
        `http://localhost:8089/api/students/attend-lesson/${lessonId}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to attend lesson");
      }

      const result = await response.json();
      console.log("result:", result.meetingUrl);
      setAttendLessonData(result);
      navigate("/student/meeting");
    } catch (error) {
      console.error("Error attending lesson:", error);
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <div className={s.info}>
            <Col md={4}>
              <div className={s.teacherPhoto}>
                <img
                  src={
                    isLoading ? "...isLoading" : data.userProfile.avatarImageUrl
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
                <p>Student</p>
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

          <div className={s.lessons}>
            <h2> Lessons</h2>
            <p className={s.lessonTitle}>Upcoming lesson</p>
            <div className={s.lessonsList}>
              <Col md={8}>
                <p>16 September</p>
                <p>17:00</p>
                <p>English</p>
              </Col>
              <Col md={4}>
                <div className={s.cad}>
                  <button onClick={handleAttendLesson}>Enter Classroom</button>
                </div>
              </Col>
            </div>
          </div>

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
        </Row>
      </Container>
    </section>
  );
}

export default StudentHome;
