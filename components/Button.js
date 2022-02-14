import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-primary-green px-10 py-2 rounded-xl text-center cursor-pointer hover:opacity-80"
    >
      <b className="text-white">{title}</b>
    </div>
  );
};

export default Button;
