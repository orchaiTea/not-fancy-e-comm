import React, { useEffect } from "react";

const Alert = ({ children, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white border border-gray-300 shadow-lg rounded p-4 mx-auto max-w-sm z-50 animate-slideIn">
      <span
        className="absolute top-0 right-0 mr-2 mt-1 text-gray-600 cursor-pointer"
        onClick={onClose}
      >
        &times;
      </span>
      <p className="text-lg text-gray-800">{children}</p>
    </div>
  );
};

export default Alert;
