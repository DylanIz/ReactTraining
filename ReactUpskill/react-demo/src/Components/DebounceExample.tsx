import * as React from "react";

const DebounceExample = () => {
  const [inputField, setInputField] = React.useState<string>("");
  const [debouncedField, setDebouncedField] = React.useState("");

  React.useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      setDebouncedField(inputField);
    }, 1000);
    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [inputField]);

  React.useEffect(() => {
    console.log("this only runs when the debounced field actually changes");
  }, [debouncedField]);

  return (
    <>
      <div>
        <h1>Debounce Example</h1>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputField(e.target.value);
          }}
          value={inputField}
        />
        <div>
          <span style={{ fontWeight: "bold" }}>inputField:</span>
          <span>{inputField}</span>
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>debouncedValue:</span>
          <span>{debouncedField}</span>
        </div>
      </div>
    </>
  );
};

export default DebounceExample;
