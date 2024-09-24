import { NavLink } from "react-router-dom";
import LogOut from "./../../LogOut/LogOut";
import s from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={s.sidebar}>
      <ul>
      <li>
          <NavLink to={`/student`} className={s.item}>
            My Courses
          </NavLink>
        </li>
        <li>
          <NavLink to={`/student/student-wallet`} className={s.item}>
            My Wallet
          </NavLink>
        </li>
        <li>
          <NavLink to={`/student/profile`} className={s.item}>
            My Profile
          </NavLink>
        </li>
        <li>
          <LogOut />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
