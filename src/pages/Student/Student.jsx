import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Header from "../../components/Student/Header/Header";

const StudentHome = lazy(() =>
  import("./../../components/Student/StudentHome/StudentHome")
);
const StudentWallet = lazy(() =>
  import("./../../components/Student/Stripe/StudentWallet")
);
const PaymentComplete = lazy(() =>
  import("../../components/Student/Stripe/PaymentComplete")
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
          <Route path="/payment-status" element={<PaymentComplete />} />
        </Routes>
      </main>
    </>
  );
}

export default Student;
