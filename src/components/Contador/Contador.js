import { useState } from "react";
const Contador = ({ inicio, stock, onAdd }) => {
  const [count, setCount] = useState(inicio);
  const Crece = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const Decrecer = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="botones">
      <button onClick={() => Crece()}>Sumar al carrito</button>
      <h2> {count} </h2>
      <button onClick={() => Decrecer()}>Eliminar del carrito</button>
      <button onClick={() => onAdd(count)}> Agregar al carrito</button>
    </div>
  );
};
export default Contador;