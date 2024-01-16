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

  const login = async () => {
    try {
      let response;
      if (selectedType === "student") {
        response = await loginStudent({ email, password });
      } else {
        response = await loginTeacher({ email, password });
      }

      const { message, token, user } = response.data;

      console.log("Received token:", token);
      console.log("Login success:", true);
      console.log("User:", user);

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userId", user.id);
      sessionStorage.setItem("success", true);
      dispatch(setAuth({ success: true, message, token, user }));
      navigate(`/teacher/${user.id}`);
    } catch (error) {
      console.error("Error:", error);

      if (error.response && error.response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("Error logging in, please try again later");
      }
    }

    console.log("handleLogin end");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("handleLogin");
    login();
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
        <form onSubmit={handleLogin}>
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
          <button type="submit">Sign in</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
