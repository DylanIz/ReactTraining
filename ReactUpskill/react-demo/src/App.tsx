import { useEffect } from "react";
import "./App.css";
import CopyInput from "./Components/CopyInput";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <>
      <div className="app-container">
        {" "}
        <CopyInput />
      </div>
    </>
  );
};

export default App;
