import { useAllCoursesQuery } from "./../../api/coursesApi";
import { useState } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "./../Button/Button";
import s from "./Courses.module.scss";
import { loadStripe } from "@stripe/stripe-js";

function Courses() {
  const { data, isLoading} = useAllCoursesQuery();
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const navigate = useNavigate();

  const handleCardClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  const handleBookClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const makePayment = async () => {
    console.log("makePayment", selectedCourse);
    const stripe = await loadStripe("pk_test_mAu0YX27q4uYAhqiP6LXOFhj");

    const body = {
      userId: localStorage.getItem("userId"),
      courseId: selectedCourse._id,
    };
    const token = localStorage.getItem("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const apiUrl = "http://localhost:8089/api/students/schedule-course";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <div className={s.cards}>
            <CardGroup>
              {isLoading || !data
                ? Array.from({ length: 8 }).map((_, index) => (
                    <Col md={3} sm={6} key={index}>
                      <Card style={{ margin: "10px" }}>
                        <Card.Title style={{ padding: " 10px" }}>
                          Loading...
                        </Card.Title>
                        <Card.Img
                          variant="top"
                          src={"https://picsum.photos/200/200"}
                        />
                      </Card>
                    </Col>
                  ))
                : data?.courses.map((lesson, index) => (
                    <Col md={3} sm={6} key={index}>
                      <Card
                        style={{ margin: "10px" }}
                        onClick={() => handleCardClick(lesson._id)}
                      >
                        <Card.Title style={{ padding: " 10px" }}>
                          {lesson.createdAt.slice(11, 16)} -
                          {lesson.updatedAt.slice(11, 16)}
                        </Card.Title>
                        <div className={s.cardImage}>
                          <Card.Img
                            variant="top"
                            src={lesson.img || "https://picsum.photos/200/200"}
                          />
                          <p className={s.lessonType}>{lesson.price} - Azn</p>
                          <p className={s.lessonName}>{lesson.description}</p>
                        </div>
                        <Card.Body className={s.cardBody}>
                          <Card.Text className={s.cardDesc}>
                            {lesson?.title}
                            <Button
                              appearance="white"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleBookClick(lesson);
                              }}
                            >
                              Book
                            </Button>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
            </CardGroup>
          </div>

          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Подтверждение покупки</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedCourse && (
                <>
                  <p>Вы хотите купить курс `{selectedCourse.title}`?</p>

                  <Button appearance="pink" onClick={makePayment}>
                    Agree
                  </Button>
                </>
              )}
            </Modal.Body>
          </Modal>
        </Row>
      </Container>
    </section>
  );
}

export default Courses;
