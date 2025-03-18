import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
};

const IconComponent = ({ icon }: Props) => {
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        padding: "1rem",
        borderRadius: "10px",
        color: "darkgreen",
        fontSize: "30px",
      }}
    >
      <h1>IconComponent</h1>
      <h2>{React.createElement(icon)}</h2>
    </div>
  );
};

export default IconComponent;
