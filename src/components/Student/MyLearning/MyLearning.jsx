import React, { memo, Suspense } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import MyCourses from "./MyCourses/MyCourses";
import MyLessons from "./MyLessons/MyLessons";
import "./MyLearning.scss";

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

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MyCourses />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="my-lessons" element={<MyLessons />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default memo(MyLearning);
