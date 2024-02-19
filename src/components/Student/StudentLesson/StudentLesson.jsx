import { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";
import s from "./StudentLesson.module.scss";

function StudentLesson() {
  const [showModal, setShowModal] = useState(false);
  const [meetingUrl, setMeetingUrl] = useState("");

  const lessonId = "65943b89c0004e07e9595323";
  const token = localStorage.getItem("token");

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
      setMeetingUrl(result.meetingUrl);
      setShowModal(true);
    } catch (error) {
      console.error("Error attending lesson:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleStartLesson = () => {
    window.open(meetingUrl, "_blank");
    setShowModal(false);
  };

  return (
    <section>
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
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Start Lesson</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you ready to start the lesson?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleStartLesson}>
            Start Lesson
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default StudentLesson;
