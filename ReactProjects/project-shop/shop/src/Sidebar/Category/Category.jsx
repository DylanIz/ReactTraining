import React from "react";
import "./Category.css";
import Input from "../../components/Input";
const Category = () => {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <Input title="Sneakers" />
        <Input title="Flats" />
        <Input title="Boots" />
        <Input title="Sandals" />
      </div>
    </>
  );
};

export default Category;
