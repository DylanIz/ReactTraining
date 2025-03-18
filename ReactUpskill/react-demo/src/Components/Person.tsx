type Props = {
  name: string;
  age: number;
};

const Person = ({ name, age }: Props) => {
  return (
    <>
      <main>
        <h2>{name}</h2>
        <p>{age}</p>
      </main>
    </>
  );
};

export default Person;
