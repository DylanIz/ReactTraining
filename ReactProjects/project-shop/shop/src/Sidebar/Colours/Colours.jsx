import React from "react";
import "./Colours.css";
import Input from "../../components/Input";

const Colours = () => {
  return (
    <div className="ml">
      <div className="sidebar-title color-title">
        <h2>Colours</h2>
      </div>
      <Input title="Black" />
      <Input title="Blue" />
      <Input title="Red" />
    </div>
  );
};

export default Colours;
