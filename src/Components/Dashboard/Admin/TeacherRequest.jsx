import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const TeacherRequest = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: requests = [] } = useQuery({
    queryKey: ["teacherRequest"],
    queryFn: async () => {
      const { data } = await axiosSecure("/teachersRequest");
      return data;
    },
  });

  // console.log(requests);

  const handleApprove = (id) => {};

  const handleReject = (id) => {};

  return (
    <div className="min-h-screen bg-bodyColor-light p-6">
      <h1 className="text-3xl font-bold text-primary-dark mb-8 text-center">
        Teacher Requests
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-primary-dark text-white">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Experience</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests?.map((request) => (
              <tr
                key={request.id}
                className="border-t hover:bg-bodyColor-soft transition-colors"
              >
                <td className="py-3 px-4">{request.name}</td>
                <td className="py-3 px-4">
                  <img
                    src={request.image}
                    alt={request.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </td>
                <td className="py-3 px-4">{request.experience} years</td>
                <td className="py-3 px-4">{request.qualification}</td>
                <td className="py-3 px-4">{request.category}</td>
                <td className="py-3 px-4 font-semibold">
                  <span
                    className={`px-2 py-1 rounded-md ${
                      request.status === "Pending"
                        ? "bg-warning text-white"
                        : request.status === "Approved"
                        ? "bg-success text-white"
                        : "bg-error text-white"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-center flex gap-2 justify-center">
                  <button
                    onClick={() => handleApprove(request.id)}
                    className="bg-success text-white px-4 py-2 rounded-md hover:bg-success-dark transition-colors"
                    disabled={request.status !== "Pending"}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(request.id)}
                    className="bg-error text-white px-4 py-2 rounded-md hover:bg-error-dark transition-colors"
                    disabled={request.status !== "Pending"}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {requests.length === 0 && (
          <p className="text-center text-muted-dark mt-4">
            No teacher requests found.
          </p>
        )}
      </div>
    </div>
  );
};

export default TeacherRequest;
