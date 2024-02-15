import { useState } from "react";
import { useCurrentUserQuery } from "../../../api/usersApi";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import logo from "./../../../assets/img/logo.webp";
import Sidebar from "../Sidebar/Sidebar";
import { Offcanvas } from "react-bootstrap";
import s from "./Header.module.scss";

function Header() {
  const { data, isLoading } = useCurrentUserQuery();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const userId = sessionStorage.getItem("userId");

  return (
    <header className={s.header}>
      <section className={s.teacherHeader}>
        <Container>
          <Row className={s.row}>
            <Col md={4}>
              <div className={s.logo}>
                <NavLink to={`/teacher/${userId}}`}>
                  <img src={logo} alt="logo" />
                </NavLink>
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
                        {isLoading ? (
                          <Skeleton height={50} width={50} circle={50} />
                        ) : (
                          <img
                            src={data?.userProfile?.avatarImageUrl}
                            alt="Avatar"
                          />
                        )}
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
