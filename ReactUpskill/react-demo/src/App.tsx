import WelcomeMessage from "./Components/WelcomeMessage";
import { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <div className="app-container">
      <WelcomeMessage />
    </div>
  );
};

export default App;
