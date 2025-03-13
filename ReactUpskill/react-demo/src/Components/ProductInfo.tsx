const ProductInfo = () => {
  const product = {
    name: "laptop",
    price: 100,
    availability: "In Stock",
  };
  return (
    <div>
      <h1>Product Information</h1>
      <h2>Name: {product.name}</h2>
      <h2>Price: ${product.price}</h2>
      <h2>Availability: {product.availability}</h2>
    </div>
  );
};

export default ProductInfo;
