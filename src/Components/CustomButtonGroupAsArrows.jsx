/* eslint-disable react/prop-types */

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div className="custom-button-group  flex items-center justify-center gap-4">
      <button onClick={previous} className="custom-prev text-3xl">
        <FaArrowAltCircleLeft className="text-primary" />
      </button>
      <button onClick={next} className="custom-next text-3xl">
        <FaArrowAltCircleRight className="text-primary" />
      </button>
    </div>
  );
};

export default CustomButtonGroupAsArrows;
