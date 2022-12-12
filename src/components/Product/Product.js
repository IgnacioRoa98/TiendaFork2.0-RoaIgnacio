import styleProduct from "../Product/styleProduct.css";
import { Link } from "react-router-dom";
const Products = ({ products }) => {
  return (
    <div className="Card">
      <h2>{products.name}</h2>
      <img src={products.img} className="imgBody"></img>
      <p>{products.category}</p>
      <p>{products.description}</p>
      <Link to={`/detail/${products.id}`}> Ver detalle </Link>
    </div>
  );
};

export default Products;