import { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return <div>BasicEffect</div>;
};

export default BasicEffect;
