import { useState } from "react";

type Props = {};

const CallbackTwo = (props: Props) => {
  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * 10000)
  );

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 10000));
  };
  return (
    <div>
      <h1>RandomNumber:{randomNumber}</h1>
      <button onClick={generateRandomNumber}>Refresh Random Number</button>
    </div>
  );
};

export default CallbackTwo;
