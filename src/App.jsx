import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "./HOC/PrivateRouter";
import TeacherTable from "./pages/TeacherTable/TeacherTable";
import Login from "./pages/Login/Login";
import NotFoundPage from "./components/NotFoudPage/NotFoundPage";
import Teacher from "./pages/Teacher/Teacher";
import Register from "./pages/Register/Register";
import Student from "./pages/Student/Student";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TeacherTable />} />
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
    </BrowserRouter>
  );
}

export default App;
