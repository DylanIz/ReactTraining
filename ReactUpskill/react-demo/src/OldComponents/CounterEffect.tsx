import { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = "CounterEffect" + count;
  }, [count]);
  return (
    <div>
      <h1>CounterEffect: {count}</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default CounterEffect;
