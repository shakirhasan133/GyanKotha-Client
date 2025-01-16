import { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users
    fetch("/Users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleMakeAdmin = (id) => {
    console.log("Making admin:", id);
    alert("User has been granted admin privileges!");
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, role: "Admin" } : user))
    );
  };

  return (
    <div className="min-h-screen bg-bodyColor-light p-6">
      <h1 className="text-3xl font-bold text-primary-dark mb-8 text-center">
        User Management
      </h1>

      <div className="hidden lg:block overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-primary-dark text-white">
            <tr>
              <th className="py-3 px-4 text-left">User Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-bodyColor-soft transition-colors"
              >
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </td>
                <td className="py-3 px-4 text-center">
                  {user.role === "Admin" ? (
                    <span className="text-success font-medium">Admin</span>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user.id)}
                      className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive Card Layout for Smaller Devices */}
      <div className="lg:hidden space-y-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg p-4 space-y-3"
          >
            <div className="flex items-center space-x-4">
              <img
                src={user.image}
                alt={user.name}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold text-primary-dark">
                  {user.name}
                </h3>
                <p className="text-sm text-muted">{user.email}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span
                className={`font-medium ${
                  user.role === "Admin" ? "text-success" : "text-muted-dark"
                }`}
              >
                {user.role}
              </span>
              {user.role !== "Admin" && (
                <button
                  onClick={() => handleMakeAdmin(user.id)}
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
                >
                  Make Admin
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
