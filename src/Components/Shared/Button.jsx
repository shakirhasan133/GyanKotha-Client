/* eslint-disable react/prop-types */
const Button = ({ label, onClick, filled = false }) => {
  return (
    <div>
      <button
        className={` ${
          filled ? "bg-primary text-light" : "border-primary text-primary "
        } px-3 py-2 rounded-md font-semibold`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
