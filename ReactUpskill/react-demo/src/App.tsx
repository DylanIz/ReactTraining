import { useEffect, useState } from "react";
import "./App.css";
import Increment from "./Components/Increment";
import Decrement from "./Components/Decrement";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app-container">
        <Increment count={count} onClickHandler={() => setCount(count + 1)} />
        <Decrement count={count} onClickHandler={() => setCount(count - 1)} />
      </div>
    </>
  );
};

export default App;
