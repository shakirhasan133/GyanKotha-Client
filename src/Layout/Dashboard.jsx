import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <div className="w-3/12"></div>
        <div className="9/12">
          {/* <Outlet></Outlet> */}
          <h1>ff</h1>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
