import { Routes, Route } from "react-router-dom";
import StudentHome from "./../../components/Student/StudentHome/StudentHome";
import Header from "./../../components/Student/Header/Header";
import Meet from "./../../components/Student/Meet/Meet";

function Student() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/:userId/*" element={<StudentHome />} />
          <Route path="/meeting" element={<Meet />} />
        </Routes>
      </main>
    </>
  );
}

export default Student;
