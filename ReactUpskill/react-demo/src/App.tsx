import "./App.css";
import DarkMode from "./Components/DarkMode";
import useFetchPosts from "./Hooks/useFetchPosts";

const App = () => {
  const data = useFetchPosts();
  return (
    <>
      <div className="app-container">
        {data &&
          data.map((item) => (
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
