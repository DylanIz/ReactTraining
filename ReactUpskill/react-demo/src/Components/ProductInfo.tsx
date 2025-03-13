const product = {
  name: "laptop",
  price: 100,
  availability: "In Stock",
};

const ProductInfo = () => {
  return (
    <div>
      {product.name}, {product.price}, {product.availability}
    </div>
  );
};

export default ProductInfo;
