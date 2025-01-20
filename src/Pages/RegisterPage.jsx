/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import RegisterLottie from "../assets/RegisterLottie.json";

import { useForm } from "react-hook-form";
import UseAuth from "../Hooks/UseAuth";
import { useState } from "react";
import { ImageUpload, SaveUser } from "../Api/utils";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const {
    signUpWithEmail,
    updateUserData,
    signInWithGoogleEmail,
    error,
    setError,
  } = UseAuth();
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState("");
  const location = useLocation();
  const from = location?.state || "/";
  const navigate = useNavigate();
  const [isError, setIsError] = useState("");
  const [isShowPass, setIsShowpass] = useState(false);

  //
  const handleImage = async (data) => {
    const imageURL = await ImageUpload(data);
    setImage(imageURL);
  };

  const handleSignUp = (data) => {
    const { fullName, email, password } = data;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setIsError(
        "Password must be at lest one upper case, one lowercase, and six character"
      );
      return;
    }

    signUpWithEmail(email, password)
      .then(async (data) => {
        await updateUserData(fullName, image);
        try {
          await SaveUser(data.user);
          let timerInterval;
          Swal.fire({
            title: "Login Successful",
            html: "Please wait <b></b> seconds to redirect.",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${(Swal.getTimerLeft() / 1000).toFixed(
                  1
                )}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              navigate(from);
            }
          });
        } catch (error) {
          console.log(error.message);
        }
      })
      .catch((error) => {
        setError(error);
      });
  };

  // Handle Login with Google
  const handleLoginWithGoogleEmail = () => {
    signInWithGoogleEmail()
      .then(async (data) => {
        try {
          await SaveUser(data.user);
          let timerInterval;
          Swal.fire({
            title: "Login Successful",
            html: "Please wait <b></b> seconds to redirect.",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
              timerInterval = setInterval(() => {
                timer.textContent = `${(Swal.getTimerLeft() / 1000).toFixed(
                  1
                )}`;
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              navigate(from);
            }
          });
        } catch (error) {
          console.log(error.message);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light md:py-10">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2">
        {/* Left Section - Image */}
        <div className="hidden md:flex items-center justify-center bg-primary-soft rounded-l-lg">
          <Lottie animationData={RegisterLottie} className="w-[100vh]"></Lottie>
        </div>

        {/* Right Section - Register Form */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Register <span className="text-primary">Now</span>
          </h2>

          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="mb-4">
              <label
                htmlFor="Name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                {...register("fullName", { required: true })}
                type="text"
                id="fullName"
                placeholder="Enter your Full name "
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                id="email"
                placeholder="Enter your email address"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type={isShowPass ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsShowpass(!isShowPass);
                }}
                className="absolute top-[56%] right-3"
              >
                {isShowPass ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>

            <div className="mb-4">
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-700"
              >
                Profile Picture
              </label>
              <input
                onChange={(e) => handleImage(e.target.files[0])}
                type="file"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>
            <p className="text-error pb-2">{error && error}</p>
            <p className="text-error pb-2">{isError && isError}</p>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md shadow hover:bg-primary-dark transition duration-300"
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">Or login with</p>
            <button
              onClick={handleLoginWithGoogleEmail}
              type="button"
              className="w-full bg-light border border-primary text-primary py-2 mt-2 rounded-md hover:bg-primary hover:text-white transition duration-300"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
