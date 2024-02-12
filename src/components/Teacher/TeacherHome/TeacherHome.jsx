import { Container, Row } from "react-bootstrap";
import UserInfo from "../../UserInfo/UserInfo";
import LessonList from "./../Lessons/LessonList/LessonList";
import Resume from "../Resume/Resume";

function TeacherHome() {
  return (
    <Container>
      <Row>
        <UserInfo />
        <LessonList />
        <Resume />
      </Row>
    </Container>
  );
}

export default TeacherHome;
