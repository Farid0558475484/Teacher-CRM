import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/admin/">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/student">Student</Link>
          </li>
          <li>
            <Link to="/admin/teachers">Teacher</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
