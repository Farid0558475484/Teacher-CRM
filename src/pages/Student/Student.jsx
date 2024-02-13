import { Routes, Route } from "react-router-dom";
import StudentHome from "./../../components/Student/StudentHome/StudentHome";
import Header from "./../../components/Student/Header/Header";

function Student() {
  return (
    <>
      <Header />
      <main
        style={{ backgroundImage: "linear-gradient(270deg, #a8518a, #ec2a7b)" }}
      >
        <Routes>
          <Route path="/:userId/*" element={<StudentHome />} />
        </Routes>
      </main>
    </>
  );
}

export default Student;
