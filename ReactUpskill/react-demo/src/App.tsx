import "./App.css";
import DarkMode from "./Components/DarkMode";
import UpdateUser from "./Components/UpdateUser";
import UserProfile from "./Components/UserProfile";
import { UserProvider } from "./UserContext";

const App = () => {
  return (
    <>
      <div className="app-container">
        <UserProvider>
          <DarkMode />
          <UserProfile />
          <UpdateUser />
        </UserProvider>
      </div>
    </>
  );
};

export default App;
