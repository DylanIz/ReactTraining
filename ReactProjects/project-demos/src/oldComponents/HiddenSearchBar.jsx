import { FaSearch } from "react-icons/fa";
import "../styles.css";
import { useState } from "react";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColour, setBgColour] = useState("white");

  const handleClick = (e) => {
    setBgColour("#1a1a1a");

    if (e.target.className === "container") {
      setShowInput(false);
      setBgColour("#fff");
    }
  };

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColour }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default HiddenSearchBar;
