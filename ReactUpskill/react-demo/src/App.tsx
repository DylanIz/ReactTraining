import { useEffect } from "react";
import "./App.css";
import Switcher from "./Components/Switcher";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <>
      <div className="app-container">
        <Switcher />
      </div>
    </>
  );
};

export default App;
