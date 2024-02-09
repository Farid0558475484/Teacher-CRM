import { Container, Row } from "react-bootstrap";
import InfoTeacher from "./../InfoTeacher/InfoTeacher";
import Lesson from "./../Lessons/Lessons";
import Resume from "../Resume/Resume";

function TeacherHome() {
  return (
    <Container>
      <Row>
        <InfoTeacher />
        <Lesson />
        <Resume />
      </Row>
    </Container>
  );
}

export default TeacherHome;
