import React, { useEffect, useState } from "react";

type Props = {};

const DarkMode = (props: Props) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
        }}
      >
        {darkMode ? "Enable Dark Mode" : "Disable Dark Mode"}
      </button>
    </>
  );
};

export default DarkMode;
