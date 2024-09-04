import { useParams } from "react-router-dom";
import { useCourseDetailsQuery } from "../../../api/coursesApi";
import { Container, Row, Col, Button } from "react-bootstrap";
import s from "./CourseDetail.module.scss";

function CourseDetail() {
  const { courseId } = useParams();
  const { data: courseDetails } = useCourseDetailsQuery(courseId);
  console.log(courseDetails);

  const data = {
    id: "65ca0e16811200ec7d12430d",
    title: "CFA lv 1 - Economics (Eng)",
    hours: "5.37",
    difficulty: "Intermediate",
    enrolled: 6,
    language: "English",
    img: "https://picsum.photos/200/200",
    description:
      "Economics can be one of the most difficult topics in the CFA Level 1 Exam. There is a lot of theory involved...",
    instructor: {
      name: "Bahruz Huseynzade, CFA",
      title: "Instructor",
      photo: "https://picsum.photos/200/200",
    },
    learn: [
      "Economics",
      "Substitution effect",
      "Trade barriers",
      "Impact of inflation",
      "Monetary and Fiscal policies",
      "and etc.",
    ],
    thumbnailUrl: "https://picsum.photos/200/200",
    timescale: 19200,
    viewCount: 5,
    lang: "English",
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
                <p> duration:{courseDetails?.course.duration}</p>
              </div>
              <div className={s.divider}></div>
              <div className={s.studentCount}>
                <p>category:{courseDetails?.course.category}</p>
              </div>
              <div className={s.divider}></div>
              <div className={s.lang}>
                <p>price :{courseDetails?.course.price}</p>
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
                      <input type="checkbox" className={s.checkbox} />
                      <span className={s.checkmark}></span>
                    </label>
                  </li>
                ))}
              </ul>
              <button className={s.buyBtn}>Buy</button>
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
              <div className={s.rateCourse}>
                <div className={s.stars}>
                  {/* <Rating
                    name="simple-controlled"
                    value={courseInfo.rating}
                    onChange={(event, newValue) => {
                      setValue(value);
                    }}
                  /> */}
                </div>
                <span>KURSU QİYMƏTLƏNDİRİN</span>
              </div>

              <div className={s.actionBtns}>
                <Button variant="contained" className={s.greyBtn}>
                  Başlayın
                </Button>

                <Button variant="contained" className={s.blueBtn}>
                  Önizləmə
                </Button>
              </div>
            </div>
          </div>
          <div className={s.aboutCourse}>
            <h3>Kurs Haqqında</h3>
            <p>{data.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CourseDetail;
