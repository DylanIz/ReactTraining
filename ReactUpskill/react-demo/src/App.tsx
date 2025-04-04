import { useRef } from "react";
import "./App.css";
import DarkMode from "./Components/DarkMode";

const App = () => {
  const inputElement = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputElement.current?.focus();
    inputElement.current!.value = "Dylan";
  };

  return (
    <>
      <div className="app-container">
        <input type="text" ref={inputElement} />
        <button onClick={handleFocus}>Focus</button>
        <DarkMode />
      </div>
    </>
  );
};

export default App;
