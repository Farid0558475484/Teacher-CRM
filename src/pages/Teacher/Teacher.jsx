import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Header from "./../../components/Teacher/Header/Header";

const Schedule = lazy(() => import("./../../components/Teacher/Schedule/Schedule"));
const Lessons = lazy(() => import("./../../components/Teacher/Lessons/Lessons"));
const Students = lazy(() => import("./../../components/Teacher/Students/Students"));
const Wallet = lazy(() => import("./../../components/Teacher/Wallet/Wallet"));
const Profile = lazy(() => import("./../../components/Teacher/Profile/Profile"));
const TeacherSettings = lazy(() => import("./../../components/Teacher/TeacherSettings/TeacherSettings"));
const Support = lazy(() => import("./../../components/Teacher/Support/Support"));
const Messages = lazy(() => import("./../../components/Teacher/Messages/Messages"));
const AccountSettings = lazy(() => import("./../../components/Teacher/AccountSettings/AccountSettings"));
const TeacherHome = lazy(() => import("./../../components/Teacher/TeacherHome/TeacherHome"));


function Teacher() {
  return (
    <>
      <Header />
      <main
        style={{ backgroundImage: "linear-gradient(270deg, #a8518a, #ec2a7b)" }}
      >
        <Routes>
        <Route path="/" element={<TeacherHome />} />
          <Route path="/teacher-settings" element={<TeacherSettings />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/students" element={<Students />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
    </>
  );
}

export default Teacher;
