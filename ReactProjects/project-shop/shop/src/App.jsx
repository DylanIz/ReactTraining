import "./index.css";
import { useState } from "react";
import Nav from "./Nav/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const [category, setCategory] = useState(null);

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) => {
    return product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  const handleRadioChange = (e) => {
    setCategory(e.target.value);
  };

  const handleClick = (e) => {
    setCategory(e.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

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
