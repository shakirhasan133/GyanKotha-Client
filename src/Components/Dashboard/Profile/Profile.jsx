import UseAuth from "../../../Hooks/UseAuth";
import useRole from "../../../Hooks/UseRole";
import { MdEmail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";

const Profile = () => {
  const [role] = useRole();
  const { user } = UseAuth();
  return (
    <div className="p-6 bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={user?.photoURL}
            alt="User Profile"
            className="w-24 h-24 rounded-full object-cover shadow-lg border border-primary-darkest p-1"
          />
        </div>

        {/* User Details */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-800">
            {user?.displayName}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Role: <span className="font-medium text-gray-600">{role}</span>
          </p>
        </div>

        <div className="mt-4">
          {/* Email */}
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-blue-100 text-primary p-2 rounded-full">
              <MdEmail />
            </div>
            <p className="text-gray-700 font-medium">{user?.email}</p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-green-100 text-primary p-2 rounded-full">
              <BiPhone />
            </div>
            <p className="text-gray-700 font-medium">
              {user.phone || "Not Available "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
