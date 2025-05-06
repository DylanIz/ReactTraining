import React from "react";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className="btns" value="" onClick={handleClick}>
            All
          </button>
          <button className="btns" value="Nike" onClick={handleClick}>
            Nike
          </button>
          <button className="btns" value="Adidas" onClick={handleClick}>
            Adidas
          </button>
          <button className="btns" value="Puma" onClick={handleClick}>
            Puma
          </button>
          <button className="btns" value="Converse" onClick={handleClick}>
            Converse
          </button>
          <button className="btns" value="Vans" onClick={handleClick}>
            Vans
          </button>
        </div>
      </div>
    </>
  );
};

export default Recommended;
