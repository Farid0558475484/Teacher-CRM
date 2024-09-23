import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./../../components/Admin/Sidebar/Sidebar";
import Loading from "./../../components/Loading/Loading";
import Dashboard from "../../components/Admin/Dashboard/Dashboard";
import Student from "./../../components/Admin/Student/Student";
import Teacher from "./../../components/Admin/Teacher/Teacher.jsx";

function Admin() {
  return (
    <div className="app-container d-flex">
      <Sidebar />
      <div className="main-content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Dashboard />} /> 
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/student" element={<Student />} />
            <Route path="/teachers" element={<Teacher />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default Admin;