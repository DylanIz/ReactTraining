import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";
import TodoList from "./Components/TodoList";
import Profile from "./Components/Profile";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <>
      <div className="app-container">
        <Counter />
        <TodoList />
        <Profile />
      </div>
    </>
  );
};

export default App;
