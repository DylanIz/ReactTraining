const NumberList = () => {
  const numbers = [1, 2, 3, 4, 5, 1];

  return (
    <>
      <main>
        {numbers.map((number, index) => (
          <li key={`${number}-${index}`}>Number {number}</li>
        ))}
      </main>
    </>
  );
};

export default NumberList;
