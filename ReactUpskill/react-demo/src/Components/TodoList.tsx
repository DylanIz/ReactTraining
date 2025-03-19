import React from "react";

type Props = {};

const TodoList = (props: Props) => {
  const [todos, setTodos] = React.useState<string[]>([]);
  const [input, setInput] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter your todo"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add ToDo</button>
        <button onClick={() => setTodos([])}>Clear All</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
