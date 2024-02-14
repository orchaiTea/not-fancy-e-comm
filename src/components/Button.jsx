import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-rose-600",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
