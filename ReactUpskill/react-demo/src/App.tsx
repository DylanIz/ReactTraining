import { useEffect, useState } from "react";
import "./App.css";
import CallbackThree from "./Components/CallbackThree";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <>
      <div className="app-container">
        <CallbackThree></CallbackThree>
      </div>
    </>
  );
};

export default App;
