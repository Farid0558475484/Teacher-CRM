import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import MyCourses from "./MyCourses/MyCourses";
import "./MyLearning.scss";

const NavigationMenu = memo(() => (
  <nav>
    <ul>
      <li><NavLink to="/student/my-course">My courses</NavLink></li>
      <li>My lessons</li>
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

      <MyCourses />
    </div>
  );
};

export default memo(MyLearning);
