// import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
// import CardGroup from "react-bootstrap/CardGroup";
// import Card from "react-bootstrap/Card";
// import Dropdown from "react-bootstrap/Dropdown";
// import lessonsData from "../../../json";
import Courses from "./../../components/Courses/Courses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import s from "./Home.module.scss";

// const daysOfWeek = [
//   "all",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

function Home() {
  // const [activeButton, setActiveButton] = useState("all");
  // const [activeDay, setActiveDay] = useState("all");
  // const [selectedTime, setSelectedTime] = useState("all");
  // //  const [filteredLessons, setFilteredLessons] = useState(lessonsData);

  // const handleButtonClick = (buttonType) => {
  //   setActiveButton(buttonType);
  //   filterData(buttonType, activeDay, selectedTime);
  // };

  // const resetButton = () => {
  //   setActiveButton("all");
  //   setActiveDay("all");
  //   setSelectedTime("all");
  //   setFilteredLessons(lessonsData);
  // };

  // const handleWeekDay = (day) => {
  //   setActiveDay(day);
  //   filterData(activeButton, day, selectedTime);
  // };

  // const handleTimeSelect = (time) => {
  //   setSelectedTime(time);
  //   filterData(activeButton, activeDay, time);
  // };

  // const filterData = (buttonType, day, time) => {
  //   if (buttonType === "all" && day === "all" && time === "all") {
  //     setFilteredLessons(lessonsData);
  //   } else {
  //     const filtered = lessonsData.filter(
  //       (lesson) =>
  //         (buttonType === "all" ||
  //           lesson.type.toLowerCase() === buttonType.toLowerCase()) &&
  //         (day === "all" ||
  //           lesson.weekDay.toLowerCase() === day.toLowerCase()) &&
  //         (time === "all" ||
  //           lesson.time.toLowerCase().includes(time.toLowerCase()))
  //     );
  //     setFilteredLessons(filtered);
  //   }
  // };
  const role = localStorage.getItem("role");
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  return (
    <main>
      <section>
        <Container fluid>
          <Row>
            <div className={s.header}>
              <div className={s.title}>
                <h1>Online - Barattson</h1>
              </div>

              <div className={s.login}>
                {token ? (
                  <>
                    {role === "student" ? (
                      <>
                        <li className={s.studentProfile}>
                          <NavLink to={`/student/${userId}`}>
                            <FontAwesomeIcon icon={faGraduationCap} />
                          </NavLink>
                        </li>
                      </>
                    ) : role === "tutor" ? (
                      <>
                        <li className={s.studentProfile}>
                          <NavLink to={`/teacher/${userId}`}>
                            <FontAwesomeIcon icon={faPersonChalkboard} />
                          </NavLink>
                        </li>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ) : (
                  <>
                    <li className={s.basket}>
                      <FontAwesomeIcon icon={faBasketShopping} />
                      <div className={s.basketCount}>
                        <p>0</p>
                      </div>
                    </li>
                    <li className={s.singInButton}>
                      <NavLink to="/login" className={s.loginButton}>
                        Sign In
                      </NavLink>
                    </li>
                    <li className={s.singUpButton}>
                      <NavLink to="/register" className={s.loginButton}>
                        Sign Up
                      </NavLink>
                    </li>
                  </>
                )}
              </div>
            </div>

            {/* <div className={s.filter}>
              <div className={s.left}>
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
                  <Dropdown className={s.dropdown}>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                      {selectedTime === "all" ? "All Time" : selectedTime}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {[
                        "All Time",
                        "09:00 - 11:00",
                        "11:00 - 13:00",
                        "13:00 - 15:00",
                        "15:00 - 17:00",
                        "17:00 - 19:00",
                        "19:00 - 21:00",
                        "21:00 - 23:00",
                      ].map((time) => (
                        <Dropdown.Item
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                        >
                          {time}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div className={s.resetButton}>
                  <button onClick={resetButton}>Reset</button>
                </div>
              </div>

              <div className={s.right}>
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
            </div> */}
            <Courses />
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Home;
