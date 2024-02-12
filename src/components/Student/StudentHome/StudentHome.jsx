import { Container, Row } from "react-bootstrap";
import UserInfo from "../../UserInfo/UserInfo";
import Resume from "./../../Teacher/Resume/Resume";
import StudentLesson from "./../StudentLesson/StudentLesson";

function StudentHome() {
  return (
    <section>
      <Container>
        <Row>
          <UserInfo />
          <StudentLesson />
          <Resume />
        </Row>
      </Container>
    </section>
  );
}

export default StudentHome;
