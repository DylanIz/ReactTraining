import "./index.css";
import Nav from "./Nav/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Nav />
        <Recommended />
        <Products />
      </div>
    </div>
  );
};

export default App;
