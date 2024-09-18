import { useAllCoursesQuery } from "./../../api/coursesApi";
import { useState, useCallback, useMemo } from "react";
import { memo } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "./../Button/Button";
import "./Courses.scss";

const Courses = memo(() => {
  const { data, isLoading } = useAllCoursesQuery();
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("");

  const navigate = useNavigate();

  const handleCardClick = useCallback(
    (courseId) => {
      navigate(`/course/${courseId}`);
    },
    [navigate]
  );

  const handleBookClick = useCallback((course) => {
    setSelectedCourse(course);
    setShowModal(true);
  }, []);

  const makePayment = useCallback(async () => {
    try {
      const body = {
        courseId: selectedCourse._id,
      };
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      const response = await fetch(
        "http://localhost:8089/api/students/schedule-course",
        {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        }
      );

      if (response.ok) {
        setPaymentStatus("Payment successful!");
        setTimeout(() => {
          setShowModal(false);
          setPaymentStatus("");
        }, 2000);
      } else {
        const error = await response.json();
        throw new Error(error.message || "Error booking the course");
      }
    } catch (error) {
      setPaymentStatus(`Payment failed: ${error.message}`);
    }
  }, [selectedCourse]);

  const renderCourses = useMemo(() => {
    if (isLoading) return <p>Loading courses...</p>;

    return data?.courses.map((lesson, index) => {
      const { _id, title, img, price, description, createdAt, updatedAt } =
        lesson;

      return (
        <div className="col-md-3 col-6 pt-3" key={_id || index}>
          <div className="card" onClick={() => handleCardClick(_id)}>
            <div className="card-title p-1 text-center">{title}</div>
            <div className="card-img">
              <img
                alt={title}
                className="img-fluid"
                src={img || "https://picsum.photos/200/200"}
              />
            </div>
            <div className="card-body">
              <p className="price">{price} - Azn</p>
              <p className="description">{description}</p>
              <div className="content">
                <div className="lessonTime">
                  <div className="card-text text-center">
                    {createdAt.slice(11, 16)} - {updatedAt.slice(11, 16)}
                  </div>
                </div>
                <div className="buttonBook">
                  <button
                    className="btn"
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
      );
    });
  }, [data, isLoading, handleCardClick, handleBookClick]);

  return (
    <section className="courses">
      <div className="container">
        <div className="row">{renderCourses}</div>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Purchase</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedCourse && (
              <>
                <p>
                  Are you sure you want to purchase the course "
                  {selectedCourse.title}"?
                </p>
                <Button appearance="pink" onClick={makePayment}>
                  Confirm
                </Button>
                {paymentStatus && (
                  <p
                    className={
                      paymentStatus.includes("failed")
                        ? "text-danger"
                        : "text-success"
                    }
                  >
                    {paymentStatus}
                  </p>
                )}
              </>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
});

export default Courses;
