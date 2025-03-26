import { createContext } from "react";
import "./App.css";
import DarkMode from "./Components/DarkMode";
import PropDrillA from "./Components/PropDrillA";

export const Data = createContext("John Doe");

const App = () => {
  const name = "Dylan";
  return (
    <>
      <Data.Provider value={name}>
        <div className="app-container">
          <PropDrillA />
          <DarkMode />
        </div>
      </Data.Provider>
    </>
  );
};

export default App;
