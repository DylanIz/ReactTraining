import { useEffect } from "react";
import "./App.css";
import Person from "./Components/Person";
import Products from "./Components/Products";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <div className="app-container">
      <Person name="Dylan" age={27}></Person>
      <Products name="Laptop" price={1000}></Products>
    </div>
  );
};

export default App;
