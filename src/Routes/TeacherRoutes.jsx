import PropTypes from "prop-types";

import { Navigate } from "react-router-dom";
import useRole from "../Hooks/UseRole";
import LoadingPage from "../Pages/LoadingPage";

const TeacherRoutes = ({ children }) => {
  // Todo------------------------------------------------
  // const [role, isLoading] = useRole();
  const [isLoading] = useRole();
  const role = "teacher";

  // if (isLoading) return <LoadingPage />;
  if (role === "teacher") return children;
  return <Navigate to="/dashboard" replace="true" />;
};

TeacherRoutes.propTypes = {
  children: PropTypes.element,
};

export default TeacherRoutes;
