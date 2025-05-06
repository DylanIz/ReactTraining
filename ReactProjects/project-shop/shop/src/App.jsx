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
  const [filters, setFilters] = useState({
    category: null,
    price: null,
    color: null,
    company: null,
  });

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) => {
    return product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "test") {
      setFilters({ ...filters, category: value });
    } else if (name === "test1") {
      setFilters({ ...filters, color: value });
    } else if (name === "test2") {
      setFilters({ ...filters, price: value });
    } else if (name === "test3") {
      setFilters({ ...filters, company: value });
    }
  };

  const handleClick = (e) => {
    setFilters({ ...filters, company: e.target.value });
  };

  const filteredData = (products, selectedFilters, query) => {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selectedFilters.category && selectedFilters.category !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedFilters.category
      );
    }

    if (selectedFilters.color && selectedFilters.color !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === selectedFilters.color
      );
    }

    if (selectedFilters.company && selectedFilters.company !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.company === selectedFilters.company
      );
    }

    if (selectedFilters.price && selectedFilters.price !== "") {
      if (selectedFilters.price.includes(" - ")) {
        const [min, max] = selectedFilters.price.split(" - ");
        filteredProducts = filteredProducts.filter(
          (product) =>
            parseInt(product.newPrice) >= parseInt(min) &&
            parseInt(product.newPrice) <= parseInt(max)
        );
      }
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

  const result = filteredData(products, filters, query);

  return (
    <div className="app-container">
      <Sidebar handleChange={handleChange} />
      <div className="main-content">
        <Nav query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />
      </div>
    </div>
  );
};

export default App;
