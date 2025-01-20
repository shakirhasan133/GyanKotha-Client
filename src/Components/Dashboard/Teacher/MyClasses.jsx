import UseAuth from "../../../Hooks/UseAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import LoadingPage from "../../../Pages/LoadingPage";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyClasses = () => {
  const { user, isSideMenuOpen } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();

  const {
    data: Classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["TeacherClass", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/allClasses?email=${user?.email}`);
      return data;
    },
  });

  // Delete Data
  const DeleteClassData = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/deleteClass/${id}`);
      return data;
    },
    onSuccess: (data) => {
      // console.log(data);
      if (data.acknowledged) {
        Swal.fire({
          title: "Success",
          text: "Class Deleted successfully",
          icon: "success",
        });
      }
      refetch();
    },
    onError: (error) => {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: "Something went wrong !",
        icon: "error",
      });
    },
  });

  const handleUpdate = (id) => {
    navigate(`/dashboard/update-class/${id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteClassData.mutate(id);
      }
    });
  };

  const handleSeeDetails = (id) => {
    navigate(`/dashboard/teacher-class-details/${id}`);
  };

  if (isLoading) {
    return <LoadingPage></LoadingPage>;
  }

  return (
    <div className="min-h-screen bg-bodyColor-light p-6">
      <h1 className="text-3xl font-bold text-primary-dark mb-8 text-center">
        My Classes
      </h1>
      <div
        className={`${
          isSideMenuOpen ? "lg:grid-cols-2" : "lg:grid-cols-3"
        } grid grid-cols-1 md:grid-cols-2  gap-6`}
      >
        {Classes.map((classItem) => (
          <div
            key={classItem.id}
            className="relative flex flex-col justify-between py-4 bg-white border-2 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              {/* Class Image */}
              <div className="px-4 rounded-lg">
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  className=" w-full h-56 md:h-64 object-cover object-top rounded-lg"
                />
              </div>

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
                  <span className="font-semibold text-accent">
                    Description:
                  </span>{" "}
                  {classItem.description && classItem.description.slice(60)}...
                </p>
                <p className=" mt-2 absolute top-2 right-4 bg-primary-darkest rounded-md text-white p-1">
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
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 px-4">
              <div className="flex items-center justify-center gap-2">
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
              </div>
              <button
                disabled={classItem.status === "Pending"}
                onClick={() => handleSeeDetails(classItem._id)}
                className="flex-1 btn bg-info text-white font-medium py-2 rounded-md hover:bg-info-dark transition-colors"
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
