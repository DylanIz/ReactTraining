import "./App.css";
import DarkMode from "./Components/DarkMode";
import PropDrillA from "./Components/PropDrillA";

const App = () => {
  const name = "Dylan";
  return (
    <>
      <div className="app-container">
        <PropDrillA name={name} />
        <DarkMode />
      </div>
    </>
  );
};

export default App;
