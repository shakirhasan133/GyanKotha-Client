/* eslint-disable react/prop-types */
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all mx-5 py-10">
      <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden border-4 border-primary mb-4">
        <img
          src={testimonial?.image}
          alt={testimonial?.name}
          className="w-full h-full object-cover"
        />
      </div>
      <FaQuoteLeft className="text-primary-light text-2xl mx-auto mb-2" />
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {testimonial?.message}
      </p>
      <h3 className="text-lg font-semibold text-gray-800">
        {testimonial?.name}
      </h3>
      <p className="text-sm text-primary">{testimonial?.designation}</p>
    </div>
  );
};

export default TestimonialCard;
