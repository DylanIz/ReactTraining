import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <div className="app-container">
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
          }}
        >
          {darkMode ? "Enable Dark Mode" : "Disable Dark Mode"}
        </button>
      </div>
    </>
  );
};

export default App;
