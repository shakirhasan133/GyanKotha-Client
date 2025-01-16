/* eslint-disable react/prop-types */

import LoadingPage from "../Pages/LoadingPage";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = UseAuth();
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={location.pathname}></Navigate>;
};

export default PrivateRoutes;
