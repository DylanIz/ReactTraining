import { useEffect, useState } from "react";
import "./App.css";
import Callback from "./Components/Callback";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <>
      <div className="app-container">
        <Callback></Callback>
      </div>
    </>
  );
};

export default App;
