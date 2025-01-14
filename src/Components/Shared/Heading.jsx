/* eslint-disable react/prop-types */
const Heading = ({ Heading, subHeading, HeadingSpan }) => {
  return (
    <div className="pt-5 text-center">
      <h3 className="text-sm text-gray-500 font-semibold">{subHeading}</h3>
      <h1 className="text-3xl md:text-4xl font-bold py-2 ">
        {Heading} <span className="text-primary">{HeadingSpan}</span>
      </h1>
    </div>
  );
};

export default Heading;
