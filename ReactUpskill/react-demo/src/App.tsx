import "./App.css";
import DarkMode from "./Components/DarkMode";
import Counter from "./Components/Counter";

const App = () => {
  return (
    <>
      <div className="app-container">
        <DarkMode />
        <Counter />
      </div>
    </>
  );
};

export default App;
