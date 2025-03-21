import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [removeDarkMode, setRemoveDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.add("dark-mode");
    if (removeDarkMode) {
      document.body.classList.remove("dark-mode");
    }
  }, [removeDarkMode]);

  return (
    <>
      <div className="app-container">
        <button
          onClick={() => setRemoveDarkMode(true)}
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
          }}
        >
          RemoveDarkmode
        </button>
      </div>
    </>
  );
};

export default App;
