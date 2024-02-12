import { Routes, Route } from "react-router-dom";
import StudentHome from "./../../components/Student/StudentHome/StudentHome";
import Header from "./../../components/Student/Header/Header";

function Student() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/:userId/*" element={<StudentHome />} />
        </Routes>
      </main>
    </>
  );
}

export default Student;
