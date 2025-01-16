import { useContext, useState } from "react";
import { MdOutlineFitScreen } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import UseAuth from "../../Hooks/UseAuth";
// import { MainContext } from "../Provider/MainContext";

const DashNav = () => {
  const { isSideMenuOpen, setIsSideMenuOpen } = UseAuth();
  const elem = document.body;
  const [fullScreen, setFullscreen] = useState(false);

  const handleFullScreen = () => {
    if (!fullScreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        // Firefox
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        // IE/Edge
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
    }
    setFullscreen(!fullScreen);
  };

  const handleSideMenuOpen = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="bg-primary-darkest sticky top-0 z-50 h-14">
      <div className="flex justify-between items-center py-1 px-8">
        <div className="left-side flex items-center justify-center gap-2">
          {/* Logo */}
          <div>
            <h1 className="text-lg font-bold text-[#ECF0F1]">GyanKotha</h1>
          </div>

          <div>
            {/* Hamburger */}
            <button
              className="text-[#ECF0F1] hover:bg-[#2980B9] p-2 rounded-full"
              onClick={handleSideMenuOpen}
            >
              <RiMenu3Fill className="font-bold text-lg" />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center gap-3">
          <button
            className="bg-[#3498DB] hover:bg-[#2980B9] text-[#ECF0F1] rounded-full p-2"
            onClick={handleFullScreen}
          >
            <MdOutlineFitScreen className="font-bold text-xl" />
          </button>
          <div className="bg-[#27AE60] rounded-full p-1">
            <img
              className="w-8 rounded-full"
              src="https://hrm.bdtask-demoserver.com/backend/assets/dist/img/avatar.jpg"
              alt="Profile"
            />
          </div>
          <div>
            <h3 className="font-bold text-md text-[#ECF0F1]">Shakir</h3>
            <p className="font-semibold text-sm text-[#BDC3C7]">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
