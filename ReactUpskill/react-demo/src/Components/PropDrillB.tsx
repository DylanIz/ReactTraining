import React from "react";
import PropDrillC from "./PropDrillC";

type Props = {
  name: string;
};

const PropDrillB = ({name}: Props) => {
  return (
    <div>
      <PropDrillC name={name} />
    </div>
  );
};

export default PropDrillB;
