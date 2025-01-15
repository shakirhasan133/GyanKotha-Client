import Lottie from "lottie-react";
import loginLottie from "../assets/loginLottie.json";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl grid grid-cols-1 md:grid-cols-2">
        {/* Left Section - Image */}
        <div className="hidden md:flex items-center justify-center bg-primary-light rounded-l-lg">
          <Lottie animationData={loginLottie} className="w-[100vh]"></Lottie>
        </div>

        {/* Right Section - Login Form */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Login <span className="text-primary">Now</span>
          </h2>

          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username or Email
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username or email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md shadow hover:bg-primary-dark transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">Or login with</p>
            <button
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

export default LoginPage;
