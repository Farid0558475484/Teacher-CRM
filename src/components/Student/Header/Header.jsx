import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCurrentUserQuery } from "./../../../api/usersApi";
import Skeleton from "react-loading-skeleton";
import Sidebar from "./../Sidebar/Sidebar";
import s from "./Header.module.scss";

function Header() {
  const { data, isLoading } = useCurrentUserQuery();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const userId = localStorage.getItem("userId");
  return (
    <header className={s.header}>
      <section className={s.teacherHeader}>
        <div className="container">
          <div className="row">
            <div className="col-12">

                <nav>
                  <ul className={s.ul}>
                    <li>
                      <NavLink to={`/`} className={s.item}>
                        Home
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink to={`/student/${userId}}`} className={s.item}>
                        Student Settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={`/student/${userId}}`} className={s.item}>
                        My Schedule
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/student/student-wallet`}
                        className={s.item}
                      >
                        Wallet
                      </NavLink>
                    </li> */}
                    <li>
                      <div
                        className={s.profileSettings}
                        onClick={toggleSidebar}
                      >
                        {isLoading ? (
                          <Skeleton height={50} width={50} circle={50} />
                        ) : (
                          <img
                            src="https://w7.pngwing.com/pngs/451/380/png-transparent-hamburger-button-computer-icons-menu-menu-rectangle-desktop-wallpaper-button-thumbnail.png"
                            alt="burger-menu"
                          />
                        )}
                      </div>
                    </li>
                  </ul>
                </nav>
  
            </div>
          </div>
        </div>
      </section>

      <Offcanvas
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Panel</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}

export default Header;
