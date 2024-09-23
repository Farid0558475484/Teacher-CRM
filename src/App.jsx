import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import "./App.css";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./pages/Home/Home"));
const CourseDetail = lazy(() => import("./components/Courses/CourseDetail/CourseDetail"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const NotFoundPage = lazy(() =>
  import("./components/NotFoudPage/NotFoundPage")
);
const Teacher = lazy(() => import("./pages/Teacher/Teacher"));
const Student = lazy(() => import("./pages/Student/Student"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const PrivateRouter = lazy(() => import("./HOC/PrivateRouter"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
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
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;