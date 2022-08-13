import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../Container/ItemCount";
import { cartContext } from "../../Context/CartContext";

const iniciar = 1;

const ItemDetail = ({ products }) => {
  const [compra, setCompra] = useState(true);
  const { addItem } = useContext(cartContext);

  const onAdd = (count) => {
    setCompra(false);
    addItem({ ...products, quantity: count });
  };

  return (
    <div className="container card col-6 text-center">
      <h4 className="d-flex justify-content-center border-bottom pt-3 fw-normal text-uppercase ">
        {products.name}
      </h4>
      <div className="row row-cols-2 p-4">
        <img src={products.img} alt="" className="fluid border"></img>
        <div>
          <h5 className="fw-normal m-4">Descripción:</h5>
          <h5 className="fw-normal m-4">{products.descripcion}</h5>
          {compra ? (
            <ItemCount stock={products.stock} initial={iniciar} onAdd={onAdd} />
          ) : (
            <Link to="/cart">
              <button className="btn btn-outline-primary">
                Finalizar compra
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
