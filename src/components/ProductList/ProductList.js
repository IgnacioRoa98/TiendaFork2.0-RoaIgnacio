import Products from "../Product/Product";
const ProductList = ({ productos }) => {
  return (
    <div className="Prod">
      {
      productos.map(productos => 
      <Products key={productos.id} productos={productos} />
      )}
    </div>
  );
};
export default ProductList;