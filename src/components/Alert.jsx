import React, { useEffect } from "react";

const Alert = ({ children, onClose, bgColor }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 ${bgColor} border border-gray-300 shadow-lg rounded-lg p-4 mx-auto max-w-sm z-50 animate-slideIn`}
    >
      <span
        className="absolute top-0 right-0 mr-2 mt-1 text-gray-600 cursor-pointer"
        onClick={onClose}
      >
        &times;
      </span>
      <p className="text-lg text-center text-gray-800">{children}</p>
    </div>
  );
};

export default Alert;
