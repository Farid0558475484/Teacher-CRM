import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import s from "./TeacherTable.module.scss";
import lessonsData from "./../../json";

const daysOfWeek = [
  "all",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function TeacherTable() {
  const [activeButton, setActiveButton] = useState("all");
  const [activeDay, setActiveDay] = useState("all");
  const [filteredLessons, setFilteredLessons] = useState(lessonsData);

  const handleButtonClick = (buttonType) => {
    console.log("Button clicked:", buttonType);
    setActiveButton(buttonType);
    filterData(buttonType, activeDay);
  };

  const resetButton = () => {
    setActiveButton("all");
    setActiveDay("all");
    setFilteredLessons(lessonsData);
  };

  const handleWeekDay = (day) => {
    console.log("Day clicked:", day);
    setActiveDay(day);
    filterData(activeButton, day);
  };

  const filterData = (buttonType, day) => {
    if (buttonType === "all" && day === "all") {
      setFilteredLessons(lessonsData);
    } else {
      const filtered = lessonsData.filter(
        (lesson) =>
          (buttonType === "all" ||
            lesson.type.toLowerCase() === buttonType.toLowerCase()) &&
          (day === "all" || lesson.weekDay.toLowerCase() === day.toLowerCase())
      );
      console.log("Filtered lessons:", filtered);
      setFilteredLessons(filtered);
    }
  };

  return (
    <main>
      <section>
        <Container fluid>
          <Row>
            <div className={s.header}>
              <div className={s.title}>
                <h1>
                  <span className={s.brandName}>Barattson:</span> English Lesson
                </h1>
              </div>
              <div className={s.buttonLessonType}>
                <button
                  className={
                    activeButton === "group"
                      ? `${s.button} ${s.activeButton}`
                      : s.button
                  }
                  onClick={() => handleButtonClick("group")}
                >
                  Group
                </button>
                <button
                  className={
                    activeButton === "private"
                      ? `${s.button} ${s.activeButton}`
                      : s.button
                  }
                  onClick={() => handleButtonClick("private")}
                >
                  Private
                </button>
              </div>
            </div>

            <div className={s.filter}>
              <div className={s.filterDay}>
                {daysOfWeek.map((day) => (
                  <button
                    className={
                      activeDay === day
                        ? `${s.button} ${s.activeButton}`
                        : s.button
                    }
                    key={day}
                    onClick={() => handleWeekDay(day)}
                  >
                    {day === "all" ? "All Days" : day}
                  </button>
                ))}
              </div>

              <div className={s.filterTime}>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    All Times
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/time-1">09:00 - 11:00</Dropdown.Item>
                    <Dropdown.Item href="#/time-2">11:00 - 13:00</Dropdown.Item>
                    <Dropdown.Item href="#/time-3">13:00 - 15:00</Dropdown.Item>
                    <Dropdown.Item href="#/time-4">15:00 - 17:00</Dropdown.Item>
                    <Dropdown.Item href="#/time-5">17:00 - 19:00</Dropdown.Item>
                    <Dropdown.Item href="#/time-6">19:00 - 21:00</Dropdown.Item>
                    <Dropdown.Item href="#/time-7">21:00 - 23:00</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className={s.resetButton}>
                <button onClick={resetButton}>Reset</button>
              </div>
            </div>

            <div className={s.cards}>
              <CardGroup style={{ margin: "100px 0" }}>
                {filteredLessons.map((lesson) => (
                  <Col md={3} key={lesson.id}>
                    <Card style={{ margin: "10px" }}>
                      <Card.Title style={{ padding: " 10px" }}>
                        {lesson.time}
                      </Card.Title>
                      <div className={s.cardImage}>
                        <Card.Img
                          variant="top"
                          src="https://picsum.photos/200/300"
                          style={{ width: "100%", height: "250px" }}
                        />
                        <p className={s.lessonType}>{lesson.type}</p>
                        <p className={s.lessonName}>{lesson.name}</p>
                      </div>
                      <Card.Body className={s.cardBody}>
                        <Card.Text className={s.cardDesc}>
                          {lesson.description}
                        </Card.Text>
                        <small className={s.teacherName}>
                          {lesson.teacher}
                        </small>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </CardGroup>
            </div>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default TeacherTable;
