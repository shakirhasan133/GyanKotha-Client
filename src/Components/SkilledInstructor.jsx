/* eslint-disable react/no-unescaped-entities */
import { FaStar } from "react-icons/fa";

const instructors = [
  {
    id: 1,
    name: "Margarita James",
    qualification: "MSC, Instructor",
    rating: 4.9,
    image: "https://via.placeholder.com/100", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Mitchell Colon",
    qualification: "BBA, Instructor",
    rating: 4.9,
    image: "https://via.placeholder.com/100", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Sonya Gordon",
    qualification: "MBA, Instructor",
    rating: 4.9,
    image: "https://via.placeholder.com/100", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Archie Neal",
    qualification: "BBS, Instructor",
    rating: 4.9,
    image: "https://via.placeholder.com/100", // Replace with actual image URL
  },
  {
    id: 5,
    name: "Randal Ramsey",
    qualification: "MBBS, Instructor",
    rating: 4.9,
    image: "https://via.placeholder.com/100", // Replace with actual image URL
  },
];

const SkilledInstructor = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h3 className="text-sm text-gray-500 font-semibold">Team Member's</h3>
        <h2 className="text-3xl md:text-4xl font-bold py-2">
          GyanKotha Skilled <span className="text-primary">Instructor</span>
        </h2>

        {/* Instructors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className=" p-6 text-center transform hover:scale-105 transition-transform duration-300 hover:border-primary hover:border hover:rounded-lg hover:bg-light"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{instructor.name}</h3>
              <p className="text-gray-600">{instructor.qualification}</p>
              <div className="flex items-center justify-center mt-2 text-yellow-500">
                <FaStar />
                <span className="ml-1">{instructor.rating} (rating)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkilledInstructor;
