const UserList = () => {
  const userInfo = [
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Doe", age: 24 },
    { id: 3, name: "James Smith", age: 30 },
    { id: 4, name: "Judy Smith", age: 28 },
    { id: 5, name: "Jack Brown", age: 35 },
    { id: 6, name: "Jill Brown", age: 32 },
  ];

  return (
    <>
      <main>
        {userInfo.map(({ id, name, age }) => (
          <li key={id}>
            Name: {name} Age: {age}
          </li>
        ))}
      </main>
    </>
  );
};

export default UserList;
