import AddCourses from "./AddCourses/AddCourses";
import LessonList from "./LessonList/LessonList";
import AddLessons from "./AddLessons/AddLessons";
import DeleteLesson from "./DeleteLesson/DeleteLesson";

function Lessons() {
  return (
    <>
      <LessonList
        AddLessons={AddLessons}
        AddCourses={AddCourses}
        DeleteLesson={DeleteLesson}
      />
    </>
  );
}

export default Lessons;
