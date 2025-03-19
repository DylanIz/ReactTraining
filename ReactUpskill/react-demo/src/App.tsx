import { useEffect, useState } from "react";
import "./App.css";
import CallbackTwo from "./Components/CallbackTwo";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <>
      <div className="app-container">
        <CallbackTwo></CallbackTwo>
      </div>
    </>
  );
};

export default App;
