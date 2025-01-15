import { useEffect, useState } from "react";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);

  // Fetch approved classes
  useEffect(() => {
    fetch("/Classes.json") // Replace with your API endpoint
      .then((res) => res.json())
      .then((data) => {
        const approvedClasses = data.filter((cls) => cls.status === "approved");
        setClasses(approvedClasses);
      })
      .catch((err) => console.error("Error fetching classes:", err));
  }, []);

  console.log(classes);

  return (
    <section className="bg-light py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
          All Classes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes?.map((cls) => (
            <div
              key={cls._id}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow"
            >
              {/* Class Image */}
              <img
                src={cls.image}
                alt={cls.title}
                className="w-full border border-[#00203f] h-56 md:h-64 object-cover rounded-2xl mb-4"
              />
              {/* Title */}
              <h3 className="text-lg font-semibold text-secondary mb-2">
                {cls.title}
              </h3>
              {/* Teacher's Name */}
              <p className="text-sm text-muted mb-2">
                <span className="font-medium">Instructor:</span> {cls.name}
              </p>
              {/* Short Description */}
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {cls.description}
              </p>
              {/* Price and Enrolment */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-primary font-semibold">${cls.price}</span>
                <span className="text-muted text-sm">
                  Enrolled: {cls.totalEnrolment}
                </span>
              </div>
              {/* Enroll Button */}
              <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-all">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
        {classes.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No approved classes available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default AllClasses;
