import React from "react";
import { Data } from "../App";

const PropDrillC = () => {
  return (
    <Data.Consumer>
      {(name) => {
        return <h1>My name is {name}</h1>;
      }}
    </Data.Consumer>
  );
};

export default PropDrillC;
