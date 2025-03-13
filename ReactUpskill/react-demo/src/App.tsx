import { useEffect } from "react";
import "./App.css";
import UserList from "./Components/UserList";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <div className="app-container">
      <UserList />
    </div>
  );
};

export default App;
