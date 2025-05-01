import React from "react";

const Input = ({ title }) => {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name="test2" />
      <span className="checkmark"></span>
      {title}
    </label>
  );
};

export default Input;
