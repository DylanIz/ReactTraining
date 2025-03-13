import { useEffect } from "react";
import "./App.css";
import Greeting from "./Components/Greeting";
import ProductInfo from "./Components/ProductInfo";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <div className="app-container">
      <Greeting />
      <ProductInfo />
    </div>
  );
};

export default App;
