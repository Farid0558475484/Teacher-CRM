import { Col } from "react-bootstrap";
import s from "./Resume.module.scss";

function Resume() {
  return (
    <section className={s.resumeSection}>
      <div className="container">
        <div className="row">
          <div className={s.resume}>
            <h2 className={s.title}>Resume</h2>

            <div className={s.resumeInfo}>
              <Col md={4}>
                <div className={s.experience}>
                  <h5>Experience</h5>
                  <p>Experience</p>
                  <p>5 years</p>
                </div>
              </Col>
              <Col md={4}>
                <div className={s.education}>
                  <h5>Education</h5>
                  <p>Education</p>
                  <p>5 years</p>
                </div>
              </Col>
              <Col md={4}>
                <div className={s.certificates}>
                  <h5>Certificates</h5>
                  <p>Certificates</p>
                </div>
              </Col>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
