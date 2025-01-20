import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllClassData = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["ClassDataAmin"],
    queryFn: async () => {
      const { data } = await axiosSecure("/allClasses");
      return data;
    },
  });

  // console.log(classes);

  const handleApprove = async (id) => {
    try {
      const { data } = await axiosSecure.patch(`/update-class-status/${id}`, {
        request: "Approve",
      });

      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success",
          text: "Status Updated Successfully",
          icon: "success",
        });
        refetch();
      } else {
        Swal.fire({
          title: "error",
          text: "Something went wrong",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);

      Swal.fire({
        title: "error",
        text: "Something went wrong",
        icon: "error",
      });
    }
  };

  const handleReject = async (id) => {
    try {
      const { data } = await axiosSecure.patch(`/update-class-status/${id}`, {
        request: "Reject",
      });
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success",
          text: "Status Updated Successfully",
          icon: "success",
        });
        refetch();
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "error",
        text: "Something went wrong",
        icon: "error",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/deleteClassAdmin/${id}`);
      if (data.deletedCount > 0) {
        Swal.fire({
          title: "Success",
          text: "Status Updated Successfully",
          icon: "success",
        });
        refetch();
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "error",
        text: "Something went wrong",
        icon: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-bodyColor-light p-6">
      <h1 className="text-3xl font-bold text-primary-dark mb-8 text-center">
        All Classes
      </h1>

      {/* Table Layout for Larger Devices */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-primary-dark text-white">
            <tr>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-center">Actions</th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr
                key={classItem._id}
                className="border-t hover:bg-bodyColor-soft transition-colors"
              >
                <td className="py-3 px-4">{classItem.title}</td>
                <td className="py-3 px-4">
                  <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4">{classItem.email}</td>

                <td className="py-3 px-4 text-sm text-muted">
                  {classItem.description && (
                    <span>{classItem?.description.slice(0, 50)}...</span>
                  )}
                </td>

                <td className="py-3 px-4 text-center space-x-2">
                  {classItem.status === "Approved" ? (
                    <div className="flex items-center justify-end">
                      <button
                        className="bg-error  flex justify-end text-white px-4 py-2 rounded-md hover:bg-error-dark transition-colors"
                        onClick={() => handleDelete(classItem._id)}
                      >
                        <MdDeleteForever></MdDeleteForever>
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-center items-center space-x-2">
                      <button
                        onClick={() => handleApprove(classItem._id)}
                        className="bg-success text-white px-4 py-2 rounded-md hover:bg-success-dark transition-colors"
                      >
                        <FaCheck />
                      </button>
                      <button
                        onClick={() => handleReject(classItem._id)}
                        className="bg-error text-white px-4 py-2 rounded-md hover:bg-error-dark transition-colors"
                      >
                        <RxCross1 />
                      </button>
                    </div>
                  )}
                </td>
                <td className="py-3 px-4 text-center">
                  <span
                    className={`font-medium px-3 py-1 rounded ${
                      classItem.status === "approved"
                        ? "bg-success-light text-success-dark"
                        : classItem.status === "Rejected"
                        ? "bg-error-light text-error-dark"
                        : "bg-warning-light text-warning-dark"
                    }`}
                  >
                    {classItem.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClassData;
