import { Container, Row } from "react-bootstrap";
import UserInfo from "../../UserInfo/UserInfo";
import Lesson from "./../Lessons/Lessons";
import Resume from "../Resume/Resume";

function TeacherHome() {
  return (
    <Container>
      <Row>
        <UserInfo />
        <Lesson />
        <Resume />
      </Row>
    </Container>
  );
}

export default TeacherHome;
