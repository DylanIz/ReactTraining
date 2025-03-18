import { useEffect, useState } from "react";
import "./App.css";

type ButtonProps = {
  count: number;
  onIncrement: () => void;
};

const Button = ({ count, onIncrement }: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "4px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        transition: "background-color 0.3s",
      }}
      onClick={onIncrement}
    >
      {count}
    </button>
  );
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
