import "./App.css";
import DarkMode from "./Components/DarkMode";
import DebounceExample from "./Components/DebounceExample";

const App = () => {
  return (
    <>
      <div className="app-container">
        <DebounceExample />
        <DarkMode />
      </div>
    </>
  );
};

export default App;
