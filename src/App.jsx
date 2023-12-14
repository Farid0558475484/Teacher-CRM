import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from "./HOC/PrivateRouter";
import TeacherTable from "./pages/TeacherTable/TeacherTable";
import Login from "./pages/Login/Login";
import NotFoundPage from "./components/NotFoudPage/NotFoundPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TeacherTable />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
