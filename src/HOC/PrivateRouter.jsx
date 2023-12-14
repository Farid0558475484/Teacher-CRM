import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function PrivateRouter({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
PrivateRouter.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRouter;
