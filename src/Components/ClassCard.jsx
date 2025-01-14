/* eslint-disable react/prop-types */
const ClassCard = ({ classData }) => {
  return (
    <div className="bg-white border rounded-lg p-6 shadow-lg mx-2 min-h-[450px] hover:shadow-xl hover:scale-105 transition-transform duration-300">
      {/* Course Image */}
      <img
        src={classData.image}
        alt={classData.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* Course Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {classData.title}
      </h3>

      {/* Instructor Info */}
      <div className="flex items-center mb-3">
        <img
          src="https://via.placeholder.com/40"
          alt={classData.name}
          className="w-12 h-12 rounded-full border border-gray-300 mr-3"
        />
        <div>
          <h4 className="text-md font-medium text-gray-800">
            {classData.name}
          </h4>
          <span className="text-sm text-gray-500">{classData.email}</span>
        </div>
      </div>

      {/* Course Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
        {classData.description}
      </p>

      {/* Footer with Price and Button */}
      <div className="flex justify-between items-center mt-auto">
        <span className="text-lg text-green-500 font-semibold">
          ${classData.price}
        </span>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-all">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
