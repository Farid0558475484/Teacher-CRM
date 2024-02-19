import { Routes, Route } from "react-router-dom";
import Header from "./../../components/Teacher/Header/Header";
import Schedule from "./../../components/Teacher/Schedule/Schedule";
import Lessons from "./../../components/Teacher/Lessons/Lessons";
import Students from "./../../components/Teacher/Students/Students";
import Wallet from "./../../components/Teacher/Wallet/Wallet";
import Profile from "./../../components/Teacher/Profile/Profile";
import TeacherSettings from "./../../components/Teacher/TeacherSettings/TeacherSettings";
import Support from "./../../components/Teacher/Support/Support";
import Messages from "./../../components/Teacher/Messages/Messages";
import AccountSettings from "./../../components/Teacher/AccountSettings/AccountSettings";
import TeacherHome from "./../../components/Teacher/TeacherHome/TeacherHome";

function Teacher() {
  console.log("@Teacher");
  return (
    <>
      <Header />
      <main
        style={{ backgroundImage: "linear-gradient(270deg, #a8518a, #ec2a7b)" }}
      >
        <Routes>
          <Route path="/:userId/*" element={<TeacherHome />} />
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
