import { useEffect, useState } from "react";
import "./App.css";
import DarkMode from "./Components/DarkMode";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      if (data && data.length) {
        setData(data);
      }
    }
  }, [data]);

  return (
    <>
      <div className="app-container">
        <DarkMode />
      </div>
    </>
  );
};

export default App;
