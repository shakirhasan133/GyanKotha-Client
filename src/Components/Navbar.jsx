import { useState, useEffect } from "react";
import { FaChalkboardTeacher, FaFileVideo } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

import Swal from "sweetalert2";
// import logo from "../assets/WhereIsItLogo.png";
import { motion } from "framer-motion";
import UseAuth from "../Hooks/UseAuth";

const Navbar = () => {
  const { user, signOutUser } = UseAuth();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to toggle navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Sign Out
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-right",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Logout Successful",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-opacity-95 bg-white"
          : " border rounded-md border-muted text-primary bg-bodyColor container sm:mx-5  md:mx-auto"
      } text-primary-dark bg-bodyColor shadow-md sticky top-0 z-50 transition duration-300 navbarIndex`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                className=" rounded-full"
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* <img src={logo} alt="" className="w-9 h-9 rounded-full" /> */}
              </motion.div>
              <span className="text-xl font-bold text-primary">GyanKotha</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-primary transition duration-200 ${
                  isActive ? "relative text-primary" : "text-primary"
                }`
              }
            >
              {({ isActive }) => (
                <div className="flex items-center justify-center gap-1 relative">
                  <IoHome className="inline"></IoHome>
                  <span>Home</span>
                  <span
                    className={`absolute left-0 bottom-0 w-full h-[2px] bg-primary rounded-full transition-transform duration-300 ease-in-out transform origin-center ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></span>
                </div>
              )}
            </NavLink>

            <NavLink
              to="/allClasses"
              className={({ isActive }) =>
                `hover:text-primary transition duration-200 ${
                  isActive
                    ? "border-b-2 text-primary border-primary transition-all scale-105"
                    : ""
                }`
              }
            >
              <div className="flex items-center justify-center gap-1">
                <FaFileVideo className="inline" />
                <span>All Classes</span>
              </div>
            </NavLink>

            <NavLink
              to="/applyToTech"
              className={({ isActive }) =>
                `hover:text-primary transition duration-200 ${
                  isActive
                    ? "border-b-2 text-primary border-primary transition-all scale-105"
                    : ""
                }`
              }
            >
              <div className="flex items-center justify-center gap-1">
                <FaChalkboardTeacher className="inline"></FaChalkboardTeacher>
                <span>Teach on GyanKotha</span>
              </div>
            </NavLink>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            {!user ? (
              <div className="md:flex items-center justify-center gap-2 hidden ">
                <Link
                  to="/login"
                  className="px-4 py-2 bg-primary-light text-secondary font-medium rounded-md hover:bg-primary-dark hover:text-primary transition"
                >
                  Log In
                </Link>

                <Link
                  to="/register"
                  className="px-4 py-2 bg-white border border-muted  text-secondary font-medium rounded-md hover:bg-primary hover:text-white transition"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="relative">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="hidden md:block"
                    onClick={(event) => {
                      event.stopPropagation();
                      setDropdownOpen((prev) => !prev);
                    }}
                    onBlur={() => {
                      setTimeout(() => {
                        setDropdownOpen(false);
                      }, 300);
                    }}
                  >
                    <img
                      src={user.photoURL}
                      alt="User Profile"
                      className="w-10 h-10 rounded-full border-2 border-primary object-contain p-[2px] hover:scale-110 transition-all"
                      referrerPolicy="no-referrer"
                      title={user?.displayName}
                    />
                  </button>
                  <button
                    className="hidden md:block p-2 text-primary-darkest font-medium rounded-md hover:bg-primary-dark hover:text-light transition"
                    onClick={handleSignOut}
                  >
                    Log out
                  </button>
                </div>
                {isDropdownOpen && (
                  <div className="absolute w-[200px] right-0 mt-2 bg-primary-light text-primary-dark rounded-md shadow-lg z-50 text-center">
                    <h1 className="text-md px-4 py-2 font-bold">
                      {user?.displayName}
                    </h1>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        `text-center w-10/12 block mx-auto px-4 py-2  bg-primary-darkest text-light  rounded-md hover:bg-primary-dark  transition ${
                          isActive
                            ? "bg-primary-dark text-primary-light transition"
                            : ""
                        }`
                      }
                    >
                      Dashboard
                    </NavLink>

                    <button
                      onClick={handleSignOut}
                      className=" my-3 text-center w-10/12 block mx-auto px-4 py-2  bg-primary-darkest text-light  rounded-md hover:bg-primary-dark  transition"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex items-center"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open Mobile Menu</span>
              {!isMobileMenuOpen ? (
                <RiMenu3Fill className="text-xl"></RiMenu3Fill>
              ) : (
                <IoMdCloseCircle className="text-xl"></IoMdCloseCircle>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary w-3/4 h-screen float-end absolute right-0 z-50">
          <ul className="flex flex-col  px-4 py-2 justify-center ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 w-full text-left text-light ${
                    isActive ? "bg-primary-dark text-light transition" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allClasses"
                className={({ isActive }) =>
                  `block px-4 py-2 w-full text-left text-light ${
                    isActive ? "bg-primary-dark text-light transition" : ""
                  }`
                }
              >
                All Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/applyToTech"
                className={({ isActive }) =>
                  `block px-4 py-2 w-full text-left  text-light ${
                    isActive ? "bg-primary-dark text-light transition" : ""
                  }`
                }
              >
                Teach on GyanKotha
              </NavLink>
            </li>
            {user ? (
              <ul>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `block px-4 py-2 w-full text-left text-light ${
                        isActive ? "bg-primary-dark text-light transition" : ""
                      }`
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            ) : (
              ""
            )}

            <span className="w-full h-[1px] bg-white mb-3"></span>
            {!user ? (
              <div className="flex flex-col items-left  gap-2  w-full text-center">
                <Link
                  to="/login"
                  className="px-4 py-2 text-primary-darkest w-full bg-light font-medium rounded-md  hover:text-primary-light transition"
                >
                  Log In
                </Link>

                <Link
                  to="/register"
                  className="px-4 py-2 text-light w-full bg-primary-dark font-medium rounded-md  transition"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="w-full text-center">
                <h1 className=" py-2 w-full text-light hover:bg-primary-dark hover:text-primary-light transition">
                  {user?.displayName}
                </h1>
                <button
                  className="px-4 py-2 text-primary-darkest w-full bg-primary font-medium rounded-md  hover:text-primary-light transition"
                  onClick={handleSignOut}
                >
                  Log Out
                </button>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
