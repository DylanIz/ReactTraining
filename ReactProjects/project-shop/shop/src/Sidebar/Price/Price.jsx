import React from "react";
import "./Price.css";
import Input from "../../components/Input";

const Price = ({ handleInputChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test2" value="" />
          <span className="checkmark"></span>
          All
        </label>
        <Input
          handleInputChange={handleInputChange}
          title="50$ - 100$"
          value="50 - 100"
          name="test2"
        />
        <Input
          handleInputChange={handleInputChange}
          title="100$ - 150$"
          value="100 - 150"
          name="test2"
        />
        <Input
          handleInputChange={handleInputChange}
          title="150$ - 200$"
          value="150 - 200"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Price;
