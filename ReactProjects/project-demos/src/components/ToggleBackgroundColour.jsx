import { useState } from "react";
import "../styles.css";
export const ToggleBackgroundColour = () => {
  const [backgroundColour, setBackgroundColour] = useState("white");
  const [textColour, setTextColour] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColour(backgroundColour === "white" ? "#1b1b1b" : "white");
    setTextColour(textColour === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
  };

  return (
    <div style={{ backgroundColour, color: textColour }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: buttonStyle,
          color: textColour,
          border: `2px solid ${textColour}`,
        }}
      >
        {backgroundColour === "#1b1b1b" ? "Dark Mode" : "White Theme"}
      </button>
      <section className="content">
        <h1>
          Welcome To A <br />
          Real World....
        </h1>
      </section>
    </div>
  );
};
