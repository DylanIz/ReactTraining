import { useEffect, useState } from "react";
import "./App.css";
import DarkMode from "./Components/DarkMode";

type Data = {
  id: number;
  title: string;
  body: string;
};

const App = () => {
  const [data, setData] = useState<Data[]>([]);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="app-container">
        {data &&
          data.map((item: Data) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
            </div>
          ))}
        <DarkMode />
      </div>
    </>
  );
};

export default App;
