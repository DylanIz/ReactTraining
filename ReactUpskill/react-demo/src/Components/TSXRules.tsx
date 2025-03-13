import React from "react";

type Props = {};

const TSXRules = (props: Props) => {
  return (
    <div>
      <h1>TSX Rules</h1>
      <p>TSX must return a single parent element.</p>
      <p>TSX elements must be properly closed</p>
      <p>TSX attributes are written using camelCase e.g className</p>
    </div>
  );
};

export default TSXRules;
