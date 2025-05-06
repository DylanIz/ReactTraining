import React from "react";
import "./Sidebar.css";
import { BsCart } from "react-icons/bs";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colours from "./Colours/Colours";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <BsCart />
          </h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colours handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
