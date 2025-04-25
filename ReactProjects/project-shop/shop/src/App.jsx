import "./index.css";
import Nav from "./Nav/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Price from "./Sidebar/Price/Price";
import Category from "./Sidebar/Category/Category";
import Colours from "./Sidebar/Colours/Colours";

const App = () => {
  return (
    <>
      <Nav />
      <Products />
      <Recommended />
      <Sidebar>
        <Price />
        <Category />
        <Colours />
      </Sidebar>
    </>
  );
};

export default App;
