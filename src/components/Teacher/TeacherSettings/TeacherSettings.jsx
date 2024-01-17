import { Container, Row, Col } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import s from "./TeacherSettings.module.scss";
// import { useUserUpdateMutation } from "../../../api/usersApi";

function TeacherSettings() {
  // const { data } = useUserUpdateMutation();

  // if (!data) {
  //   return "no data...";
  // }

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
          <Col md={8}>
            <div className={s.basicInformation}>
              <h2>Basic Information</h2>

              <div className={s.changePhoto}>
                <Col md={6}>
                  <div className={s.photo}>
                    <img src="https://via.placeholder.com/150" alt="" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className={s.changePhotoBtn}>
                    <ul className={s.blokUi}>
                      <li> - At least 500 x 500 pixels</li>
                      <li> - JPG, GIF, PNG</li>
                      <li> - Max 2MB</li>
                    </ul>
                    <button>Change Photo</button>
                  </div>
                </Col>
              </div>

              <div className={s.name}>
                <h5> Name</h5>
                <input type="text" placeholder="Name" />
              </div>

              <div className={s.surname}>
                <h5> Surname</h5>
                <input type="text" placeholder="Surname" />
              </div>

              <div className={s.email}>
                <h5> Email</h5>
                <input type="text" placeholder="Email" />
              </div>

              <div className={s.country}>
                <h5>Country</h5>
                <input type="text" placeholder="Country" />
              </div>

              <div className={s.city}>
                <h5>Living in City</h5>
                <input type="text" placeholder="City" />
              </div>

              <div className={s.about}>
                <h5>About</h5>
                <input type="text" placeholder="About" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TeacherSettings;
