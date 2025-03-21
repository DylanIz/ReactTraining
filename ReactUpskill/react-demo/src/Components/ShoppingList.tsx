import React, { useState } from "react";

type Props = {};

const ShoppingList = (props: Props) => {
  const [shoppingList, setShoppingList] = useState<
    { name: string; quantity: number }[]
  >([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setShoppingList((prevShoppingList) => ({
      ...prevShoppingList,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={shoppingList.name}
          onChange={handleChange}
        ></input>
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={shoppingList.quantity}
          onChange={handleChange}
        ></input>
      </form>

      <h1>Item Name:{shoppingList.name}</h1>
      <h1>Item Quantity:{shoppingList.quantity}</h1>
    </div>
  );
};

export default ShoppingList;
