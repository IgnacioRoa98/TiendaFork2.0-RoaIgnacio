import styleCount from "../Contador/styleCount.css";
import { useState } from "react";
const Contador = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const Crece = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const Decrecer = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="bot">
      <button onClick={() => Decrecer()}>-</button>
      <h2>{count}</h2>
      <button onClick={() => Crece()}>+</button>
      <button onClick={() => onAdd(count)}> Agregar al carrito</button>
    </div>
  );
};
export default Contador;
