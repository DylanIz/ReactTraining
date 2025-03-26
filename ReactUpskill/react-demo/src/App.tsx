import "./App.css";
import BasicEffect from "./Components/BasicEffect";
import CounterEffect from "./Components/CounterEffect";
import DarkMode from "./Components/DarkMode";
import FetchDataEffect from "./Components/FetchDataEffect";

const App = () => {
  return (
    <>
      <div className="app-container">
        <BasicEffect />
        <CounterEffect />
        <FetchDataEffect />
        <DarkMode />
      </div>
    </>
  );
};

export default App;
