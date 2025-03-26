import { useEffect, useState } from "react";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const FetchDataEffect = () => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();
      if (data && data.length) {
        setPosts(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {posts.map((posts) => (
          <li key={posts.id}>{posts.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataEffect;
