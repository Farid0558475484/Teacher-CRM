import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./../../../assets/img/logo.webp";
import LogoutButton from "./../../LogOut/LogOut";
import s from "./Header.module.scss";

function Header() {
  const userId = sessionStorage.getItem("userId");
  return (
    <header className={s.header}>
      <section className={s.teacherHeader}>
        <Container>
          <Row className={s.row}>
            <Col md={4}>
              <div className={s.logo}>
                <NavLink to={`/student/${userId}}`}>
                  <img src={logo} alt="logo" />
                </NavLink>
              </div>
            </Col>
            <Col md={8}>
              <div className={s.logoutBtn}>
                <LogoutButton />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </header>
  );
}

export default Header;
