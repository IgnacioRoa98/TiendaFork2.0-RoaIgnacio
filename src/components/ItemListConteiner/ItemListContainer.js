import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ProductsList from "../ProductList/ProductList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
 useEffect(() => {
    if (categoryId) {
  getProductsByCategory(categoryId).then((response) => {
        setProducts(response);
      });
    } else {
      getProducts()
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoryId]);

  return (
    <div>
      <h1>LISTADO DE PRODUCTOS</h1>
      <ProductsList products={products} />
    </div>
  );
};
export default ItemListContainer;
