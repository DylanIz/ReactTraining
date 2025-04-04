import "./App.css";
import DarkMode from "./Components/DarkMode";
import FocusInput from "./Components/FocusInput";
import Timer from "./Components/Timer";

const App = () => {
  return (
    <>
      <div className="app-container">
        <FocusInput />
        <DarkMode />
        <Timer />
      </div>
    </>
  );
};

export default App;
