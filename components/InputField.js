import React from "react";

const InputField = ({ title, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-xl">{title}</label>
      <input
        value={value}
        onChange={onChange}
        className="border-2 rounded-lg px-4 py-1 border-primary-green focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
