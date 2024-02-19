import { useAllCoursesQuery } from "./../../api/coursesApi";
import { useState } from "react";
import { Card, CardGroup, Col } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import s from "./Courses.module.scss";

function Courses() {
  const { data } = useAllCoursesQuery();
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleBookClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  return (
    <div>
      <div className={s.cards}>
        <CardGroup>
          {data?.courses.map((lesson, index) => (
            <Col md={3} key={index}>
              <Card style={{ margin: "10px" }}>
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
                    {lesson.title}
                    <button
                      className={s.addToCard}
                      onClick={() => handleBookClick(lesson)}
                    >
                      Book
                    </button>
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
              <Button variant="primary" onClick={() => console.log("Купить")}>
                Buy
              </Button>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Courses;
