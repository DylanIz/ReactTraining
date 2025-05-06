import React from "react";
import "./Category.css";
import Input from "../../components/Input";
const Category = ({ handleChange }) => {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" name="test" value="" />
          <span className="checkmark"></span>
          All
        </label>
        <div>
          <Input
            handleChange={handleChange}
            title="Sneakers"
            value="sneakers"
            name="test"
          />
          <Input
            handleChange={handleChange}
            title="Flats"
            value="flats"
            name="test"
          />
          <Input
            handleChange={handleChange}
            title="Heels"
            value="heels"
            name="test"
          />
          <Input
            handleChange={handleChange}
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
