import { Route, Routes } from "react-router-dom";
import TeacherTable from "../components/TeacherTable";
import Login from "./../pages/Login/Login";
import Dashboard from "./../pages/Dashboard/Dashboard";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<TeacherTable />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default Router;
