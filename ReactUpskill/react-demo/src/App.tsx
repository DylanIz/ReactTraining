import { useEffect } from "react";
import "./App.css";
import NumberList from "./Components/NumberList";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <div className="app-container">
      <NumberList />
    </div>
  );
};

export default App;
