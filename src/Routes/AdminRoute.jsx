import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/UseRole";
import LoadingPage from "../Pages/LoadingPage";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <LoadingPage />;
  if (role === "admin") return children;
  return <Navigate to="/dashboard" replace="true" />;
};

AdminRoute.propTypes = {
  children: PropTypes.element,
};

export default AdminRoute;
