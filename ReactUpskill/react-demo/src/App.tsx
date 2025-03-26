import { createContext } from "react";
import "./App.css";
import DarkMode from "./Components/DarkMode";
import PropDrillA from "./Components/PropDrillA";

export const Data = createContext("John Doe");
export const Data1 = createContext(99);

const App = () => {
  const name = "Dylan";
  const age = 27;
  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
        <div className="app-container">
          <PropDrillA />
          <DarkMode />
        </div>
        </Data1.Provider>
      </Data.Provider>
    </>
  );
};

export default App;
