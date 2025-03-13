const name = "Jon Snow";
const date = new Date().toDateString();

const Greeting = () => {
  return (
    <>
      <h1>Hello {name}</h1>
      <p>Todays date is {date}</p>
    </>
  );
};

export default Greeting;
