import React, { memo, Suspense, lazy } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import "./MyLearning.scss";

const MyCourses = lazy(() =>
  import("./../../../components/Student/MyLearning//MyCourses/MyCourses")
);
const MyLessons = lazy(() =>
  import("./../../../components/Student/MyLearning/MyLessons/MyLessons")
);
const CourseDetails = lazy(() =>
  import(
    "./../../../components/Student/MyLearning/MyCourses/CourseDetails/CourseDetails"
  )
);

const NavigationMenu = memo(() => (
  <nav>
    <ul>
      <li>
        <NavLink to="my-courses">My courses</NavLink>
      </li>
      <li>
        <NavLink to="my-lessons">My lessons</NavLink>
      </li>
      <li>Wishlist</li>
      <li>Archived</li>
      <li>Learning tools</li>
    </ul>
  </nav>
));

const MyLearning = () => {
  return (
    <div className="my-learning">
      <div className="header">
        <div className="container">
          <div className="row">
            <h1>My learning</h1>
            <NavigationMenu />
          </div>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MyCourses />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="my-lessons" element={<MyLessons />} />
          <Route path="/my-courses/lessons" element={<CourseDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default memo(MyLearning);
