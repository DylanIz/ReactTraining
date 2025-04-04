# Understanding React's useReducer Hook

## Introduction

The `useReducer` hook is one of React's built-in hooks that provides a more sophisticated way to manage state in functional components. It is particularly useful for managing complex state logic that involves multiple sub-values or when the next state depends on the previous one. This documentation provides a comprehensive overview of `useReducer`, its implementation in our project, best practices, and testing strategies.

## Table of Contents

1. [Basic Concepts](#basic-concepts)
2. [Implementation in Our Project](#implementation-in-our-project)
3. [The Reducer Pattern](#the-reducer-pattern)
4. [useReducer vs. useState](#usereducer-vs-usestate)
5. [Advanced Usage Patterns](#advanced-usage-patterns)
6. [Combining with Context](#combining-with-context)
7. [Best Practices](#best-practices)
8. [Performance Considerations](#performance-considerations)
9. [Testing Strategies](#testing-strategies)
10. [Common Pitfalls and Solutions](#common-pitfalls-and-solutions)
11. [References](#references)

## Basic Concepts

### What is a Reducer?

A reducer is a pure function that takes the current state and an action as arguments, and returns a new state. The concept comes from the Redux library but is now available directly in React through the `useReducer` hook.

```typescript
type Reducer<State, Action> = (state: State, action: Action) => State;
```

### The useReducer Hook

The `useReducer` hook is an alternative to `useState` that accepts a reducer function and an initial state:

```typescript
const [state, dispatch] = useReducer(reducer, initialState);
```

- `state`: The current state value
- `dispatch`: A function to dispatch actions to the reducer
- `reducer`: A function that determines how the state should change in response to actions
- `initialState`: The starting state value

## Implementation in Our Project

In our React demo application, we use the `useReducer` hook in the `Counter` component:

```typescript
// Components/Counter.tsx
import { useReducer } from "react";

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

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <p>Count: {state.count}</p>
    </div>
  );
};

export default Counter;
```

### Breaking Down the Implementation

1. **Initial State**:

   ```typescript
   const initialState = {
     count: 0,
   };
   ```

   This defines the starting state for our counter, with a single property `count` initialized to 0.

2. **Reducer Function**:

   ```typescript
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
   ```

   The reducer function takes the current state and an action, then returns the new state based on the action type.

   - For "increment", it increases the count by 1
   - For "decrement", it decreases the count by 1
   - For any other action, it resets to the initial state

3. **Using useReducer**:

   ```typescript
   const [state, dispatch] = useReducer(reducer, initialState);
   ```

   This initializes the state management with our reducer and initial state.

4. **Dispatching Actions**:

   ```typescript
   <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
   ```

   The `dispatch` function is used to send actions to the reducer. Each action contains a type property that the reducer uses to determine how to update the state.

## The Reducer Pattern

The reducer pattern is inspired by functional programming and follows these principles:

### 1. Pure Functions

Reducers should be pure functions, meaning they:

- Do not modify the existing state
- Do not have side effects
- Return a new state object
- Produce the same output for the same input

```typescript
// ✅ Good: Pure reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 }; // Returns new state object
    default:
      return state;
  }
};

// ❌ Bad: Impure reducer
const impureReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      state.count += 1; // Modifies existing state
      return state;
    default:
      return state;
  }
};
```

### 2. Action Structure

Actions should be descriptive objects that include a `type` property and optional payload:

```typescript
// Simple action
{ type: "increment" }

// Action with payload
{ type: "incrementByAmount", payload: 5 }

// Action with multiple data points
{ type: "updateUser", payload: { id: 1, name: "John" } }
```

In our project, we define our Action type using TypeScript discriminated unions:

```typescript
type Action =
  | { type: "increment" | "decrement" | "reset" }
  | { type: "incrementByAmount" | "decrementByAmount"; payload: number };
```

This approach ensures type safety by:

- Making certain action types not require a payload
- Requiring specific payload types for actions that need them
- Providing autocomplete and type checking during development

### 2.1 Working with Payloads

Payloads are the data that actions carry to the reducer. They can be of any type and structure, depending on the needs of your application:

```typescript
// Simple value payload
dispatch({ type: "incrementByAmount", payload: 5 });

// Object payload
dispatch({
  type: "updateUser",
  payload: {
    id: 1,
    name: "John",
    email: "john@example.com",
  },
});

// Array payload
dispatch({
  type: "setItems",
  payload: [1, 2, 3, 4, 5],
});

// Function payload (though this should be used carefully)
dispatch({
  type: "transform",
  payload: (value) => value * 2,
});
```

The reducer uses the payload to calculate the next state:

```typescript
case "incrementByAmount":
  return { ...state, count: state.count + action.payload };

case "updateUser":
  return {
    ...state,
    user: {
      ...state.user,
      ...action.payload
    }
  };

case "setItems":
  return { ...state, items: [...action.payload] };

case "transform":
  return { ...state, value: action.payload(state.value) };
```

### 2.2 Handling Complex Payloads

For complex state updates that depend on multiple values, structure your payloads accordingly:

```typescript
// Complex update requiring multiple parameters
dispatch({
  type: "filterAndSort",
  payload: {
    filter: { category: "books", inStock: true },
    sort: { field: "price", direction: "asc" }
  }
});

// In the reducer
case "filterAndSort":
  const { filter, sort } = action.payload;
  const filteredItems = state.items.filter(item =>
    item.category === filter.category &&
    item.inStock === filter.inStock
  );
  const sortedItems = [...filteredItems].sort((a, b) =>
    sort.direction === "asc"
      ? a[sort.field] - b[sort.field]
      : b[sort.field] - a[sort.field]
  );
  return { ...state, displayItems: sortedItems };
```

### 2.3 Typed Payloads with TypeScript

TypeScript helps enforce correct payload types for different actions:

```typescript
// Define specific payload types
type UserData = {
  id: number;
  name: string;
  email: string;
};

type FilterOptions = {
  category?: string;
  inStock?: boolean;
};

type SortOptions = {
  field: string;
  direction: "asc" | "desc";
};

// Define action types with their specific payloads
type Action =
  | { type: "increment" | "decrement" | "reset" }
  | { type: "incrementByAmount"; payload: number }
  | { type: "updateUser"; payload: UserData }
  | { type: "setFilter"; payload: FilterOptions }
  | { type: "setSort"; payload: SortOptions }
  | {
      type: "filterAndSort";
      payload: { filter: FilterOptions; sort: SortOptions };
    };
```

With this approach, TypeScript will ensure that each action includes the correct payload type, preventing runtime errors.

### 3. Predictable State Transitions

Each action results in a predictable state transition, making the application more predictable and easier to debug.

## useReducer vs. useState

### When to Use useState

- For simple state values (strings, numbers, booleans)
- When state updates don't depend on previous state
- For independent state values

```typescript
const [count, setCount] = useState(0);
const [name, setName] = useState("");
```

### When to Use useReducer

- For complex state objects (objects with multiple properties)
- When next state depends on previous state
- When state transitions have logic associated with them
- When actions describe "what happened" rather than directly setting new state

```typescript
// Complex state with useReducer
const [state, dispatch] = useReducer(reducer, {
  loading: false,
  error: null,
  data: [],
  page: 1,
  selectedItem: null,
});
```

### Comparison Example

**Using useState:**

```typescript
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <p>Count: {count}</p>
    </div>
  );
};
```

**Using useReducer:**

```typescript
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <p>Count: {state.count}</p>
    </div>
  );
};
```

While both implementations achieve the same result, the `useReducer` version is:

- More explicit about the possible state changes
- Easier to expand for additional actions
- Centralizes state update logic in one place

## Advanced Usage Patterns

### 1. Typed Reducers with TypeScript

Using TypeScript provides better type safety and autocompletion for reducers and actions:

```typescript
// Define action types as a discriminated union
type Action =
  | { type: "increment" | "decrement" | "reset" }
  | { type: "incrementByAmount" | "decrementByAmount"; payload: number };

// Define state type
interface CounterState {
  count: number;
}

// Typed reducer
const reducer = (state: CounterState, action: Action): CounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "incrementByAmount":
      return { ...state, count: state.count + action.payload };
    case "decrementByAmount":
      return { ...state, count: state.count - action.payload };
    default:
      // TypeScript will ensure all cases are handled
      return state;
  }
};
```

This typed approach provides several benefits:

1. **Type Safety**: TypeScript will check that the correct payload is provided for each action type
2. **Autocomplete**: IDE will suggest valid action types and required payloads
3. **Error Prevention**: Compiler will catch errors like missing payload or wrong payload type
4. **Code Documentation**: Types serve as documentation for the expected shape of actions

For example, TypeScript will enforce these rules:

```typescript
// ✅ Valid: Simple action without payload
dispatch({ type: "increment" });

// ✅ Valid: Action with required payload
dispatch({ type: "incrementByAmount", payload: 5 });

// ❌ Error: Missing required payload
dispatch({ type: "incrementByAmount" });

// ❌ Error: Wrong payload type (string instead of number)
dispatch({ type: "incrementByAmount", payload: "5" });

// ❌ Error: Unknown action type
dispatch({ type: "unknown" });
```

The discriminated union approach also helps the compiler with exhaustiveness checking in switch statements:

```typescript
const reducer = (state: CounterState, action: Action): CounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "incrementByAmount":
      return { ...state, count: state.count + action.payload };
    case "decrementByAmount":
      return { ...state, count: state.count - action.payload };
    default:
      // This ensures we've handled all possible action types
      const exhaustiveCheck: never = action;
      return exhaustiveCheck;
  }
};
```

When you add a new action type to the discriminated union, the compiler will force you to handle it in the reducer.

### 2. Initial State from Props

Sometimes the initial state might depend on props:

```typescript
const Counter = ({ initialCount = 0 }) => {
  const initialState = { count: initialCount };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Component logic
};
```

### 3. Lazy Initialization

For expensive initialization, you can use the third parameter of `useReducer`:

```typescript
const init = (initialCount: number) => {
  // You could perform complex calculations here
  return { count: initialCount };
};

const Counter = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  // Component logic
};
```

### 4. Multiple Reducers

For complex components, you might use multiple reducers:

```typescript
const Counter = () => {
  const [counterState, counterDispatch] = useReducer(counterReducer, {
    count: 0,
  });
  const [uiState, uiDispatch] = useReducer(uiReducer, {
    theme: "light",
    fontSize: "medium",
  });

  // Component logic using both states and dispatchers
};
```

## Combining with Context

One powerful pattern is combining `useReducer` with React Context to provide state management across components without prop drilling.

```typescript
// Create a context for the counter
const CounterContext = createContext<
  | {
      state: { count: number };
      dispatch: React.Dispatch<CounterAction>;
    }
  | undefined
>(undefined);

// Create a provider component
const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook to use the context
const useCounter = () => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

// Usage in a component
const CounterDisplay = () => {
  const { state } = useCounter();
  return <p>Count: {state.count}</p>;
};

const CounterButtons = () => {
  const { dispatch } = useCounter();
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

// Parent component
const App = () => {
  return (
    <CounterProvider>
      <CounterDisplay />
      <CounterButtons />
    </CounterProvider>
  );
};
```

This pattern:

- Separates state from UI components
- Allows components to access state without props
- Enables component composition with shared state

## Best Practices

### 1. Keep Reducers Pure

Ensure reducers are pure functions without side effects:

```typescript
// ✅ Good
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

// ❌ Bad: Side effect in reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "log":
      console.log("State updated!"); // Side effect!
      return state;
    default:
      return state;
  }
};
```

### 2. Use Action Creators for Complex Actions

For actions with complex payloads, use action creators to improve readability and ensure type safety:

```typescript
// Action creators for our Counter component
const increment = () => ({ type: "increment" as const });
const decrement = () => ({ type: "decrement" as const });
const reset = () => ({ type: "reset" as const });
const incrementByAmount = (amount: number) => ({
  type: "incrementByAmount" as const,
  payload: amount,
});
const decrementByAmount = (amount: number) => ({
  type: "decrementByAmount" as const,
  payload: amount,
});

// Usage in component
const handleIncrement = () => dispatch(increment());
const handleAddAmount = () => dispatch(incrementByAmount(input));
```

This approach has several benefits:

- Centralizes action creation logic
- Improves code maintainability and reusability
- Makes components cleaner by hiding implementation details
- Provides strong typing when combined with TypeScript

For more complex actions with multiple parameters, action creators can format the payload appropriately:

```typescript
// Complex action creator
const updateUserProfile = (
  id: number,
  name: string,
  email: string,
  preferences: UserPreferences
) => ({
  type: "updateUserProfile" as const,
  payload: {
    id,
    profile: { name, email },
    preferences,
  },
});

// Usage
dispatch(updateUserProfile(1, "John", "john@example.com", { theme: "dark" }));
```

Action creators can also perform validation or transformation of input data:

```typescript
// Action creator with validation
const setQuantity = (value: number) => {
  // Ensure quantity is within valid range
  const validQuantity = Math.max(0, Math.min(100, value));

  return {
    type: "setQuantity" as const,
    payload: validQuantity,
  };
};

// Action creator with data transformation
const setSearchQuery = (query: string) => ({
  type: "setSearchQuery" as const,
  payload: query.trim().toLowerCase(),
});
```

In our Counter component, we could refactor to use action creators like this:

```typescript
// Action creators
const incrementByAmount = (amount: number) => ({
  type: "incrementByAmount" as const,
  payload: amount,
});

const decrementByAmount = (amount: number) => ({
  type: "decrementByAmount" as const,
  payload: amount,
});

// Inside the component
const handleIncrementByAmount = () => {
  dispatch(incrementByAmount(input));
};

const handleDecrementByAmount = () => {
  dispatch(decrementByAmount(input));
};
```

### 3. Structure Actions Consistently

Follow a consistent pattern for your actions, such as the Flux Standard Action (FSA) format:

```typescript
interface Action<T = string, P = any> {
  type: T;
  payload?: P;
  error?: boolean;
  meta?: any;
}
```

The FSA standard has these key characteristics:

1. **`type` (required)**: A string describing the action
2. **`payload` (optional)**: The data associated with the action
3. **`error` (optional)**: A boolean indicating if the action represents an error
4. **`meta` (optional)**: Additional data that isn't part of the payload

Examples of FSA-compliant actions:

```typescript
// Regular action
const action: Action<"fetchUser", number> = {
  type: "fetchUser",
  payload: 123,
  meta: { source: "api" },
};

// Error action
const errorAction: Action<"fetchUser", Error> = {
  type: "fetchUser",
  payload: new Error("Failed to fetch user"),
  error: true,
  meta: { userId: 123 },
};
```

### 3.1 Payload Validation

When working with payloads, especially from user input or external APIs, validation is crucial:

```typescript
// Basic validation in action creator
const setQuantity = (input: unknown): Action<"setQuantity", number> => {
  // Ensure input is a number
  let quantity: number;

  if (typeof input === "string") {
    quantity = parseInt(input, 10);
  } else if (typeof input === "number") {
    quantity = input;
  } else {
    quantity = 0; // Default value for invalid input
  }

  // Apply business rules (e.g., quantity must be between 1 and 100)
  quantity = Math.max(1, Math.min(100, quantity));

  return {
    type: "setQuantity",
    payload: quantity,
  };
};

// Usage
const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  dispatch(setQuantity(e.target.value));
};
```

For more complex validation, you can use libraries like Zod, Yup, or io-ts:

```typescript
// Using Zod for validation
import { z } from "zod";

// Define schema
const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18).optional(),
});

type User = z.infer<typeof UserSchema>;

// Action creator with validation
const updateUser = (userData: unknown): Action<"updateUser", User | null> => {
  try {
    // Validate and parse input
    const validatedUser = UserSchema.parse(userData);

    return {
      type: "updateUser",
      payload: validatedUser,
    };
  } catch (error) {
    // Handle validation errors
    console.error("Invalid user data:", error);

    return {
      type: "updateUser",
      payload: null,
      error: true,
      meta: { validationError: error },
    };
  }
};
```

In the reducer, you can then handle both successful and error cases:

```typescript
case "updateUser":
  // Handle error case
  if (action.error) {
    return {
      ...state,
      error: "Invalid user data provided",
      lastAttempt: action.meta?.validationError
    };
  }

  // Handle successful case
  return {
    ...state,
    user: action.payload,
    error: null
  };
```

This approach ensures that your reducer only processes validated data, making your application more robust.

### 4. Split Reducers for Complex State

For complex state objects, split reducers into smaller functions:

```typescript
const userReducer = (state, action) => {
  switch (action.type) {
    case "updateName":
      return { ...state, name: action.payload };
    case "updateEmail":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const uiReducer = (state, action) => {
  switch (action.type) {
    case "toggleDarkMode":
      return { ...state, darkMode: !state.darkMode };
    case "setFontSize":
      return { ...state, fontSize: action.payload };
    default:
      return state;
  }
};

// Combine reducers
const mainReducer = (state, action) => {
  return {
    user: userReducer(state.user, action),
    ui: uiReducer(state.ui, action),
  };
};
```

### 5. Use Initial State Factory Functions

For complex initial states, use a factory function:

```typescript
const createInitialState = (userPreferences = {}) => {
  return {
    user: {
      id: null,
      name: "",
      ...userPreferences,
    },
    ui: {
      darkMode: false,
      fontSize: "medium",
      ...userPreferences.ui,
    },
    data: {
      loading: false,
      error: null,
      items: [],
    },
  };
};

const [state, dispatch] = useReducer(reducer, createInitialState());
```

## Performance Considerations

### 1. Memoize Dispatch Callbacks

When passing dispatch callbacks to child components, memoize them with `useCallback`:

```typescript
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment" });
  }, []);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  return (
    <div>
      <CounterButton onClick={handleIncrement} label="Increment" />
      <CounterButton onClick={handleDecrement} label="Decrement" />
      <p>Count: {state.count}</p>
    </div>
  );
};
```

### 2. Avoid Object Spread for Unaffected Properties

For large state objects, consider updating only the affected properties:

```typescript
// ❌ Less efficient for large objects
const reducer = (state, action) => {
  switch (action.type) {
    case "updateUser":
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload.id]: {
            ...state.users[action.payload.id],
            name: action.payload.name,
          },
        },
      };
    // Other cases...
  }
};

// ✅ More efficient approach using immer
import produce from "immer";

const reducer = produce((draft, action) => {
  switch (action.type) {
    case "updateUser":
      draft.users[action.payload.id].name = action.payload.name;
      break;
    // Other cases...
  }
});
```

### 3. Batch Related Actions

Group related state updates into a single action:

```typescript
// ❌ Multiple dispatches
dispatch({ type: "setLoading", payload: true });
dispatch({ type: "clearError" });
dispatch({ type: "fetchStart" });

// ✅ Single dispatch with multiple effects
dispatch({ type: "startFetch" }); // Reducer handles all related state updates
```

## Testing Strategies

### 1. Testing Reducers

Reducers are pure functions, making them easy to test in isolation:

```typescript
// reducer.test.ts
import { reducer, initialState } from "./reducer";

describe("Counter Reducer", () => {
  test("should return the initial state when no action is provided", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  test("should handle increment action", () => {
    const previousState = { count: 3 };
    expect(reducer(previousState, { type: "increment" })).toEqual({ count: 4 });
  });

  test("should handle decrement action", () => {
    const previousState = { count: 3 };
    expect(reducer(previousState, { type: "decrement" })).toEqual({ count: 2 });
  });

  test("should handle reset action", () => {
    const previousState = { count: 10 };
    expect(reducer(previousState, { type: "reset" })).toEqual({ count: 0 });
  });
});
```

### 2. Testing Components with Reducers

Use React Testing Library to test components that use `useReducer`:

```typescript
// Counter.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("renders counter with initial count of 0", () => {
    render(<Counter />);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  test("increments count when increment button is clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  test("decrements count when decrement button is clicked", () => {
    render(<Counter />);
    // First increment to avoid negative values if reducer prevents them
    fireEvent.click(screen.getByText("Increment"));
    fireEvent.click(screen.getByText("Increment"));
    fireEvent.click(screen.getByText("Decrement"));
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  test("resets count when reset button is clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Increment"));
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });
});
```

### 3. Testing Context with Reducers

When testing components that use a context with `useReducer`, create test wrappers:

```typescript
// test-utils.tsx
import { render, RenderOptions } from "@testing-library/react";
import { CounterProvider } from "./CounterContext";

const AllTheProviders = ({ children }) => {
  return <CounterProvider>{children}</CounterProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

// CounterDisplay.test.tsx
import { render, screen } from "./test-utils";
import CounterDisplay from "./CounterDisplay";

test("displays the current count from context", () => {
  render(<CounterDisplay />);
  expect(screen.getByText("Count: 0")).toBeInTheDocument();
});
```

### 4. Testing Dispatch Calls

To test that the right actions are dispatched, you can use Jest's mock functions:

```typescript
test("dispatches the correct action when button is clicked", () => {
  // Create a mock dispatch function
  const dispatch = jest.fn();

  // Mock useReducer hook
  jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useReducer: () => [{ count: 0 }, dispatch],
  }));

  render(<CounterButtons />);

  fireEvent.click(screen.getByText("Increment"));

  expect(dispatch).toHaveBeenCalledWith({ type: "increment" });
});
```

## Common Pitfalls and Solutions

### 1. Mutating State Directly

**Pitfall**: Modifying state directly in a reducer.

**Solution**: Always create a new state object instead of mutating the existing one.

```typescript
// ❌ Incorrect: Mutating state
const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      state.value = action.payload; // Mutation!
      return state;
    default:
      return state;
  }
};

// ✅ Correct: Creating new state
const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
```

### 2. Forgetting to Return State

**Pitfall**: Missing return statements in reducer branches.

**Solution**: Ensure every case returns a state value.

```typescript
// ❌ Incorrect: Missing return
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      const newState = { ...state, count: state.count + 1 };
    // Missing return statement!
    default:
      return state;
  }
};

// ✅ Correct
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
```

### 3. Side Effects in Reducers

**Pitfall**: Performing side effects in reducers.

**Solution**: Keep reducers pure and move side effects to event handlers or useEffect.

```typescript
// ❌ Incorrect: Side effect in reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "fetchData":
      fetch("/api/data").then(/* ... */); // Side effect!
      return { ...state, loading: true };
    default:
      return state;
  }
};

// ✅ Correct: Side effect in event handler
const DataComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "setLoading", payload: true });
    try {
      const response = await fetch("/api/data");
      const data = await response.json();
      dispatch({ type: "setData", payload: data });
    } catch (error) {
      dispatch({ type: "setError", payload: error.message });
    } finally {
      dispatch({ type: "setLoading", payload: false });
    }
  };

  // Component JSX
};
```

### 4. Unnecessary Re-renders

**Pitfall**: Components re-rendering when unrelated parts of state change.

**Solution**: Split state, use context, or memoize components.

```typescript
// ❌ Problem: Everything re-renders when only count changes
const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    user: { name: "John" },
    theme: "light",
  });

  return (
    <>
      <Counter count={state.count} dispatch={dispatch} />
      <UserProfile user={state.user} dispatch={dispatch} />
      <ThemeToggle theme={state.theme} dispatch={dispatch} />
    </>
  );
};

// ✅ Solution: Split into multiple reducers or use context
const App = () => {
  return (
    <CounterProvider>
      <UserProvider>
        <ThemeProvider>
          <Counter />
          <UserProfile />
          <ThemeToggle />
        </ThemeProvider>
      </UserProvider>
    </CounterProvider>
  );
};
```

## References

- [React Hooks API Reference](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [React useReducer Documentation](https://react.dev/reference/react/useReducer)
- [Redux Style Guide](https://redux.js.org/style-guide/style-guide) (many principles apply to useReducer)
- [TypeScript and React useReducer](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/#usereducer)
- [Kent C. Dodds: How to implement useReducer](https://kentcdodds.com/blog/how-to-implement-useReducer)
- [Immer library for immutable state management](https://immerjs.github.io/immer/)
