import React from "react";

const Button = ({ handleClick, value, title }) => {
  return (
    <div>
      <button className="btns" value={value} onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
