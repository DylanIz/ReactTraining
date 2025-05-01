import React from "react";
import "./Products.css";
import Card from "../components/Card";
import { data } from "../db/data";

const Products = () => {
  return (
    <section className="card-container">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </section>
  );
};

export default Products;
