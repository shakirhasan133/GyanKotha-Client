import { useEffect, useState } from "react";

const TeacherRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch all teacher requests
    fetch("/TeacherRequests.json")
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);

  const handleApprove = (id) => {
    console.log("Approved request with ID:", id);
    alert("Teacher request approved!");
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "Approved" } : req))
    );
  };

  const handleReject = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to reject this request?"
    );
    if (confirmed) {
      console.log("Rejected request with ID:", id);
      alert("Teacher request rejected!");
      setRequests((prev) =>
        prev.map((req) =>
          req.id === id ? { ...req, status: "Rejected" } : req
        )
      );
    }
  };

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
            {requests.map((request) => (
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
                <td className="py-3 px-4">{request.title}</td>
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
