import { useEffect, useState } from "react";

type Data = {
  id: number;
  title: string;
  body: string;
};

const useFetchPosts = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return data;
};

export default useFetchPosts;
