import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [url]);

  return data;
};

export default useFetch;
