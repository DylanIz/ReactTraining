import React, { useEffect } from "react";

type Props = {};

const CallbackThree = (props: Props) => {
  const [name, setName] = React.useState(() => {
    const initialName = localStorage.getItem("name") || "";
    return initialName;
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const clearName = () => {
    setName("");
    localStorage.removeItem("name");
  };

  return (
    <div>
      <h1>Name:{name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button onClick={clearName}>Clear Name</button>
    </div>
  );
};

export default CallbackThree;
