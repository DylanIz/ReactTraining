import { useEffect } from "react";
import "./App.css";
import StyledCard from "./Components/StyledCard";
import ProfileCard from "./Components/ProfileCard";
import IconComponent from "./Components/IconComponent";
import { FaBeer } from "react-icons/fa";

const App = () => {
  useEffect(() => {
    document.body.classList.add("dark-mode");
  }, []);

  return (
    <>
      <div className="app-container">
        <StyledCard />
        <ProfileCard />
        <IconComponent icon={FaBeer} />
      </div>
    </>
  );
};

export default App;
