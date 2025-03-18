import { useEffect } from "react";
import "./App.css";
import Weather from "./Components/Weather";
import UserStatus from "./Components/UserStatus";
import Greeting from "./Components/Greeting";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <>
      <div className="app-container">
        <h1>Conditional Rendering</h1>
        {/* Weather */}
        <Weather temperature={10} />
        <Weather temperature={20} />
        <Weather temperature={30} />
        {/* UserStatus */}
        <UserStatus loggedIn={true} isAdmin={true} />
        <UserStatus loggedIn={true} isAdmin={false} />
        <UserStatus loggedIn={false} isAdmin={false} />
        {/* Greeting */}
        <Greeting timeOfDay="morning" />
        <Greeting timeOfDay="afternoon" />
      </div>
    </>
  );
};

export default App;
