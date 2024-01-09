import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "./../../api/authApi";
import { useDispatch } from "react-redux";
import { setAuth } from "./../../redux/features/auth/authSlice";
import s from "./Login.module.scss";

function Login() {
  const [loginUser] = useSignInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await loginUser({ email, password });
      const { token, UserName } = response.data;

      sessionStorage.setItem("token", token);
      dispatch(setAuth({ isAuthenticated: true, userName: UserName }));
      navigate("/dashboard");
    } catch (error) {
      console.error("Ошибка входа:", error);

      if (error.status === 401 && error.data?.Message) {
        setError("Неправильное имя пользователя или пароль");
      } else {
        setError("Произошла ошибка при входе");
      }
    }
  };

  return (
    <section className={s.loginContainer}>
      <div className={s.loginForm}>
        <h2>Вход в систему</h2>
        {error && <div className={s.error}>{error}</div>}
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Имя пользователя"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <button onClick={handleLogin}>Войти</button>
      </div>
    </section>
  );
}

export default Login;
