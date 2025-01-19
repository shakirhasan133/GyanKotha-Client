import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Button = ({
  label,
  onClick,
  filled = false,
  address,
  overLapingClass,
}) => {
  return (
    <div className={`${overLapingClass}`}>
      <Link
        to={address}
        className={` ${
          filled ? "bg-primary text-light" : "border-primary text-primary "
        } px-3 py-2 rounded-md font-semibold `}
        onClick={onClick}
      >
        {label}
      </Link>
    </div>
  );
};

export default Button;
