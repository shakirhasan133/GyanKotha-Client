import { Outlet } from "react-router-dom";
// import Footer from "../Components/Footer";

import { SideMenu } from "../Components/Dashboard/SideMenu";
import { CustomScroll } from "react-custom-scroll";
import DashNav from "../Components/Dashboard/DashNav";
import UseAuth from "./../Hooks/UseAuth";

const Dashboard = () => {
  const { isSideMenuOpen } = UseAuth();
  return (
    <div className="font-primary">
      <DashNav></DashNav>
      <div className="flex font-primary">
        <div className={`${isSideMenuOpen ? "w-3/12" : "w-0"} `}>
          {/* <CustomScrolll> */}
          <div
            className={` ${isSideMenuOpen ? "block" : "hidden "}`}
            // style={{ overflowX: isSideMenuOpen ? "visible" : "hidden" }}
          >
            <SideMenu></SideMenu>
          </div>
          {/* </CustomScroll> */}
        </div>
        <div className={`${isSideMenuOpen ? "w-full" : "w-9/12"} `}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
