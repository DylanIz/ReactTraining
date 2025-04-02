import { useReducer } from "react";
import "./App.css";
import DarkMode from "./Components/DarkMode";

const initialState = {
  count: 0,
};

const reducer = (state: { count: number }, action: { type: string }) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return initialState;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="app-container">
        <DarkMode />
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <p>Count: {state.count}</p>
      </div>
    </>
  );
};

export default App;
