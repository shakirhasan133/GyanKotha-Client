import PropTypes from "prop-types";

import { Navigate } from "react-router-dom";
import useRole from "../Hooks/UseRole";
import LoadingPage from "../Pages/LoadingPage";
import UseAuth from "../Hooks/UseAuth";

const TeacherRoutes = ({ children }) => {
  const { Loading } = UseAuth();
  const [role, isLoading] = useRole();

  if (Loading) return <LoadingPage />;
  if (isLoading) return <LoadingPage />;
  if (role === "Teacher") return children;
  return <Navigate to="/dashboard" replace="true" />;
};

TeacherRoutes.propTypes = {
  children: PropTypes.element,
};

export default TeacherRoutes;
