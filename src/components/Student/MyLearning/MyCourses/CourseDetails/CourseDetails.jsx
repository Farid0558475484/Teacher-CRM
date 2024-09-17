import React from "react";
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { courseId } = useParams();

  return <div style={{ color: "white" }}>Course ID: {courseId}</div>;
}

export default CourseDetails;
