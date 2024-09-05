import { Container, Row } from "react-bootstrap"
import StudentInfo from "./../StudentInfo/StudentInfo";
import Resume from "./../../Teacher/Resume/Resume";
import StudentLesson from "./../StudentLesson/StudentLesson";

function StudentHome() {
  return (
    <section>
      <Container>
        <Row>
          <StudentInfo />
          <StudentLesson />
          <Resume />
        </Row>
      </Container>
    </section>
  );
}

export default StudentHome;
