import { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <>
      <div className="app-container">
        <h1 style={{ color: "red", backgroundColor: "blue", padding: "2rem" }}>
          Inline Style
        </h1>
      </div>
    </>
  );
};

export default App;
