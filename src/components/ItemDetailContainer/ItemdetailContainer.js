import Contador from "../Contador/Contador";
import styleItemDetailContainer from "../ItemDetailContainer/styleItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";


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
      <h1 className="tit">DETALLE DEL PRODUCTO</h1>
      <div>
      <h1>{products.title}</h1>
      <img src={products.img} alt={products.description} className="imgDesc" />
      <p className="descr">{products.description}</p>
      <p className="class">{products.category}</p>
      <h2 className="price">${products.price}</h2>
      <Contador stock={products.stock} count={0} />
    </div>
    </div>
  );
};

export default ItemDetailContainer;
