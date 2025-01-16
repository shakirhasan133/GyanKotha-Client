import { div } from "motion/react-client";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const AllClassData = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Simulating data fetch
    fetch("/Classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const handleApprove = (id) => {
    console.log(`Approving class with ID: ${id}`);
    setClasses((prev) =>
      prev.map((cls) => (cls._id === id ? { ...cls, status: "Approved" } : cls))
    );
  };

  const handleReject = (id) => {
    console.log(`Rejecting class with ID: ${id}`);
    setClasses((prev) =>
      prev.map((cls) => (cls._id === id ? { ...cls, status: "Rejected" } : cls))
    );
  };

  return (
    <div className="min-h-screen bg-bodyColor-light p-6">
      <h1 className="text-3xl font-bold text-primary-dark mb-8 text-center">
        All Classes
      </h1>

      {/* Table Layout for Larger Devices */}
      <div className="hidden lg:block overflow-x-auto">
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
                  {classItem.description.slice(0, 50)}...
                </td>
                <td className="py-3 px-4 text-center space-x-2">
                  {classItem.status === "approved" ? (
                    <div className="flex items-center justify-end">
                      <button
                        className="bg-error  flex justify-end text-white px-4 py-2 rounded-md hover:bg-error-dark transition-colors"
                        onClick={() => handleReject(classItem._id)}
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
