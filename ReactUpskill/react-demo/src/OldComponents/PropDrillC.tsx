import React, { useContext } from "react";
import { Data } from "../App";
import { Data1 } from "../App";

const PropDrillC = () => {
  const name = useContext(Data);
  const age = useContext(Data1);
  return (
    <h1>
      My name is {name} and my age is {age}
    </h1>
  );
};

export default PropDrillC;
