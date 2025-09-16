import React from "react";

const PrimaryBtn = ({ children, onClick, bg, disabled, className = "" }) => {
  const baseClasses =
    "px-6 py-3 font-semibold rounded-lg transition duration-300 font-roboto";

  const getBackgroundClasses = () => {
    if (disabled) {
      return "bg-gray-400 cursor-not-allowed text-gray-600";
    }

    if (bg === "gradient") {
      return "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white shadow-lg hover:shadow-xl";
    }

    return "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white shadow-lg hover:shadow-xl";
  };

  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${getBackgroundClasses()} ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
