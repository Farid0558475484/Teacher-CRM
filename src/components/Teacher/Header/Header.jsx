import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./../../../assets/img/logo.webp";
import face from "./../../../assets/img/face-man.jpeg";
import Sidebar from "./../Sidebar/Sidebar";
import { Offcanvas } from "react-bootstrap";
import s from "./Header.module.scss";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <header className={s.header}>
      <section className={s.teacherHeader}>
        <Container>
          <Row className={s.row}>
            <Col md={4}>
              <div className={s.logo}>
                <img src={logo} alt="logo" />
              </div>
            </Col>
            <Col md={8}>
              <div>
                <nav>
                  <ul className={s.ul}>
                    <li>
                      <NavLink
                        to={`/teacher/teacher-settings`}
                        className={s.item}
                      >
                        Teacher Settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/teacher/schedule`} className={s.item}>
                        My Schedule
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/teacher/messages`} className={s.item}>
                        Messages
                      </NavLink>
                    </li>
                    <li>
                      <div
                        className={s.profileSettings}
                        onClick={toggleSidebar}
                      >
                        <img
                          className={s.profileLogo}
                          src={face}
                          alt="profile-logo"
                        />
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Offcanvas
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Panel</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}

export default Header;
