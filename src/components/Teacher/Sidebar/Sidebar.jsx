import { NavLink } from "react-router-dom";
import LogoutButton from "./../../LogOut/LogOut";
import s from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={s.sidebar}>
      <ul className={s.sidebarUl}>
        <li>
          <NavLink to={`/teacher/lessons`} className={s.item}>
            My Lessons
          </NavLink>
        </li>
        <li>
          <NavLink to={`/teacher/students`} className={s.item}>
            My Students
          </NavLink>
        </li>
        <li>
          <NavLink to={`/teacher/wallet`} className={s.item}>
            My Wallet
          </NavLink>
        </li>
        <li>
          <NavLink to={`/teacher/profile`} className={s.item}>
            My Teacher Profile
          </NavLink>
        </li>
        <li>
          <NavLink to={`/teacher/account-settings`} className={s.item}>
            Account Settings
          </NavLink>
        </li>
        <li>
          <NavLink to={`/teacher/support`} className={s.item}>
            Support
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
