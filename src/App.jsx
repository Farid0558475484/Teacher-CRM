import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "./HOC/PrivateRouter";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFoundPage from "./components/NotFoudPage/NotFoundPage";
import Teacher from "./pages/Teacher/Teacher";
import Student from "./pages/Student/Student";
import Register from "./pages/Register/Register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
