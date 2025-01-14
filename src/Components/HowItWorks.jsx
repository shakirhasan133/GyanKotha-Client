import { FaSearch, FaChair, FaCertificate } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <div className="md:mb-5">
          <h3 className="text-sm text-gray-500 font-semibold">
            Over 1,235+ Courses
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold py-2">
            How It <span className="text-primary">Works?</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Step 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 space-y-4 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-primary bg-primary/10 p-4 rounded-full inline-block">
              <FaSearch className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold">Find Your Course</h3>
            <p className="text-gray-600">
              It has survived not only centuries but also the leap into
              electronic.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 space-y-4 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-primary bg-primary/10 p-4 rounded-full inline-block">
              <FaChair className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold">Book A Seat</h3>
            <p className="text-gray-600">
              It has survived not only centuries but also the leap into
              electronic.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 space-y-4 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-primary bg-primary/10 p-4 rounded-full inline-block">
              <FaCertificate className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold">Get Certificate</h3>
            <p className="text-gray-600">
              It has survived not only centuries but also the leap into
              electronic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
