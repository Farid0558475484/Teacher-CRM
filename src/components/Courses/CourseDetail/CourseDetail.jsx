import { useState, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useCourseDetailsQuery } from "../../../api/coursesApi";
import { Container, Row, Col, Modal } from "react-bootstrap";
import s from "./CourseDetail.module.scss";

function CourseDetail() {
  const { courseId } = useParams();
  const { data: courseDetails } = useCourseDetailsQuery(courseId);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const { course } = courseDetails || {};
  const {
    lesson = [],
    img,
    duration,
    category,
    price,
    title,
    description,
    tutor,
  } = course || {};

  const handleBuyClick = useCallback(
    async (id) => {
      try {
        const response = await fetch(
          "http://localhost:8089/api/students/schedule-lesson",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              lessonId: id,
            }),
          }
        );

        if (response.ok) {
          setShowModal(true);
          const selectedCourse = lesson.find((item) => item._id === id);
          if (selectedCourse) {
            setSelectedCourses([selectedCourse]);
          }
        } else {
          console.error("Failed to add course to cart");
        }
      } catch (error) {
        console.error("Error while adding course to cart: ", error);
      }
    },
    [lesson]
  );

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleConfirmPurchase = useCallback(() => {
    setShowModal(false);
  }, [selectedCourses]);

  const renderedLessons = useMemo(() => {
    if (!lesson.length) {
      return <p>No lessons available</p>;
    }
    return lesson.map((item, index) => (
      <li key={index} className={s.lessonItem}>
        <h5 className={s.lessonTitle}>{item.title}</h5>
        <p className={s.lessonStatus}>Status: {item.status}</p>
        <button className={s.buyBtn} onClick={() => handleBuyClick(item._id)}>
          Buy
        </button>
      </li>
    ));
  }, [lesson, handleBuyClick]);

  return (
    <Container fluid className={s.courseDetail}>
      <Row>
        <Col md={4}>
          <div className={s.sidebar}>
            <div className={s.imgBox}>
              <img src={img} alt="Course image" loading="lazy" />
            </div>
            <div className={s.shortInfo}>
              <div className={s.divider}></div>
              <div className={s.level}>
                <p>Duration: {duration || "N/A"}</p>
              </div>
              <div className={s.divider}></div>
              <div className={s.studentCount}>
                <p>Category: {category || "N/A"}</p>
              </div>
              <div className={s.divider}></div>
              <div className={s.lang}>
                <p>Price: {price || "N/A"} AZN</p>
              </div>
            </div>
            <div className={s.courseContent}>
              <h4 className={s.title}>Lessons</h4>
              <ul className={s.lessonList}>{renderedLessons}</ul>
            </div>
          </div>
        </Col>
        <Col md={8}>
          <div className={s.courseHero}>
            <div className={s.bg}>
              <div className={s.courseTitle}>
                <h3>{title || "No course Title"}</h3>
              </div>
              <div className={s.imgWrapper}>
                <img src={img} alt="Course image" />
              </div>
            </div>
            <div className={s.heroContent}>
              <div className={s.instructor}>
                <h3>Instructor</h3>
                {/* <h1>{description || "No description"}</h1> */}
                <h1>
                  {/* {tutor?.userId?.name + " " + tutor?.userId?.familyName} */}
                  {tutor?.userId?.name + " " + tutor?.userId?.familyName}
                </h1>
              </div>
            </div>
          </div>
          <div className={s.aboutCourse}>
            <h3>About the Course</h3>
            <p>{description || "No description"}</p>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Purchase</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>You have selected the following course:</h5>
          <ul>
            {selectedCourses.map((course, index) => (
              <li key={index}>
                {course.title} - {course?.creditsSpent || 0} AZN
              </li>
            ))}
          </ul>
          <button className={s.buyBtn} onClick={handleConfirmPurchase}>
            Confirm Purchase
          </button>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default CourseDetail;
