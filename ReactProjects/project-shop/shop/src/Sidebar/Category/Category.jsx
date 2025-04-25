import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark">Sneakers</span>
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark">Flats</span>
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark">Boots</span>
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark">Sandals</span>
        </label>
      </div>
    </>
  );
};

export default Category;
