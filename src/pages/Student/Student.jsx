import { Routes, Route } from "react-router-dom";
import StudentHome from "../../components/Student/StudentHome/StudentHome";
import Header from "../../components/Student/Header/Header";
import StudentWallet from "./../../components/Student/StudentWallet/StudentWallet";
import PaymentStatus from "./../../components/Student/StudentWallet/PaymentStatus"

function Student() {
  return (
    <>
      <Header />
      <main
        style={{ backgroundImage: "linear-gradient(270deg, #a8518a, #ec2a7b)" }}
      >
        <Routes>
          <Route path="/:userId/*" element={<StudentHome />} />
          <Route path="/student-wallet" element={<StudentWallet />} />
          <Route path="/payment-status" element={<PaymentStatus />} />

        </Routes>
      </main>
    </>
  );
}

export default Student;
