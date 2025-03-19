import React from "react";

type Props = {
  count: number;
  onClickHandler: () => void;
};

const Decrement = ({ count, onClickHandler }: Props) => {
  return (
    <div>
      <button onClick={onClickHandler}>Decrement: {count}</button>
    </div>
  );
};

export default Decrement;
