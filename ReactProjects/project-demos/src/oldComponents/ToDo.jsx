import { useState } from "react";
import "../styles.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input === "") {
      return;
    }

    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: Math.floor(Math.random() * 10),
      });
    });
    setInput("");
  };

  const handleDelete = (id) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => handleDelete(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
