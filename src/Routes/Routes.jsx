import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ErrorPage from "./../Pages/ErrorPage";
import AllClasses from "../Pages/AllClasses";
import ApplyToTeach from "../Pages/PrivatePage/ApplyToTeach";
import PrivateRoutes from "./PrivateRoutes";
import CourseDetails from "../Pages/PrivatePage/CourseDetails";
import Dashboard from "../Layout/Dashboard";
import DashStats from "../Components/Dashboard/DashStats";
import EnrolledClasses from "../Components/Dashboard/Student/EnrolledClasses";
import Profile from "../Components/Dashboard/Profile/Profile";
import TeacherRoutes from "./TeacherRoutes";
import AddClass from "../Components/Dashboard/Teacher/AddClass";

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
      // Course Details
      {
        path: "/Details",
        element: (
          <PrivateRoutes>
            <CourseDetails></CourseDetails>,
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <DashStats></DashStats>,
      },
      {
        path: "my-enroll-class",
        element: (
          <PrivateRoutes>
            <EnrolledClasses></EnrolledClasses>
          </PrivateRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      // Teacher Routes
      {
        path: "add-class",
        element: (
          <TeacherRoutes>
            <AddClass></AddClass>
          </TeacherRoutes>
        ),
      },
    ],
  },
]);
