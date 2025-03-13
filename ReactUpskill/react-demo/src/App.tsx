import { useEffect } from "react";
import "./App.css";
import User from "./Components/User";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <div className="app-container">
      <User name="John Doe" age={30} />
    </div>
  );
};

export default App;
