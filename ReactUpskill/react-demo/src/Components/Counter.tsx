import { useReducer, useState } from "react";

const initialState = {
  count: 0,
};

type Action =
  | { type: "increment" | "decrement" | "reset" }
  | { type: "incrementByAmount" | "decrementByAmount"; payload: number };

const reducer = (state: { count: number }, action: Action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "incrementByAmount":
      return { ...state, count: state.count + action.payload };
    case "decrementByAmount":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState(0);

  const handleIncrementByAmount = () => {
    dispatch({ type: "incrementByAmount", payload: input });
  };

  const handleDecrementByAmount = () => {
    dispatch({ type: "decrementByAmount", payload: input });
  };

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(parseInt(e.target.value))}
      />
      <button onClick={handleIncrementByAmount}>Add</button>
      <button onClick={handleDecrementByAmount}>Subtract</button>
      <p>Count: {state.count}</p>
    </div>
  );
};

export default Counter;
