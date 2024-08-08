import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import PrivateRouter from "./HOC/PrivateRouter";
import "./App.css";


const Home = lazy(() => import("./pages/Home/Home"));
const CourseDetail = lazy(() => import("./components/Courses/CourseDetail"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const NotFoundPage = lazy(() =>import("./components/NotFoudPage/NotFoundPage"));
const Teacher = lazy(() => import("./pages/Teacher/Teacher"));
const Student = lazy(() => import("./pages/Student/Student"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/teacher/*"
            element={
              <PrivateRouter>
                <Teacher />
              </PrivateRouter>
            }
          />
          <Route
            path="/student/*"
            element={
              <PrivateRouter>
                <Student />
              </PrivateRouter>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
