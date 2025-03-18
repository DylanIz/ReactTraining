type Props = {
  name: string;
  price: number;
};

const Products = ({ name, price }: Props) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Products;
