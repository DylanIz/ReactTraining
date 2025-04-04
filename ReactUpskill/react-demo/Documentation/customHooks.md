# Understanding React's Custom Hooks

## Introduction

Custom hooks are a powerful pattern in React that allows you to extract component logic into reusable functions. They enable you to reuse stateful logic between components without complex patterns like render props or higher-order components. This documentation provides a comprehensive overview of custom hooks, implementation patterns, best practices, and testing strategies.

## Table of Contents

1. [Basic Concepts](#basic-concepts)
2. [Creating Custom Hooks](#creating-custom-hooks)
3. [Common Patterns](#common-patterns)
4. [TypeScript Integration](#typescript-integration)
5. [Testing Custom Hooks](#testing-custom-hooks)
6. [Advanced Techniques](#advanced-techniques)
7. [Best Practices](#best-practices)
8. [Common Pitfalls](#common-pitfalls)
9. [References](#references)

## Basic Concepts

### What is a Custom Hook?

A custom hook is a JavaScript function whose name starts with "use" (e.g., `useFormInput`, `useWindowSize`) that may call other React hooks. This naming convention is important as it:

1. Tells React that this function follows the rules of hooks
2. Enables linting tools to find hook-related bugs
3. Makes your code more readable and self-documenting

### Rules of Custom Hooks

Like built-in hooks, custom hooks must follow the Rules of Hooks:

- Only call hooks at the top level of your function
- Only call hooks from React function components or other custom hooks
- Names must start with "use" followed by a capital letter

### Benefits of Custom Hooks

- **Reusability**: Extract and share stateful logic across components
- **Abstraction**: Hide complex logic behind a simple interface
- **Composition**: Combine multiple hooks to create more powerful ones
- **Testing**: Isolate logic for easier testing
- **Organization**: Keep components cleaner and more focused

## Creating Custom Hooks

### Basic Structure

A custom hook follows this general pattern:

```typescript
import { useState, useEffect } from "react";

function useMyHook(initialValue) {
  // Hook implementation using React's built-in hooks
  const [state, setState] = useState(initialValue);

  // Optional side effects
  useEffect(() => {
    // Effect logic
    return () => {
      // Cleanup logic
    };
  }, [dependencies]);

  // Optional utility functions
  const updateState = () => {
    // Update logic
  };

  // Return values and/or functions
  return {
    state,
    updateState,
  };
}
```

### Example: Counter Hook

```typescript
import { useState } from "react";

interface UseCounterOptions {
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
}

export function useCounter({
  initialValue = 0,
  step = 1,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
}: UseCounterOptions = {}) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => Math.min(max, prev + step));
  };

  const decrement = () => {
    setCount((prev) => Math.max(min, prev - step));
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
```

### Using a Custom Hook

```typescript
function CounterComponent() {
  const { count, increment, decrement, reset } = useCounter({
    initialValue: 0,
    step: 1,
    min: 0,
    max: 10,
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

## Common Patterns

### State Management Hooks

Custom hooks can encapsulate state management logic:

```typescript
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return {
    value,
    onChange: handleChange,
    reset,
  };
}

// Usage
function Form() {
  const nameInput = useFormInput("");
  const emailInput = useFormInput("");

  return (
    <form>
      <input type="text" {...nameInput} />
      <input type="email" {...emailInput} />
      <button
        type="button"
        onClick={() => {
          nameInput.reset();
          emailInput.reset();
        }}
      >
        Reset
      </button>
    </form>
  );
}
```

### Side Effect Hooks

Custom hooks can manage side effects like API calls:

```typescript
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();

        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(`/api/users/${userId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
}
```

### DOM Interaction Hooks

Custom hooks can simplify DOM interactions:

```typescript
function useLocalStorage(key, initialValue) {
  // Get stored value or use initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update stored value
  const setValue = (value) => {
    try {
      // Allow value to be a function
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Save state
      setStoredValue(valueToStore);

      // Save to localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
```

## TypeScript Integration

TypeScript enhances custom hooks with type safety:

### Type Definitions

```typescript
interface UseToggleOptions {
  initialValue?: boolean;
}

interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}

function useToggle({
  initialValue = false,
}: UseToggleOptions = {}): UseToggleReturn {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, toggle, setTrue, setFalse };
}
```

### Generic Types

```typescript
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // Implementation...
}

// Usage with type inference
const [user, setUser] = useLocalStorage<User>("user", { name: "", email: "" });
```

## Testing Custom Hooks

Custom hooks can be tested in isolation using the `@testing-library/react-hooks` package:

```typescript
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "./useCounter";

test("should increment counter", () => {
  const { result } = renderHook(() => useCounter({ initialValue: 0 }));

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

test("should respect maximum value", () => {
  const { result } = renderHook(() => useCounter({ initialValue: 9, max: 10 }));

  act(() => {
    result.current.increment();
    result.current.increment();
  });

  expect(result.current.count).toBe(10);
});
```

## Advanced Techniques

### Composing Hooks

Custom hooks can be composed together to create more powerful abstractions:

```typescript
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

function useBreakpoint() {
  const { width } = useWindowSize();

  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  };
}
```

### Hooks with Context

Hooks can work with context to provide shared state with easier access:

```typescript
// Create context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

// Usage in a component
function ThemedButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      style={{ background: theme === "dark" ? "#333" : "#fff" }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      Toggle Theme
    </button>
  );
}
```

### Memoization in Custom Hooks

Custom hooks can use memoization to optimize performance:

```typescript
function useSortedItems(items) {
  // Memoize expensive calculations
  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => a.localeCompare(b));
  }, [items]);

  return sortedItems;
}

function useSearchFilter(items, searchTerm) {
  // Memoize search function
  const filterItems = useCallback(
    (item) => item.toLowerCase().includes(searchTerm.toLowerCase()),
    [searchTerm]
  );

  // Memoize filtered results
  const filteredItems = useMemo(
    () => items.filter(filterItems),
    [items, filterItems]
  );

  return filteredItems;
}
```

## Best Practices

### 1. Start with a Use Case

Create hooks to solve specific problems, not just to extract code.

### 2. Keep Hooks Focused

Each hook should do one thing well. Prefer composition over complex, multi-purpose hooks.

### 3. Name with "use" Prefix

Always start custom hook names with "use" (e.g., useFormInput, useWindowSize).

### 4. Handle Cleanup

Include cleanup functions in useEffect to prevent memory leaks.

```typescript
function useEventListener(eventName, handler, element = window) {
  // Create a ref that stores the handler
  const savedHandler = useRef();

  // Update ref.current if handler changes
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    // Clean up
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
```

### 5. Provide Defaults

Use default parameters to make hooks easier to use.

```typescript
function useDebounce(value, delay = 300) {
  // Implementation...
}
```

### 6. Return Consistent Values

The returned value should have a consistent structure each render.

```typescript
// ✅ Good: Always returns the same structure
function useUser(id) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch logic...

  return { user, loading, error };
}

// ❌ Bad: Structure changes based on state
function useUser(id) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch logic...

  if (loading) {
    return { loading: true };
  }

  if (error) {
    return { error };
  }

  return { user };
}
```

### 7. Document the API

Add comments or TypeScript types to document inputs and outputs.

### 8. Test in Isolation

Write tests for custom hooks independent of components.

## Common Pitfalls

### 1. Violating Rules of Hooks

**Pitfall**: Calling hooks conditionally or in loops.

**Solution**: Always call hooks at the top level of your function.

```typescript
// ❌ Bad: Conditional hook call
function useConditionalFetch(url, condition) {
  const [data, setData] = useState(null);

  if (condition) {
    // This violates rules of hooks
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then(setData);
    }, [url]);
  }

  return data;
}

// ✅ Good: Condition inside the hook
function useConditionalFetch(url, condition) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (condition) {
      fetch(url)
        .then((res) => res.json())
        .then(setData);
    }
  }, [url, condition]);

  return data;
}
```

### 2. Dependencies Array Issues

**Pitfall**: Missing dependencies in the useEffect dependency array.

**Solution**: Include all variables from the outer scope that change over time.

```typescript
// ❌ Bad: Missing dependencies
function useSearch(query) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults(query).then(setResults);
  }, []); // Missing query dependency

  return results;
}

// ✅ Good: Complete dependencies
function useSearch(query) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults(query).then(setResults);
  }, [query]); // Properly includes query dependency

  return results;
}
```

### 3. Memory Leaks

**Pitfall**: Not cleaning up side effects properly.

**Solution**: Return cleanup functions from useEffect.

```typescript
// ❌ Bad: No cleanup
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    // Missing cleanup!
  }, []);

  return width;
}

// ✅ Good: Proper cleanup
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}
```

### 4. Stale Closures

**Pitfall**: Functions capturing outdated variables.

**Solution**: Use useCallback with proper dependencies or function updaters.

```typescript
// ❌ Bad: Stale closure in callback
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // This captures the current count value
    setTimeout(() => {
      setCount(count + 1); // May use stale count
    }, 1000);
  };

  return { count, increment };
}

// ✅ Good: Using function updater
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1); // Always uses latest count
    }, 1000);
  };

  return { count, increment };
}
```

## References

- [React Hooks Documentation](https://reactjs.org/docs/hooks-custom.html)
- [React TypeScript Cheatsheet - Custom Hooks](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/#custom-hooks)
- [Testing Library - React Hooks Testing](https://react-hooks-testing-library.com/)
- [Dan Abramov's Blog on Hooks](https://overreacted.io/a-complete-guide-to-useeffect/)
- [Kent C. Dodds's Blog on Custom Hooks](https://kentcdodds.com/blog/usememo-and-usecallback)
