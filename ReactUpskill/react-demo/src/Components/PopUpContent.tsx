import React from "react";

type Props = {
  copied: boolean;
};

const PopUpContent = ({ copied }: Props) => {
  return (
    <section style={{ position: "absolute", bottom: "3rem" }}>
      {copied && <div>Copied to clipboard.</div>}
    </section>
  );
};

export default PopUpContent;
