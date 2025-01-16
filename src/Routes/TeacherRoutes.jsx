import PropTypes from "prop-types";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/UseRole";

const TeacherRoutes = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <LoadingSpinner />;
  if (role === "teacher") return children;
  return <Navigate to="/dashboard" replace="true" />;
};

TeacherRoutes.propTypes = {
  children: PropTypes.element,
};

export default TeacherRoutes;
