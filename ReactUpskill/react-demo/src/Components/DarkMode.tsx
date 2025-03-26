import { useEffect, useState } from "react";

const DarkMode = () => {
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
          position: "fixed",
          bottom: "10px",
          right: "10px",
        }}
      >
        {darkMode ? "Enable Dark Mode" : "Disable Dark Mode"}
      </button>
    </>
  );
};

export default DarkMode;
