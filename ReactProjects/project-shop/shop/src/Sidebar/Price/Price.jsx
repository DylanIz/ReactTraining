import React from "react";
import "./Price.css";
import Input from "../../components/Input";
const Price = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <Input title="All" />
      <Input title="50$ - 100$" />
      <Input title="100$ - 150$" />
      <Input title="150$ - 200$" />
    </div>
  );
};

export default Price;
