import React from "react";
import "./Price.css";

const Price = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>
        50$ - 100$
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>
        100$ - 150$
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>
        150$ - 200$
      </label>
    </div>
  );
};

export default Price;
