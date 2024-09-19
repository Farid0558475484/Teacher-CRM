import React from "react";
import { useDeleteLessonMutation } from "./../../../../api/coursesApi";

function DeleteLesson({ courseId, lessonId, refetch }) {
  const [deleteLesson] = useDeleteLessonMutation();

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lesson?"
    );
    if (confirmed) {
      try {
        await deleteLesson({ courseId, lessonId }).unwrap();
        refetch(); 
      } catch (error) {
        alert("Failed to delete the lesson. Please try again.");
      }
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDelete}>
      Delete
    </button>
  );
}

export default DeleteLesson;