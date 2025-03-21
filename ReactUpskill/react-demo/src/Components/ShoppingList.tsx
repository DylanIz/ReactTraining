import React, { useState } from "react";

type Props = {};

const ShoppingList = (props: Props) => {
  const [items, setItems] = useState<{ name: string; quantity: string }[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems((prevItems) => [...prevItems, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            Item Name{item.name} Item Quantity{item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
