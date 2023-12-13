import { NavLink } from "react-router-dom";
import s from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <ul className={s.sidebar}>
      <li>
        <NavLink to={`/dashboard/home`} className={s.item}>
          HomeDashboard
        </NavLink>
      </li>
      <li>
        <NavLink to={`/dashboard/add-lesson`} className={s.item}>
          add lesson
        </NavLink>
      </li>
    </ul>
  );
}

export default Sidebar;
