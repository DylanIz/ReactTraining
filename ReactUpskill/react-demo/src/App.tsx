import { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  const styles = {
    color: "red",
    backgroundColor: "blue",
    padding: "2rem",
  };

  return (
    <>
      <div className="app-container">
        <h1 style={styles}>Inline Style</h1>
      </div>
    </>
  );
};

export default App;
