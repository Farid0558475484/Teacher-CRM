import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRouter({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}

PrivateRouter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRouter;
