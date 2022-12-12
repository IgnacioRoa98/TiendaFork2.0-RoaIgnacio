import styleProductList from "../ProductList/styleProductList.css";
import Product from "../Product/Product";
const ProductList = ({ products }) => {
  return (
    <div className="Prod">
      {products.map((products) => (
        <Product key={products.id} products={products} />
      ))}
    </div>
  );
};
export default ProductList;
