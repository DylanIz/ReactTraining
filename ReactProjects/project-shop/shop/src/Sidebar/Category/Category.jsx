import React from "react";
import "./Category.css";
import Input from "../../components/Input";
const Category = ({ handleInputChange }) => {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" value="" />
          <span className="checkmark"></span>
          All
        </label>
        <div>
          <Input
            handleInputChange={handleInputChange}
            title="Sneakers"
            value="sneakers"
            name="test"
          />
          <Input
            handleInputChange={handleInputChange}
            title="Flats"
            value="flats"
            name="test"
          />
          <Input
            handleInputChange={handleInputChange}
            title="Boots"
            value="boots"
            name="test"
          />
          <Input
            handleInputChange={handleInputChange}
            title="Sandals"
            value="sandals"
            name="test"
          />
        </div>
      </div>
    </>
  );
};

export default Category;
