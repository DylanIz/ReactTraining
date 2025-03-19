import { useState } from "react";

type Props = {};

const Callback = (props: Props) => {
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Callback;
