import { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <>
      <div className="app-container">
      </div>
    </>
  );
};

export default App;
