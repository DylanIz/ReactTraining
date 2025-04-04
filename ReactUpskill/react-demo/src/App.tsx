import "./App.css";
import DarkMode from "./Components/DarkMode";
import UniqueId from "./Components/UniqueId";

const App = () => {
  return (
    <>
      <div className="app-container">
        <DarkMode />
        <UniqueId />
      </div>
    </>
  );
};

export default App;
