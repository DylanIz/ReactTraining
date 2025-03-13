const NumberList = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <main>
        {numbers.map((number) => (
          <p key={number}>Number {number}</p>
        ))}
      </main>
    </>
  );
};

export default NumberList;
