import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import Contador from "../Contador/Contador"

const ItemDetailContainer =()=>{
const [productos, setProductos] = useState({});
  const {productId} =useParams ()
  useEffect(() => {
    getProductById(productId)
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);
    
 return(
        <div>
            <h1>DETALLE DEL PRODUCTO</h1>
            <div>
        <h1>{productos.title}</h1>
        <img src={productos.img} alt={productos.description} />
        <p>{productos.description}</p>
        <p>{productos.category}</p>
        <h2>$ {productos.precio}</h2>
        <Contador stock={productos.stock} />
      </div>
        </div>
    )}

export default ItemDetailContainer