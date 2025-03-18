import { useEffect, useState } from "react";
import "./App.css";

type ButtonProps = {
  count: number;
  onIncrement: () => void;
};

const Button = ({ count, onIncrement }: ButtonProps) => {
  return <button onClick={onIncrement}>{count}</button>;
};

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <>
      <div className="app-container">
        <Button count={count} onIncrement={() => setCount(count + 1)} />
      </div>
    </>
  );
};

export default App;
