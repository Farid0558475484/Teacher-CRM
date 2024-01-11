import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./../../../../public/img/logo.webp";
import face from "./../../../../public/img/face-man.jpeg";
import s from "./Header.module.scss";
function Header() {
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
                      <p>Teacher Settings</p>
                    </li>
                    <li>
                      <p>My Schedule</p>
                    </li>
                    <li>
                      <p>Messages</p>
                    </li>
                    <li>
                      <div>
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
    </header>
  );
}

export default Header;
