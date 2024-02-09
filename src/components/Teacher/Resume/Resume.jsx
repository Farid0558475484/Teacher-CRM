import { Col } from "react-bootstrap";
import s from "./Resume.module.scss";

function Resume() {
  return (
    <section>
      <div className={s.resume}>
        <h2>Resume</h2>

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
    </section>
  );
}

export default Resume;
