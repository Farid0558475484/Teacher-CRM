import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import UserInfo from "../../UserInfo/UserInfo";
import Resume from "../../Teacher/Resume/Resume";
import s from "./Home.module.scss";

function Home() {
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
          <UserInfo />
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

          <Resume />
        </Row>
      </Container>
    </section>
  );
}

export default Home;
