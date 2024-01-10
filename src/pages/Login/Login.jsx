import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useSignInStudentMutation,
  useSignInTeacherMutation,
} from "./../../api/authApi";
import { setAuth } from "./../../redux/features/auth/authSlice";
import s from "./Login.module.scss";

function Login() {
  const [loginStudent] = useSignInStudentMutation();
  const [loginTeacher] = useSignInTeacherMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState("student");

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("handleLogin");
    try {
      let response;

      if (selectedType === "student") {
        response = await loginStudent({ email, password });
      } else {
        response = await loginTeacher({ email, password });
      }

      const { success, message, token } = response.data;

      console.log("Received token:", token);

      sessionStorage.setItem("token", token);
      dispatch(setAuth({ success: true, message, token }));
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);

      if (error.status === 401 && error.data?.message) {
        setError("Invalid username or password");
      } else {
        setError("Error logging in, please try again later");
      }
    }

    console.log("handleLogin end");
  };

  return (
    <section className={s.loginContainer}>
      <div className={s.loginForm}>
        <h2>Login</h2>

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

        {error && <div className={s.error}>{error}</div>}
        <form>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button onClick={handleLogin}>Sign in</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
