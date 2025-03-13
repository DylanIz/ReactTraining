type Props = {
  name: string;
  age: number;
};

const User = ({ name, age }: Props) => {
  return (
    <>
      <main>
        <h1>{name}</h1>
        <p>{age}</p>
      </main>
    </>
  );
};

export default User;
