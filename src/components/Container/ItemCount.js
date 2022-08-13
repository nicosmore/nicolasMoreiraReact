import React, { useState } from "react";

function Counter({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    count < stock && setCount(count + 1);
  };

  const quitar = () => {
    setCount(Math.max(count - 1, 1));
  };

  const agregarCart = () => {
    onAdd(count);
  };

  return (
    <div className="container">
      <div className="row row-cols-3 align-items-center m-2 p-0 border">
        <button className="btn btn-sm btn-primary fs-4 p-0" onClick={quitar}>
          -
        </button>
        <h5 className="m-0 p-1 fw-normal">{count}</h5>
        <button className="btn btn-sm btn-primary fs-4 p-0" onClick={sumar}>
          +
        </button>
      </div>
      <div>
        {}
        <button className="btn btn-primary" onClick={agregarCart}>
          Agregar a Carrito
        </button>
      </div>
    </div>
  );
}

export default Counter;
