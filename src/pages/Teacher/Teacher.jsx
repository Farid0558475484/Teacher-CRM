import { Routes, Route } from "react-router-dom";
import { Col } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeDashboard from "../../components/HomeDashboard/HomeDashboard";
import AddLesson from "../../components/AddLesson/AddLesson";
import Header from "./../../components/Teacher/Header/Header";

function Teacher() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Col md={2}>
          <Sidebar />
        </Col>

        <Col md={10}>
          <Routes>
            <Route path="/home" element={<HomeDashboard />} />
            <Route path="/add-lesson" element={<AddLesson />} />
          </Routes>
        </Col>
      </div>
    </>
  );
}

export default Teacher;
