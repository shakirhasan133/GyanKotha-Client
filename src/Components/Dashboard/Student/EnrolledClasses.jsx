import { useEffect, useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";

const EnrolledClasses = () => {
  const [classes, setClasses] = useState([]);
  const { isSideMenuOpen } = UseAuth();
  useEffect(() => {
    fetch("/Classes.json")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${
        isSideMenuOpen ? "lg:grid-cols-3" : "lg:grid-cols-4"
      } gap-6 p-6 bg-gray-100`}
    >
      {classes.map((classItem, index) => (
        <div
          key={index}
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
            <h3 className="text-lg font-bold text-gray-800">
              {classItem.title}
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              <span className="font-semibold text-gray-600">Posted by:</span>{" "}
              {classItem.name}
            </p>
          </div>

          {/* Continue Button */}
          <div className="p-4">
            <button className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium py-2 rounded-lg hover:from-teal-400 hover:to-blue-500 transition-colors duration-200">
              Continue
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnrolledClasses;
