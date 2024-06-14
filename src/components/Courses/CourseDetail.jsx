import { Container, Row, Col, Button } from "react-bootstrap";
import s from "./CourseDetail.module.scss";

function CourseDetail() {
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
              <img src={data.thumbnailUrl} alt="course_image" loading="lazy" />
            </div>
            <div className={s.shortInfo}>
              <div className={s.duration}>
                <p>{(data.timescale / 3600).toFixed(2)}</p>
                <p>SAAT</p>
              </div>
              <div className={s.divider}></div>
              <div className={s.level}>
                <p>Beginner</p>
                <p>Seviyye</p>
              </div>
              <div className={s.divider}></div>
              <div className={s.studentCount}>
                <p>{data.viewCount}</p>
                <p>Telebe</p>
              </div>
              <div className={s.divider}></div>
              <div className={s.lang}>
                <p>{data.lang}</p>
                <p>Dil</p>
              </div>
            </div>
            <div className="content">
              <h4>Dersler</h4>
              <ul>
                {data.learn.map((item, index) => (
                  <li key={index}>
                    <h3>
                      {index + 1}.{item}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Col>
        <Col md={8}>
          <div className={s.courseHero}>
            <div className={s.bg}>
              <div className={s.courseTitle}>
                <h3>{data.title}</h3>
              </div>
              <div className={s.imgWrapper}>
                <img src={data.img} />
              </div>
            </div>
            <div className={s.heroContent}>
              <div className={s.instructor}>
                <h1>{data.instructor.name} </h1>
                <h3>Təlimçi</h3>
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
