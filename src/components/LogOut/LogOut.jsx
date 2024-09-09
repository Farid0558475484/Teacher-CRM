import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { logout } from "./../../redux/features/auth/authSlice";

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.clear();
    dispatch(logout());
    navigate("/");;
  }, [dispatch, navigate]);

  return (
    <div style={{ textAlign: "center" }}>
      <button
        style={{
          backgroundColor: "#db3580",
          borderRadius: "10px",
        }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
