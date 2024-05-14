import AddCourses from "./AddCourses/AddCourses";
import LessonList from "./LessonList/LessonList";
import AddLessons from "./AddLessons/AddLessons";

function Lessons() {
  return (
    <>
      <LessonList AddLessons={AddLessons} AddCourses={AddCourses} />
    </>
  );
}

export default Lessons;
