import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function PrivateRouter({ children }) {
  const success = useSelector((state) => state.auth.success);
  const token = sessionStorage.getItem("token");

  if (!success && !token) {
    return <Navigate to="/login" />;
  }

  return children;
}

PrivateRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRouter;
