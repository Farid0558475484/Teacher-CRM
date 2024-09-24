import { useState } from "react";
import { useCurrentUserQuery } from "../../../api/usersApi";
import { memo } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import logo from "./../../../assets/img/morooq.jpeg";
import Sidebar from "../Sidebar/Sidebar";
import { Offcanvas } from "react-bootstrap";
import s from "./Header.module.scss";

const Header = memo(() => {
  const { data, isLoading } = useCurrentUserQuery();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const userId = localStorage.getItem("userId");

  return (
    <header className={s.header}>
      <section className={s.teacherHeader}>
        <Container>
          <Row className={s.row}>
            {/* <Col md={4}>
              <div className={s.logo}>
                <NavLink to={`/teacher/${userId}}`}>
                  <img src={logo} alt="logo" />
                </NavLink>
              </div>
            </Col> */}
            <Col md={12}>
              <div>
                <nav>
                  <ul className={s.ul}>
                    <li>
                      <NavLink to={`/`} className={s.item}>
                        Home
                      </NavLink>
                    </li>
                    {/* <li>
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
                    </li> */}
                    <li>
                      <div
                        className={s.profileSettings}
                        onClick={toggleSidebar}
                      >
                        {isLoading ? (
                          <Skeleton height={50} width={50} circle={50} />
                        ) : (
                          <img
                            src="https://w7.pngwing.com/pngs/451/380/png-transparent-hamburger-button-computer-icons-menu-menu-rectangle-desktop-wallpaper-button-thumbnail.png"
                            alt="burger-menu"
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
});

export default Header;
