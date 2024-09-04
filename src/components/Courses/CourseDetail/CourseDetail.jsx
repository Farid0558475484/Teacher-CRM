import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCourseDetailsQuery } from "../../../api/coursesApi";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import s from "./CourseDetail.module.scss";

function CourseDetail() {
  const { courseId } = useParams();
  const { data: courseDetails } = useCourseDetailsQuery(courseId);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleCheckboxChange = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const handleBuyClick = () => {
    if (selectedCourses.length > 0) {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  const handleConfirmPurchase = () => {
    console.log("Confirmed purchase for courses: ", selectedCourses);
    // Здесь можно добавить логику для покупки
    setShowModal(false);
  };

  return (
    <Container fluid className={s.courseDetail}>
      <Row>
        <Col md={4}>
          <div className={s.sidebar}>
            <div className={s.imgBox}>
              <img
                src={courseDetails?.course.img}
                alt="course_image"
                loading="lazy"
              />
            </div>
            <div className={s.shortInfo}>
              <div className={s.divider}></div>
              <div className={s.level}>
                <p> duration: {courseDetails?.course.duration}</p>
              </div>
              <div className={s.divider}></div>
              <div className={s.studentCount}>
                <p>category: {courseDetails?.course.category}</p>
              </div>
              <div className={s.divider}></div>
              <div className={s.lang}>
                <p>price: {courseDetails?.course.price}</p>
              </div>
            </div>
            <div className={s.courseContent}>
              <h4 className={s.title}>Dərslər</h4>
              <ul className={s.lessonList}>
                {courseDetails?.course.lesson?.map((item, index) => (
                  <li key={index} className={s.lessonItem}>
                    <h5 className={s.lessonTitle}>{item.title}</h5>
                    <p className={s.lessonStatus}>Status: {item.status}</p>
                    <label className={s.checkboxContainer}>
                      <input
                        type="checkbox"
                        className={s.checkbox}
                        onChange={() => handleCheckboxChange(item)}
                      />
                      <span className={s.checkmark}></span>
                    </label>
                  </li>
                ))}
              </ul>
              <button className={s.buyBtn} onClick={handleBuyClick}>
                Buy
              </button>
            </div>
          </div>
        </Col>
        <Col md={8}>
          <div className={s.courseHero}>
            <div className={s.bg}>
              <div className={s.courseTitle}>
                <h3>{courseDetails?.course?.title || "No course Title"}</h3>
              </div>
              <div className={s.imgWrapper}>
                <img src={courseDetails?.course.img} />
              </div>
            </div>
            <div className={s.heroContent}>
              <div className={s.instructor}>
                <h3>Təlimçi</h3>
                <h1>{courseDetails?.course.description} </h1>
              </div>
            </div>
          </div>
          <div className={s.aboutCourse}>
            <h3>Kurs Haqqında</h3>
            <p>{courseDetails?.course?.description}</p>
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Подтверждение покупки</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Вы выбрали следующие курсы:</h5>
          <ul>
            {selectedCourses.map((course, index) => (
              <li key={index}>
                {course.title} - {course?.price} AZN
              </li>
            ))}
          </ul>
          <button className={s.buyBtn} onClick={handleConfirmPurchase}>
            Подтвердить покупку
          </button>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default CourseDetail;
