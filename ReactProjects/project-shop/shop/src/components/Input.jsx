import React from "react";

const Input = ({ handleInputChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleInputChange}
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
