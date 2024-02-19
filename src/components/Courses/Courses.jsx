import { useAllCoursesQuery } from "./../../api/coursesApi";
import { Card, CardGroup, Col } from "react-bootstrap";
import s from "./Courses.module.scss";

function Courses() {
  const { data } = useAllCoursesQuery();
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
                    // style={{ width: "100%", height: "250px" }}
                  />
                  <p className={s.lessonType}>{lesson.price} - Azn</p>
                  <p className={s.lessonName}>{lesson.description}</p>
                </div>
                <Card.Body className={s.cardBody}>
                  <Card.Text className={s.cardDesc}>
                    {lesson.title}
                    <button className={s.addToCard}> Book</button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </CardGroup>
      </div>
    </div>
  );
}

export default Courses;
