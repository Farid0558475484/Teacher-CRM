import { lazy } from "react";

const TeacherInfo = lazy(() => import("./../TeacherInfo/TeacherInfo"));
const LessonList = lazy(() => import("./../Lessons/LessonList/LessonList"));
const Resume = lazy(() => import("./../Resume/Resume"));

function TeacherHome() {
  return (
    <div className="container">
      <div className="row">
        <TeacherInfo />
        <LessonList />
        <Resume />
      </div>
    </div>
  );
}

export default TeacherHome;
