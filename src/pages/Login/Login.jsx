import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "./../../api/authApi";
import { useDispatch } from "react-redux";
import { setAuth } from "./../../redux/features/auth/authSlice";
import s from "./Login.module.scss";
// ... (ваш импорт и стили)

function Login() {
  const [loginUser] = useSignInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Новое состояние для ошибок

  const handleLogin = async () => {
    try {
      const response = await loginUser({ username, password });
      const { Token, UserName, Role } = response.data;

      sessionStorage.setItem("token", Token);

      dispatch(
        setAuth({ isAuthenticated: true, userName: UserName, role: Role })
      );

      navigate("/dashboard");
    } catch (error) {
      console.error("Ошибка входа:", error);

      if (error.status === 401 && error.data?.Message) {
        setError("Неправильное имя пользователя или пароль"); // Устанавливаем ошибку
      } else {
        setError("Произошла ошибка при входе"); // Общая ошибка входа
      }
    }
  };

  return (
    <section className={s.loginContainer}>
      <div className={s.loginForm}>
        <h2>Вход в систему</h2>
        {error && <div className={s.error}>{error}</div>}{" "}
        {/* Отображаем ошибку */}
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
