import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import { db } from "../../firebase/firebase";
import {
  doc,
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import CartList from "./CartList";
import BuyerForm from "./BuyerForm";
import Modal from "react-bootstrap/Modal";

const Cart = () => {
  const { products, valorTotal, clear } = useContext(cartContext);
  const [idVenta, setIdVenta] = useState("");
  const [show, setShow] = useState(false);

  const finalizarCompra = (datosComprador) => {
    let items = [];
    products.forEach((product) => {
      items.push({ name: product.name, precio: product.precio });
    });

    const ventasCollection = collection(db, "ventas");

    addDoc(ventasCollection, {
      datosComprador,
      items,
      date: serverTimestamp(),
      total: valorTotal,
    }).then((result) => {
      setIdVenta(result.id);
      setShow(true);
    });

    products.forEach((product) => {
      const updateCollection = doc(db, "productos", product.id);
      updateDoc(updateCollection, { stock: product.stock - product.quantity });
      console.log(product.id);
    });
  };

  return (
    <div className="text-center container">
      <h4 className="d-flex justify-content-center border-top pt-3 fw-normal">
        Carro de Compras
      </h4>
      <div className="mt-3 p-2 border bg-dark bg-opacity-10">
        {products.length === 0 ? (
          <h1>
            No hay productos, busca <Link to="/">aqui</Link>
          </h1>
        ) : (
          <div>
            {products.map((product) => (
              <CartList key={product.id} product={product} />
            ))}
            <h4 className="m-2 shadowT mx-5 px-5 p-2 bg-opacity-50 bg-warning">
              Total: $ {valorTotal}
            </h4>
            <div className="m-2 shadowT  mx-5 px-5 p-2 border bg-light ">
              <h5 className="m-3 border-bottom ">
                Completar Datos Para Concretar Compra
              </h5>
              <BuyerForm finalizarCompra={finalizarCompra} />
            </div>
            <Modal className="d-flex align-items-center" show={show}>
              <div className="row-flex text-center px-5">
                <h4 className="p-2 fw-normal">El ID de Compra es: {idVenta}</h4>
                <Link to="/">
                  <button className="btn btn-primary m-2" onClick={clear}>
                    Volver a Inicio
                  </button>
                </Link>
              </div>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
