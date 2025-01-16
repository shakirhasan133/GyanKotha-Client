import { useEffect, useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";

const MyClasses = () => {
  const { user } = UseAuth(); // Assuming 'user' contains teacher's info
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch classes created by the teacher
    fetch("/Classes.json")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, [user.email]);

  const handleUpdate = (id) => {
    console.log("Update class with ID:", id);
    alert("Update functionality not implemented yet.");
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this class?"
    );
    if (confirmed) {
      setClasses(classes.filter((classItem) => classItem.id !== id));
      alert("Class deleted successfully.");
    }
  };

  const handleSeeDetails = (id) => {
    console.log("See details of class with ID:", id);
    alert("See Details functionality not implemented yet.");
  };

  return (
    <div className="min-h-screen bg-bodyColor-light p-6">
      <h1 className="text-3xl font-bold text-primary-dark mb-8 text-center">
        My Classes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Class Image */}
            <img
              src={classItem.image}
              alt={classItem.title}
              className="w-full h-40 object-cover"
            />

            {/* Class Details */}
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {classItem.title}
              </h3>
              <p className="text-gray-600">
                <span className="font-semibold">Name:</span> {user.name}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Price:</span> ${classItem.price}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Description:</span>{" "}
                {classItem.description}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Status:</span>{" "}
                <span
                  className={`font-bold ${
                    classItem.status === "Pending"
                      ? "text-warning"
                      : "text-success"
                  }`}
                >
                  {classItem.status || "Pending"}
                </span>
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-2 p-4">
              <button
                onClick={() => handleUpdate(classItem.id)}
                className="flex-1 bg-primary-dark text-white font-medium py-2 rounded-md hover:bg-primary transition-colors"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(classItem.id)}
                className="flex-1 bg-error text-white font-medium py-2 rounded-md hover:bg-error-dark transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() => handleSeeDetails(classItem.id)}
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
