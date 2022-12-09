import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import Contador from "../Contador/Contador";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    getProductsById(productId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <div>
      <h1>DETALLE DEL PRODUCTO</h1>
      <div>
        <h1>{products.title}</h1>
        <img src={products.img} alt={products.description} />
        <p>{products.description}</p>
        <p>{products.category}</p>
        <h2>$ {products.precio}</h2>
        <Contador stock={products.stock} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
