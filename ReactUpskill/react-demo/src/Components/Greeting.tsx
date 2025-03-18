type Props = {
  timeOfDay: string;
};

const Greeting = ({ timeOfDay }: Props) => {
  if (timeOfDay === "morning") {
    return <h2>Good morning</h2>;
  } else if (timeOfDay === "afternoon") {
    return <h2>Good afternoon</h2>;
  }
};

export default Greeting;
