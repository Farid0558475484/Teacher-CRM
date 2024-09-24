import { Container, Row } from "react-bootstrap";
import StudentInfo from "../Profile/Profile";
import Resume from "./../../Teacher/Resume/Resume";
import StudentLesson from "./../StudentLesson/StudentLesson";
import MyTraining from "../MyLearning/MyLearning";

function StudentHome() {
  return (
    <>
      <MyTraining />
      {/* <StudentLesson /> */}
      {/* <Resume /> */}
    </>
  );
}

export default StudentHome;
