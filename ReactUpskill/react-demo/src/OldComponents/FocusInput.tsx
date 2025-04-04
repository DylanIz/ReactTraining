import { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputElement.current?.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
};

export default FocusInput;
