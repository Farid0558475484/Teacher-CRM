import { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Register.module.scss";

function Register() {
  const [selectedType, setSelectedType] = useState("student");

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };
  return (
    <main>
      <section className={s.register}>
        <div className={s.registerForm}>
          <h2>Register</h2>
          <div className={s.typePerson}>
            <NavLink
              className={`${s.student} ${
                selectedType === "student" ? s.selected : ""
              }`}
              onClick={() => handleTypeClick("student")}
            >
              Student
            </NavLink>
            <NavLink
              className={`${s.teacher} ${
                selectedType === "teacher" ? s.selected : ""
              }`}
              onClick={() => handleTypeClick("teacher")}
            >
              Teacher
            </NavLink>
          </div>
          {/* {error && <div className={s.error}>{error}</div>} */}
          <form>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              autoComplete="on"
            />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="on"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              autoComplete="new-password"
            />
            <button>Sign Up</button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Register;
