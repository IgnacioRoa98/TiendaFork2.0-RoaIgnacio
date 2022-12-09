import { Link } from "react-router-dom";
const Products = ({ productos }) => {
  return (
    <div className="Card">
      <h2>{productos.name}</h2>
      <img src={productos.img} className="imgBody"></img>
      <p>{productos.category}</p>
      <p>{productos.description}</p>
      <Link to={`/detail/${productos.id}`}> Ver detalle </Link>
    </div>
  );
};
export default Products;
