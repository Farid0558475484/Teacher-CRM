import { NavLink } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import Button from "./../Button/Button";
import s from "./Headers.module.scss";

function Headers() {
  const role = localStorage.getItem("role");
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  return (
    <header>
      <section>
        <Container>
          <Row>
            <div className={s.header}>
              <div className={s.title}>
                <h1>Morooq - Course</h1>
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
                      <Button appearance="pink" href="/login">
                        Sign In
                      </Button>
                    </li>
                    <li className={s.singUpButton}>
                      <Button appearance="pink" href="/register">
                        Sign Up
                      </Button>
                    </li>
                  </>
                )}
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </header>
  );
}

export default Headers;
