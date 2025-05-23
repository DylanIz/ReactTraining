import React from "react";
import PopUpContent from "./PopUpContent";

type Props = {};

const CopyInput = (props: Props) => {
  const [inputValue, setInputValue] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={handleCopy}>Copy</button>
      <PopUpContent copied={copied} />
    </div>
  );
};

export default CopyInput;
