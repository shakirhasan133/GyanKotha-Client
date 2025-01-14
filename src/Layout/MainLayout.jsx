import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "./../Components/Footer";

const MainLayout = () => {
  return (
    <div className="font-primary bg-bodyColor">
      <Navbar></Navbar>

      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
