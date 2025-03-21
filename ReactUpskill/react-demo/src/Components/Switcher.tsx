import React from "react";

const Switcher = () => {
  const [sw, setSw] = React.useState(false);
  return (
    <div>
      {sw ? <span>On</span> : <span>Off</span>}
      <br />
      <input type="button" value="Switch" onClick={() => setSw((s) => !s)} />
    </div>
  );
};

export default Switcher;
