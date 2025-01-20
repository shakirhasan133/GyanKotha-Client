import UseAuth from "../../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import LoadingPage from "../../../Pages/LoadingPage";
import { useNavigate } from "react-router-dom";

const EnrolledClasses = () => {
  const { isSideMenuOpen } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const navigate = useNavigate();

  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["StudentEnrolledClass", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/my-enrolled-class/${user?.email}`);
      // return data[0].MyEnrolledClass;
      return data;
    },
  });

  console.log(classes);

  const handleContinue = (id) => {
    navigate(`/dashboard/my-enroll-class-details/${id}`);
  };

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  if (classes.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <h1 className="text-primary-dark font-bold md:text-3xl text-xl">
          No Data Found
        </h1>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${
        isSideMenuOpen ? "lg:grid-cols-3" : "lg:grid-cols-4"
      } gap-6 p-6 bg-gray-100`}
    >
      {/* {classes === null && <h1>No Data found</h1>} */}
      {classes?.map((classItem, index) => (
        <div
          key={index}
          className="bg-white flex flex-col justify-between shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div>
            {/* Class Image */}
            <img
              src={classItem.MyEnrolledClass.image}
              alt={classItem.MyEnrolledClass.title}
              className="w-full h-40 object-cover"
            />

            {/* Class Details */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">
                {classItem.MyEnrolledClass.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                <span className="font-semibold text-gray-600">Posted by:</span>{" "}
                {classItem.MyEnrolledClass.name}
              </p>
            </div>
          </div>

          {/* Continue Button */}
          <div className="p-4">
            <button
              className="w-full bg-gradient-to-r from-primary to-primary-darkest text-white font-medium py-2 rounded-lg hover:from-primary hover:to-primary-dark transition-colors duration-200"
              onClick={() => handleContinue(classItem.MyEnrolledClass._id)}
            >
              Continue
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnrolledClasses;
