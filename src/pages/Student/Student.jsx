import { Routes, Route } from "react-router-dom";
import StudentHome from "./../../components/Student/StudentHome/StudentHome";
import Header from "./../../components/Student/Header/Header";
import Meeting from "./../../components/Student/Meeting/Meeting";

function Student() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/:userId/*" element={<StudentHome />} />
          <Route path="/meeting" element={<Meeting />} />
        </Routes>
      </main>
    </>
  );
}

export default Student;
