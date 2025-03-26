import { useEffect, useState } from "react";
import "./App.css";
import DarkMode from "./Components/DarkMode";

const App = () => {
  const [data, setData] = useState([]);

  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

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
    getData();
  }, [data]);

  return (
    <>
      <div className="app-container">
        <DarkMode />
        <ul>
          {data.map((todo: Todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
