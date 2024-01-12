import { Container, Row, Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import s from "./TeacherSettings.module.scss";

function TeacherSettings() {
  return (
    <section>
      <Container>
        <Row>
          <Col md={4}>
            <div className={s.accordions}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Teacher information</Accordion.Header>
                  <Accordion.Body>
                    <ul className={s.accordionUl}>
                      <li> - Basic information</li>
                      <li> - Private information</li>
                      <li> - Communication Tools</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Teacher Profile</Accordion.Header>
                  <Accordion.Body>
                    <ul className={s.accordionUl}>
                      <li> - Introduction</li>
                      <li> - Contact Form</li>
                      <li> - Video</li>
                      <li> - Languages</li>
                      <li> - Resume and Certificates</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Lessons And Availability</Accordion.Header>
                  <Accordion.Body>
                    <ul className={s.accordionUl}>
                      <li> - Lesson Management</li>
                      <li> - Availability </li>
                      <li> - Teacher Calendar</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className={s.withdraw}>
              <h5>Withdraw</h5>
              <button className={s.viewProfile}>VIEW PROFILE</button>
            </div>
          </Col>
          <Col md={8}></Col>
        </Row>
      </Container>
    </section>
  );
}

export default TeacherSettings;
