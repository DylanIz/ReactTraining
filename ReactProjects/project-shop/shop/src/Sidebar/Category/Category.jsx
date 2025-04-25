import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>

      <div className="sidebar-items">
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>
          Sneakers
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>
          Flats
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>
          Boots
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span>
          Sandals
        </label>
      </div>
    </>
  );
};

export default Category;
