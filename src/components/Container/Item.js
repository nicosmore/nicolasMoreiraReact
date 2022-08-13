import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card m-2 p-2 col-sm-5 col-md-4 col-lg-3 text-center rounded-0">
      <img className="" src={product.img} alt=""></img>
      <div className="card-body">
        <h5 className="card-title text-capitalize">{product.name}</h5>
        <p className="card-subtitle text-muted">
          Categoria: {product.categoria}
        </p>
        <p className="card-text fs-5">${product.precio}</p>
        <Link
          to={`/productos/${product.id}`}
          className="btn btn-outline-primary rounded-0"
        >
          Ampliar Info
        </Link>
      </div>
    </div>
  );
};

export default Item;
