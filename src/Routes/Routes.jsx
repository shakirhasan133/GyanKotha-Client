import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ErrorPage from "./../Pages/ErrorPage";
import AllClasses from "../Pages/AllClasses";
import ApplyToTeach from "../Pages/PrivatePage/ApplyToTeach";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/allClasses",
        element: <AllClasses></AllClasses>,
      },
      // Private Routes
      {
        path: "/applyToTech",
        element: (
          <PrivateRoutes>
            <ApplyToTeach></ApplyToTeach>,
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
