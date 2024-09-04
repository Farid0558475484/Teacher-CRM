import { useAllCoursesQuery } from "./../../api/coursesApi";
import { useState } from "react";
import { Card, CardGroup, Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "./../Button/Button";
import { loadStripe } from "@stripe/stripe-js";
import "./Courses.scss";

function Courses() {
  const { data, isLoading } = useAllCoursesQuery();
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
    <section className="courses">
      <div className="container">
        <div className="row">
          {data?.courses.map((lesson, index) => (
            <div className="col-md-3 col-6 pt-3" key={index}>
              <div className="card" onClick={() => handleCardClick(lesson._id)}>
                <div className="card-title p-1 text-center">
                  {lesson?.title}
                </div>
                <div className="card-img">
                  <img
                    variant="top"
                    className="img-fluid"
                    src={lesson?.img || "https://picsum.photos/200/200"}
                  />
                </div>
                <div className="card-body">
                  <p className="price">{lesson.price} - Azn</p>
                  <p className="description">{lesson.description}</p>
                  <div className="content">
                    <div className="lessonTime">
                      <div className="card-text text-center">
                        {lesson.createdAt.slice(11, 16)} -
                        {lesson.updatedAt.slice(11, 16)}
                      </div>
                    </div>
                    <div className="buttonBook">
                      <button
                        className="btn "
                        appearance="white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookClick(lesson);
                        }}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
      </div>
    </section>
  );
}

export default Courses;
