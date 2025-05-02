import React from "react";
import "./Colours.css";
import Input from "../../components/Input";

const Colors = ({ handleInputChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input
            onChange={handleInputChange}
            type="radio"
            value=""
            name="test1"
          />
          <span className="checkmark all"></span>
          All
        </label>
        <Input
          handleInputChange={handleInputChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />
        <Input
          handleInputChange={handleInputChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />
        <Input
          handleInputChange={handleInputChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />
        <Input
          handleInputChange={handleInputChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
        //ToDo fix positioning of white checkbox as it doesnt match others
        <label className="sidebar-label-container white-checkbox">
          <input
            onChange={handleInputChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;
