import React, { useContext, useState } from "react";
import { cartContext } from "../../Context/CartContext";

function BuyerForm({ finalizarCompra, handleShow }) {
  const { clear } = useContext(cartContext);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");

  console.log(nombre);

  const enviar = () => {
    const datosComprador = {
      nombre: nombre,
      telefono: telefono,
      email: email,
    };
    finalizarCompra(datosComprador);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <form className="d-flex align-items-center m-3 " onSubmit={handleSubmit}>
        <label htmlFor="nombre" className="m-2">
          Nombre:
        </label>
        <input
          className="form-control m-2"
          required
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="telefono" className="m-2">
          Telefono:
        </label>
        <input
          className="form-control m-2"
          required
          type="tel"
          id="telefono"
          name="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <label htmlFor="email" className="m-2">
          Email:
        </label>
        <input
          className="form-control m-2"
          required
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="d-flex">
          {nombre !== "" && telefono !== "" && email !== "" ? (
            <button
              className="btn btn-success m-2"
              type="submit"
              onClick={enviar}
            >
              Concretar Compra
            </button>
          ) : (
            <button className="btn btn-success m-2" type="submit" disabled>
              Concretar Compra
            </button>
          )}

          <button
            className="btn btn-outline-danger m-2"
            type="submit"
            onClick={clear}
          >
            Limpiar Carrito
          </button>
        </div>
      </form>
    </div>
  );
}

export default BuyerForm;
