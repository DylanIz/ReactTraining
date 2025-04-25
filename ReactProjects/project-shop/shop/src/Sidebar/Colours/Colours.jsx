import React from "react";
import "./Colours.css";

const Colours = () => {
  return (
    <div className="ml">
      <label className="sidebar-label-container color-title">
        <input type="radio" name="test3" />
        <span className="checkmark"></span>
        Black
      </label>

      <label className="sidebar-label-container color-title">
        <input type="radio" name="test3" />
        <span className="checkmark"></span>
        Blue
      </label>

      <label className="sidebar-label-container color-title">
        <input type="radio" name="test3" />
        <span className="checkmark"></span>
        Red
      </label>
    </div>
  );
};

export default Colours;
