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
const Profile = lazy(() =>
  import("./../../components/Student/Profile/Profile.jsx")
);

function Student() {
  return (
    <>
      <Header />
      <main
        style={{ backgroundImage: "linear-gradient(270deg, #a8518a, #ec2a7b)", minHeight: "100vh" }}
      >
        <Routes>
          <Route path="/*" element={<StudentHome />} />
          <Route path="/student-wallet" element={<StudentWallet />} />
          <Route path="/payment-status" element={<PaymentComplete />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default Student;
