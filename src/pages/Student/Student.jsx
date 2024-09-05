import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Header from "../../components/Student/Header/Header";

const StudentHome = lazy(() =>
  import("./../../components/Student/StudentHome/StudentHome")
);
const StudentWallet = lazy(() =>
  import("./../../components/Student/StudentWallet/StudentWallet")
);
const PaymentStatus = lazy(() =>
  import("./../../components/Student/StudentWallet/PaymentStatus")
);

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
