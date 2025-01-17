import UseAuth from "../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import LoadingPage from "../../../Pages/LoadingPage";
import { useNavigate } from "react-router-dom";

const MyClasses = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();

  const { data: Classes = [], isLoading } = useQuery({
    queryKey: ["TeacherClass", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/allClasses?email=${user?.email}`);
      return data;
    },
  });

  const handleUpdate = (id) => {
    navigate(`/dashboard/update-class/${id}`);
  };

  const handleDelete = (id) => {};

  const handleSeeDetails = (id) => {};

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div className="min-h-screen bg-bodyColor-light p-6">
      <h1 className="text-3xl font-bold text-primary-dark mb-8 text-center">
        My Classes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Classes.map((classItem) => (
          <div
            key={classItem.id}
            className="bg-white border-2 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Class Image */}
            <img
              src={classItem.image}
              alt={classItem.title}
              className="w-full h-56 md:h-64 object-cover object-top rounded-lg"
            />

            {/* Class Details */}
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {classItem.title}
              </h3>
              <p className="text-primary-dark font-semibold  text-xl">
                <span className="">Price:</span> ${" "}
                <span className="text-success">{classItem.price}</span>
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-accent">Description:</span>{" "}
                {classItem.description}
              </p>
              <p className="text-gray-600 mt-2">
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={`font-bold ${
                    classItem.status === "Pending"
                      ? "text-warning"
                      : "text-success"
                  }`}
                >
                  {classItem?.status}
                </span>
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2 p-4">
              <button
                onClick={() => handleUpdate(classItem._id)}
                className="flex-1 bg-primary-dark text-white font-medium py-2 rounded-md hover:bg-primary transition-colors"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(classItem._id)}
                className="flex-1 bg-error text-white font-medium py-2 rounded-md hover:bg-error-dark transition-colors"
              >
                Delete
              </button>
              <button
                disabled={classItem.status === "Pending"}
                onClick={() => handleSeeDetails(classItem._id)}
                className="flex-1 bg-info text-white font-medium py-2 rounded-md hover:bg-info-dark transition-colors"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
